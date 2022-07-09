import React, { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "../util/GlobalContext";

interface Arrays {
  arrUsers: any[];
  loginUserIndex: number;
}

const RoutesInfo = () => {
  const [state, setState] = useState<Arrays>({
    arrUsers: [],
    loginUserIndex: -1,
  });

  const LoginLazy = lazy(() => import("./login"));

  const ProfileLazy = lazy(() => import("./profile"));

  const RegisterLazy = lazy(() => import("./register"));

  const InfoLazy = lazy(() => import("./info"));

  //const InfoLazy = Info;

  // const shareData = new ShareData();

  const Loading = () => {
    return <div>Loading Module...</div>;
  };

  return (
    <GlobalContext.Provider value={state}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LoginLazy />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <RegisterLazy />
            </Suspense>
          }
        />
        <Route
          path="/info"
          element={
            <Suspense fallback={<Loading />}>
              <InfoLazy />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <ProfileLazy />
            </Suspense>
          }
        />
      </Routes>
    </GlobalContext.Provider>
  );
};

export default RoutesInfo;
