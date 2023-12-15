import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home/index'));
const VIP = React.lazy(() => import('@/pages/vip/index'))
const Mine = React.lazy(() => import('@/pages/mine/index'))

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vip" element={<VIP />} />
      <Route path="/mine" element={<Mine />} />
    </Routes>
  </Suspense>
);

export default Router;
