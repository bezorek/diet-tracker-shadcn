import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { ProgressCircle } from "./components/ProgressCircle";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
          <SidebarTrigger />
      </SidebarProvider>
      <ProgressCircle />
    </>
  );
};

export default App;
