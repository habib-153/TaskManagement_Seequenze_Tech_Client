import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import TodoContainer from "@/@/components/todo/TodoContainer";
import ExpiredTasks from "@/@/components/todo/ExpiredTasks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <TodoContainer />
        },
        {
            path: "/expired",
            element: <ExpiredTasks />
        }
      ],
    }])

export default router