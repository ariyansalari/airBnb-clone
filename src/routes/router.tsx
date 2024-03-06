import { Navigate, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { HomeScreen } from "screens";
import MainLayout from "ui/components/Layout/MainLayout/MainLayout";
const defineRoutes = (path?: string) => {
  return `/:lng${path ?? ""}`;
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routes.mainRoute} />,
  },
  {
    path: defineRoutes(),
    element: <MainLayout />,
    children: [
      {
        path: defineRoutes(),
        element: <HomeScreen />,
      },
    ],
  },
]);
