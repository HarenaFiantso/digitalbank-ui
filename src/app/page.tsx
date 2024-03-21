'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Home() {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return null;
}
