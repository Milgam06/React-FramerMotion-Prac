import { Route, Routes, Outlet } from "react-router-dom";
import { DefaultLayout } from "@components/layouts";

import { MainPage } from "./pages";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
