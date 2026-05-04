import type {NextConfig} from 'next';

// 외부이미지, 외부URL을 쓰려면 images.remotePatterns에 허용 도메인과 경로가 등록되어야함.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = supabaseUrl
  ? new URL(supabaseUrl).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseHostname
      ? [
          {
            protocol: 'https',
            hostname: supabaseHostname,
            port: '',
            pathname: '/storage/v1/object/public/**',
            search: '',
          },
        ]
      : [],
  },
};

export default nextConfig;
