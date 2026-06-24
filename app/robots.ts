import type { MetadataRoute } from "next";

// callo는 공개 터널(Tailscale Funnel 등)로 외부에 노출돼 있으므로
// 검색엔진/크롤러가 색인하지 못하도록 전체 차단한다.
// (robots.txt + layout의 noindex 메타 + next.config의 X-Robots-Tag 헤더 = 3중 차단)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
