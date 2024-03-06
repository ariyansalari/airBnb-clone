import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Container, Divider, TopNavBar } from "ui";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <body>
        <header>
          <nav>
            <TopNavBar />
          </nav>
        </header>
        <Divider/>
        <main>
          {children}
          <Outlet />
        </main>
        <footer></footer>
      </body>
  );
};

export default MainLayout;
