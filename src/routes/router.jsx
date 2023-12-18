import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home/index'));
const VIP = React.lazy(() => import('@/pages/vip/index'))
const Mine = React.lazy(() => import('@/pages/mine/index'))
const List = React.lazy(() => import('@/pages/list/index'))
const LayoutWithFooter = React.lazy(() => import('@/components/layoutWithFooter/index'))

const Router = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<LayoutWithFooter />}>
                {/* 使用带底部导航的布局 */}
                <Route path="/" element={<Home />} />
                <Route path="/vip" element={<VIP />} />
                <Route path="/mine" element={<Mine />} />
            </Route>
            <Route path="/list" element={<List />} />
        </Routes>
    </Suspense>
)

export default Router;
