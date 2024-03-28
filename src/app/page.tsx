'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Root() {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    localStorage.clear();
    router.push('/chooseAccount');
  }, [router]);

  return null;
}