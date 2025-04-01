import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ytimg.com",
                port: '',
                pathname: '/vi/**',
            },
            {
                protocol: 'https',
                hostname: "miro.medium.com",
                port: '',
                pathname: '/v2/**',
            },
            {
                protocol: 'https',
                hostname: "www.folio3.com",
                port: '',
                pathname: '/mobile/**',
            },
        ]
    }
};

export default nextConfig;
