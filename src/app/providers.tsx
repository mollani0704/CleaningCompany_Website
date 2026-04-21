'use client';

import {type ReactNode, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({children}: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
