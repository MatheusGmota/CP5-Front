/** @type {import('next').NextConfig} */
const nextConfig = {
        remotePatterns: [
            {
              protocol: 'https', 
              hostname: 'http.cat', 
              port: '', 
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
};

export default nextConfig;