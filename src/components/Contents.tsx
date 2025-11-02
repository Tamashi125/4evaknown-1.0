import { lazy } from "react";
// components
const Mucis = lazy(() => import("./ui/Mucis"));
const Social = lazy(() => import("./ui/Social"));

const Contents = () => {
  return (
    <>
      <Mucis />
      <Social />
    </>
  );
};

export default Contents;
