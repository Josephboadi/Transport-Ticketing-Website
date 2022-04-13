import { useState } from "react";
import Main from "../admincomponents/main/Main";
import Navbar from "../admincomponents/navbar/Navbar";
import Sidebar from "../admincomponents/sidebar/Sidebar";

const ClientAdmin = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default ClientAdmin;
