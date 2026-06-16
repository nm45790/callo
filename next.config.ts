import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Quick Tunnel(*.trycloudflare.com)로 외부 접속할 때
  // 1) dev 에셋/HMR 교차출처 허용
  allowedDevOrigins: ["*.trycloudflare.com"],
  // 2) 서버 액션(폼 제출)을 그 도메인에서도 허용 (안 하면 추가 버튼이 막힘)
  experimental: {
    serverActions: {
      allowedOrigins: ["*.trycloudflare.com"],
    },
  },
};

export default nextConfig;
