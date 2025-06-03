import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg'),
      new URL('https://cdn4.iconfinder.com/data/icons/finite-application/16/grid-9-1024.png'),
      new URL('https://www.svgrepo.com/show/61705/down-arrow.svg'),
    ],
  },
};

export default nextConfig;
