import { lazy,Suspense } from "react";
// components
const Img = lazy(() => import("../components/img"));
const Background = lazy(() => import("../components/background"));
const Evaknown = lazy(() => import("../components/evaknown"));
const Navbar = lazy(() => import("../components/Navbar"));
const Contents = lazy(() => import("../components/Contents"));
const Loading = lazy(() => import("../components/Loading"));

const index = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full z-120 max-xs:hidden">
            <Navbar />
          </div>
          <div className="absolute flex items-center justify-between top-140 w-full z-120 max-sm:hidden">
            <Contents />
          </div>
          <div className="absolute inset-0 flex justify-center items-center select-none">
            <Evaknown />
          </div>
          <div>
            <Background />
          </div>
          <div className="absolute inset-0 flex justify-center items-center z-110 select-none">
            <Img />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default index;
