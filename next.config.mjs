/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'assets.vercel.com' },
      { protocol: 'https', hostname: 'tailwindcss.com' },
      { protocol: 'https', hostname: 'www.typescriptlang.org' },
      { protocol: 'https', hostname: 'nodejs.org' },
      { protocol: 'https', hostname: 'azure.microsoft.com' },
      { protocol: 'https', hostname: 'www.netlify.com' },
      { protocol: 'https', hostname: 'static-00.iconduck.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

export default nextConfig;
