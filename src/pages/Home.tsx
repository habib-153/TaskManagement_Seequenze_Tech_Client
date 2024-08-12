import TodoContainer from "@/@/components/todo/TodoContainer";
import Container from "@/@/components/ui/Container";
import Navbar from "@/@/components/ui/Navbar";
import Sidebar from "@/@/components/ui/Sidebar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <Sidebar />
        </div>
        <div className="md:col-span-9">
          <TodoContainer />
        </div>
      </div>
    </Container>
  );
};

export default Home;
