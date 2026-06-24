import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 외부 터널(Cloudflare Quick Tunnel, Tailscale Funnel)로 접속할 때
  // 1) dev 에셋/HMR 교차출처 허용
  allowedDevOrigins: ["*.trycloudflare.com", "*.ts.net"],
  // 2) 서버 액션(폼 제출)을 그 도메인에서도 허용 (안 하면 추가 버튼이 막힘)
  experimental: {
    serverActions: {
      allowedOrigins: ["*.trycloudflare.com", "*.ts.net"],
    },
  },
  // 공개 노출 중 — 모든 응답에 검색엔진 색인 차단 헤더 부착
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
