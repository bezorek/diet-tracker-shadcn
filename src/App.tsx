import React from "react";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
          <SidebarTrigger />
      </SidebarProvider>
    </>
  );
};

export default App;
