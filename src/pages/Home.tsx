import Container from "@/@/components/ui/Container";
import Navbar from "@/@/components/ui/Navbar";
import Sidebar from "@/@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-7 lg:grid-cols-12 lg:gap-9">
        <div className="md:col-span-2 max-w-[268px] lg:col-span-2">
          <Sidebar />
        </div>
        <div className="md:col-span-5 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Home;
