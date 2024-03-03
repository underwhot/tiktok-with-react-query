import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from '../components/Header/Header';
import { Loader } from '../components/Loader/Loader';

export const Root = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
