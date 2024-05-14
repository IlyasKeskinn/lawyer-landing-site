import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import React from "react";

export const MainLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};
