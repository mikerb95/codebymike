/*
 Azure SQL schema for Project Management Panel
 Notes:
 - Uses UNIQUEIDENTIFIER with NEWSEQUENTIALID() for clustered PK to reduce page splits
 - UTC timestamps via SYSUTCDATETIME()
 - ROWVERSION for optimistic concurrency
 - Slug uniqueness enforced
 - Tag system with typed tags (0=Generic,1=Tech,2=Category,3=Tool)
*/

IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'dbo')
BEGIN
    EXEC('CREATE SCHEMA dbo');
END;
GO

-- PROJECTS
CREATE TABLE dbo.Project (
    ProjectId       UNIQUEIDENTIFIER NOT NULL CONSTRAINT DF_Project_Id DEFAULT NEWSEQUENTIALID(),
    Slug            NVARCHAR(120)    NOT NULL,
    Title           NVARCHAR(200)    NOT NULL,
    ShortDescription NVARCHAR(400)   NULL,
    Description     NVARCHAR(MAX)    NULL,
    RepoUrl         NVARCHAR(400)    NULL,
    LiveUrl         NVARCHAR(400)    NULL,
    Stars           INT              NULL,
    Forks           INT              NULL,
    Language        NVARCHAR(80)     NULL,
    IsFeatured      BIT              NOT NULL CONSTRAINT DF_Project_IsFeatured DEFAULT (0),
    Status          TINYINT          NOT NULL CONSTRAINT DF_Project_Status DEFAULT (1), -- 1=Active,0=Archived,2=Draft
    CreatedAt       DATETIME2(3)     NOT NULL CONSTRAINT DF_Project_Created DEFAULT SYSUTCDATETIME(),
    UpdatedAt       DATETIME2(3)     NOT NULL CONSTRAINT DF_Project_Updated DEFAULT SYSUTCDATETIME(),
    RowVersion      ROWVERSION       NOT NULL,
    CONSTRAINT PK_Project PRIMARY KEY CLUSTERED (ProjectId),
    CONSTRAINT UQ_Project_Slug UNIQUE (Slug)
);
GO

CREATE INDEX IX_Project_Featured ON dbo.Project (IsFeatured, CreatedAt DESC) INCLUDE (Title, Slug);
GO
CREATE INDEX IX_Project_Stars ON dbo.Project (Stars DESC) WHERE Stars IS NOT NULL;
GO

-- TAGS
CREATE TABLE dbo.Tag (
    TagId      UNIQUEIDENTIFIER NOT NULL CONSTRAINT DF_Tag_Id DEFAULT NEWSEQUENTIALID(),
    Name       NVARCHAR(100)    NOT NULL,
    Slug       NVARCHAR(120)    NOT NULL,
    TagType    TINYINT          NOT NULL CONSTRAINT DF_Tag_Type DEFAULT(0), -- 0=Generic
    CreatedAt  DATETIME2(3)     NOT NULL CONSTRAINT DF_Tag_Created DEFAULT SYSUTCDATETIME(),
    CONSTRAINT PK_Tag PRIMARY KEY CLUSTERED (TagId),
    CONSTRAINT UQ_Tag_Slug UNIQUE (Slug)
);
GO

-- PROJECT <-> TAG (M2M)
CREATE TABLE dbo.ProjectTag (
    ProjectId UNIQUEIDENTIFIER NOT NULL,
    TagId     UNIQUEIDENTIFIER NOT NULL,
    CreatedAt DATETIME2(3)     NOT NULL CONSTRAINT DF_ProjectTag_Created DEFAULT SYSUTCDATETIME(),
    CONSTRAINT PK_ProjectTag PRIMARY KEY CLUSTERED (ProjectId, TagId),
    CONSTRAINT FK_ProjectTag_Project FOREIGN KEY (ProjectId) REFERENCES dbo.Project(ProjectId) ON DELETE CASCADE,
    CONSTRAINT FK_ProjectTag_Tag FOREIGN KEY (TagId) REFERENCES dbo.Tag(TagId) ON DELETE CASCADE
);
GO

CREATE INDEX IX_ProjectTag_Tag ON dbo.ProjectTag (TagId, ProjectId);
GO

-- MEDIA ASSETS (images, videos, cover, etc.)
CREATE TABLE dbo.MediaAsset (
    AssetId     UNIQUEIDENTIFIER NOT NULL CONSTRAINT DF_MediaAsset_Id DEFAULT NEWSEQUENTIALID(),
    ProjectId   UNIQUEIDENTIFIER NULL, -- Some assets might be global (NULL)
    Kind        TINYINT          NOT NULL CONSTRAINT DF_MediaAsset_Kind DEFAULT(0), -- 0=Image,1=Video,2=Thumbnail,3=Cover
    Url         NVARCHAR(500)    NOT NULL,
    AltText     NVARCHAR(300)    NULL,
    Width       INT              NULL,
    Height      INT              NULL,
    SortOrder   SMALLINT         NULL,
    CreatedAt   DATETIME2(3)     NOT NULL CONSTRAINT DF_MediaAsset_Created DEFAULT SYSUTCDATETIME(),
    CONSTRAINT PK_MediaAsset PRIMARY KEY CLUSTERED (AssetId),
    CONSTRAINT FK_MediaAsset_Project FOREIGN KEY (ProjectId) REFERENCES dbo.Project(ProjectId) ON DELETE CASCADE
);
GO

CREATE INDEX IX_MediaAsset_Project_Sort ON dbo.MediaAsset (ProjectId, SortOrder) WHERE ProjectId IS NOT NULL;
GO

-- AUDIT LOG (generic)
CREATE TABLE dbo.AuditLog (
    AuditId     BIGINT IDENTITY(1,1) NOT NULL,
    EntityName  NVARCHAR(100)  NOT NULL,
    EntityId    NVARCHAR(100)  NOT NULL,
    Action      NVARCHAR(40)   NOT NULL, -- INSERT / UPDATE / DELETE
    ChangesJson NVARCHAR(MAX)  NULL,
    CreatedAt   DATETIME2(3)   NOT NULL CONSTRAINT DF_AuditLog_Created DEFAULT SYSUTCDATETIME(),
    CONSTRAINT PK_AuditLog PRIMARY KEY CLUSTERED (AuditId)
);
GO

-- TRIGGER to auto-update UpdatedAt on Project
CREATE OR ALTER TRIGGER dbo.trg_Project_SetUpdatedAt
ON dbo.Project
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE p
        SET UpdatedAt = SYSUTCDATETIME()
    FROM dbo.Project p
    INNER JOIN inserted i ON p.ProjectId = i.ProjectId;
END;
GO

-- OPTIONAL: Stored procedures (minimal examples)
CREATE OR ALTER PROCEDURE dbo.usp_Project_Insert
    @Slug NVARCHAR(120),
    @Title NVARCHAR(200),
    @ShortDescription NVARCHAR(400) = NULL,
    @Description NVARCHAR(MAX) = NULL,
    @RepoUrl NVARCHAR(400) = NULL,
    @LiveUrl NVARCHAR(400) = NULL,
    @IsFeatured BIT = 0,
    @Status TINYINT = 1,
    @ProjectId UNIQUEIDENTIFIER OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO dbo.Project (Slug, Title, ShortDescription, Description, RepoUrl, LiveUrl, IsFeatured, Status)
    VALUES (@Slug, @Title, @ShortDescription, @Description, @RepoUrl, @LiveUrl, @IsFeatured, @Status);
    SELECT @ProjectId = ProjectId FROM dbo.Project WHERE Slug=@Slug;
    SELECT * FROM dbo.Project WHERE ProjectId=@ProjectId;
END;
GO

CREATE OR ALTER PROCEDURE dbo.usp_Project_Update
    @ProjectId UNIQUEIDENTIFIER,
    @Title NVARCHAR(200) = NULL,
    @ShortDescription NVARCHAR(400) = NULL,
    @Description NVARCHAR(MAX) = NULL,
    @RepoUrl NVARCHAR(400) = NULL,
    @LiveUrl NVARCHAR(400) = NULL,
    @IsFeatured BIT = NULL,
    @Status TINYINT = NULL
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.Project
        SET Title = COALESCE(@Title, Title),
            ShortDescription = COALESCE(@ShortDescription, ShortDescription),
            Description = COALESCE(@Description, Description),
            RepoUrl = COALESCE(@RepoUrl, RepoUrl),
            LiveUrl = COALESCE(@LiveUrl, LiveUrl),
            IsFeatured = COALESCE(@IsFeatured, IsFeatured),
            Status = COALESCE(@Status, Status)
    WHERE ProjectId = @ProjectId;
    SELECT * FROM dbo.Project WHERE ProjectId=@ProjectId;
END;
GO

-- Simple view for public listing
CREATE OR ALTER VIEW dbo.vw_PublicProjects
AS
SELECT p.ProjectId, p.Slug, p.Title, p.ShortDescription, p.Stars, p.Language, p.IsFeatured, p.CreatedAt
FROM dbo.Project p
WHERE p.Status = 1; -- Active
GO

-- Suggested: enable full-text (optional, run manually if needed)
-- CREATE FULLTEXT CATALOG FTC_Projects;
-- CREATE FULLTEXT INDEX ON dbo.Project(Title LANGUAGE 3082, Description LANGUAGE 3082) KEY INDEX PK_Project WITH STOPLIST = SYSTEM;

/* Rollback snippet (manual):
DROP VIEW dbo.vw_PublicProjects;
DROP PROCEDURE dbo.usp_Project_Update;
DROP PROCEDURE dbo.usp_Project_Insert;
DROP TRIGGER dbo.trg_Project_SetUpdatedAt;
DROP TABLE dbo.MediaAsset;
DROP TABLE dbo.ProjectTag;
DROP TABLE dbo.Tag;
DROP TABLE dbo.Project;
DROP TABLE dbo.AuditLog;
*/
