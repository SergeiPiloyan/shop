import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

export const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }, i) => {
          return (
            <Route key={`${path}_${i}`} path={path} element={<Component />} />
          );
        })}

      {publicRoutes.map(({ path, Component }, i) => {
        return (
          <Route key={`${path}_${i}`} path={path} element={<Component />} />
        );
      })}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};
