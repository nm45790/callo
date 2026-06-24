# 🥗 Callo

몸무게와 식사를 기록하는 개인 다이어트 앱. 맥미니 홈서버에서 운영.

**스택:** Next.js 16 (App Router) · Postgres 17 (Docker) · Prisma 6 · Tailwind CSS 4

## 시작하기

### 1. 환경 변수
```bash
cp .env.example .env
# .env 의 값(POSTGRES_PASSWORD 등)을 채운다
```

### 2. DB 띄우기 (Docker)
```bash
docker compose up -d
```

### 3. 마이그레이션 & 실행
```bash
pnpm install
pnpm exec prisma migrate dev   # 테이블 생성
pnpm dev                       # http://localhost:3000
```

## 자주 쓰는 명령

| 명령 | 설명 |
|------|------|
| `docker compose up -d` | DB 켜기 |
| `docker compose down` | DB 끄기 (데이터 유지) |
| `docker compose down -v` | DB + 데이터 영구 삭제 |
| `pnpm dev` | 개발 서버 |
| `pnpm exec prisma studio` | DB GUI |

## 구조
- `app/page.tsx` — 메인 화면 (서버 컴포넌트, DB 읽기)
- `app/actions.ts` — 서버 액션 (폼 제출 → DB 쓰기)
- `lib/prisma.ts` — Prisma 클라이언트
- `prisma/schema.prisma` — DB 스키마 (몸무게 / 식사)
- `docker-compose.yml` — Postgres 컨테이너 (포트는 localhost 전용)

## 메모
- 비밀값은 `.env` 에만 (git 미포함). DB 포트는 `127.0.0.1` 로 묶여 외부 노출 없음.
- 스타일이 깨지면 `rm -rf .next && pnpm dev` (Turbopack 캐시 리셋).
