import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../App";

export const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
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
