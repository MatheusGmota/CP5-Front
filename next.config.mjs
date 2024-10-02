/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'http.cat', 
        port: '', 
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images-assets.nasa.gov',
        port:'',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'images-assets.nasa.gov',
        port:'',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig;