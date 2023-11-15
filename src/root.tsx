import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthPage } from '@/pages/auth';
import { DashboardPage } from '@/pages/dashboard';
import Spinner from '@/components/ui/spinner.tsx';

export function Root() {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner/>
        </div>
      }
    >
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/dashboard" index element={<DashboardPage/>}/>
      </Routes>
    </Suspense>
  );
}
