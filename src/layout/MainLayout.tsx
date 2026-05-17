import { Outlet } from "react-router";
import Navbar from "@/shared/common/NavBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;