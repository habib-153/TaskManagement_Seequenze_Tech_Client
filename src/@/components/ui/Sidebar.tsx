import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import SidebarCard from "../sidebar/SidebarCard";
import AddTodoModal from "../todo/AddTodoModal";
import { Link } from "react-router-dom";
import { categoriesTask } from "@/utils/categoriesTask";

const Sidebar = () => {
  const { data } = useGetAllTasksQuery({});

  const [toDo,onProgress,done,expired] = categoriesTask(data?.data)
  return (
    <>
      {/* this div will contain everything in this component */}
      <div className="flex flex-col gap-4">
        {/* first div for expired tasks */}
        <Link to='/expired'>
        <SidebarCard
          text="Expired Tasks"
          number={expired?.length || 0}
          logo={
            <svg
              className="mb-5 ms-4"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="46" height="46" rx="23" fill="#F42D20" />
              <rect
                x="12"
                y="12"
                width="22"
                height="22"
                fill="url(#pattern0_1_1543)"
              />
              <defs>
                <pattern
                  id="pattern0_1_1543"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_1_1543" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_1_1543"
                  width="100"
                  height="100"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          }
        />
        </Link>
        {/* second dif for all active tasks */}
        <SidebarCard
          text="All Active Tasks"
          number={(toDo?.length + onProgress?.length) || 0}
          logo={
            <svg
              className="mb-5 ms-4"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="46" height="46" rx="23" fill="#E89271" />
              <path
                d="M14.1757 18.2491C14.9874 17.2842 16.3789 16.8125 18.4167 16.8125H27.5833C29.6211 16.8125 31.0126 17.2842 31.8243 18.2491C32.628 19.2047 32.7045 20.4601 32.5756 21.6306L31.8878 28.9674C31.7868 29.9098 31.5502 30.943 30.7088 31.7117C29.8736 32.4748 28.5796 32.8542 26.6667 32.8542H19.3333C17.4204 32.8542 16.1264 32.4748 15.2912 31.7117C14.4497 30.943 14.2132 29.9098 14.1122 28.9674L14.1113 28.9583L13.4244 21.6306C13.2955 20.4601 13.372 19.2047 14.1757 18.2491ZM15.228 19.1342C14.7956 19.6483 14.6739 20.4208 14.7917 21.4852L14.7929 21.4967L15.4799 28.8254C15.5716 29.6773 15.7615 30.279 16.2186 30.6966C16.6828 31.1206 17.5613 31.4792 19.3333 31.4792H26.6667C28.4387 31.4792 29.3172 31.1206 29.7814 30.6966C30.2385 30.279 30.4284 29.6773 30.5201 28.8254L31.2082 21.4852C31.326 20.4208 31.2044 19.6483 30.772 19.1342C30.3461 18.6279 29.4597 18.1875 27.5833 18.1875H18.4167C16.5403 18.1875 15.6539 18.6279 15.228 19.1342Z"
                fill="white"
              />
              <path
                d="M20.0609 15.7128C20.022 16.011 20.0208 16.35 20.0208 16.7666V17.4999C20.0208 17.8796 19.713 18.1874 19.3333 18.1874C18.9536 18.1874 18.6458 17.8796 18.6458 17.4999L18.6458 16.7428C18.6458 16.3545 18.6458 15.9305 18.6975 15.5348C18.751 15.1247 18.8657 14.6894 19.1344 14.3006C19.6998 13.4826 20.7354 13.1458 22.2667 13.1458H23.7333C25.2646 13.1458 26.3002 13.4826 26.8656 14.3006C27.1343 14.6894 27.249 15.1247 27.3026 15.5348C27.3542 15.9305 27.3542 16.3545 27.3542 16.7428L27.3542 17.4999C27.3542 17.8796 27.0464 18.1874 26.6667 18.1874C26.287 18.1874 25.9792 17.8796 25.9792 17.4999V16.7666C25.9792 16.35 25.9781 16.011 25.9391 15.7128C25.901 15.4207 25.8324 15.2241 25.7344 15.0824C25.5665 14.8393 25.1354 14.5208 23.7333 14.5208H22.2667C20.8646 14.5208 20.4336 14.8393 20.2656 15.0824C20.1676 15.2241 20.099 15.4207 20.0609 15.7128Z"
                fill="white"
              />
              <path
                d="M21.8549 23.6882C21.8542 23.7537 21.8542 23.8283 21.8542 23.9167V24.8608C21.8542 25.1189 21.8564 25.3087 21.8788 25.4698C21.9004 25.6246 21.9346 25.7 21.9636 25.7409C21.996 25.7865 22.1572 25.9792 23 25.9792C23.8466 25.9792 24.0059 25.7847 24.0376 25.7395C24.0668 25.6978 24.1009 25.6213 24.1221 25.4646C24.1441 25.3017 24.1458 25.111 24.1458 24.8517V23.9167C24.1458 23.8283 24.1458 23.7537 24.1451 23.6882C24.0797 23.6875 24.0051 23.6875 23.9167 23.6875H22.0833C21.9949 23.6875 21.9203 23.6875 21.8549 23.6882ZM22.0532 22.3125C22.0633 22.3125 22.0733 22.3125 22.0833 22.3125H23.9167C23.9267 22.3125 23.9367 22.3125 23.9468 22.3125C24.1495 22.3125 24.3549 22.3124 24.5225 22.331C24.6934 22.35 24.9772 22.4008 25.2049 22.6285C25.4326 22.8561 25.4833 23.1399 25.5023 23.3108C25.5209 23.4784 25.5209 23.6839 25.5208 23.8866C25.5208 23.8966 25.5208 23.9066 25.5208 23.9167V24.862C25.5208 25.1 25.5208 25.3817 25.4847 25.649C25.4472 25.9263 25.365 26.241 25.1639 26.5283C24.7349 27.1407 23.9775 27.3542 23 27.3542C22.0278 27.3542 21.2724 27.1435 20.8418 26.536C20.6394 26.2504 20.5556 25.9367 20.517 25.6593C20.4792 25.3881 20.4792 25.1024 20.4792 24.8608V23.9167C20.4792 23.9066 20.4792 23.8966 20.4792 23.8866C20.4791 23.6839 20.4791 23.4784 20.4977 23.3108C20.5167 23.1399 20.5674 22.8561 20.7951 22.6285C21.0228 22.4008 21.3066 22.35 21.4775 22.331C21.6451 22.3124 21.8505 22.3125 22.0532 22.3125Z"
                fill="white"
              />
              <path
                d="M32.4018 21.6789C32.6252 21.986 32.5573 22.416 32.2502 22.6393C30.0354 24.2501 27.505 25.2081 24.9192 25.5337C24.5425 25.5812 24.1987 25.3143 24.1512 24.9375C24.1038 24.5608 24.3707 24.217 24.7474 24.1695C27.1117 23.8718 29.4213 22.9965 31.4415 21.5273C31.7485 21.304 32.1785 21.3719 32.4018 21.6789Z"
                fill="white"
              />
              <path
                d="M13.8343 21.9423C14.0488 21.629 14.4767 21.5488 14.79 21.7633C16.7598 23.1115 18.9811 23.9241 21.2432 24.1774C21.6205 24.2197 21.8922 24.5598 21.8499 24.9371C21.8077 25.3145 21.4675 25.5861 21.0902 25.5439C18.6039 25.2655 16.1685 24.3731 14.0134 22.898C13.7 22.6835 13.6199 22.2557 13.8343 21.9423Z"
                fill="white"
              />
            </svg>
          }
        />
        {/* last div for completed tasks */}
        <SidebarCard
          text="Completed tasks"
          number={done?.length || 0}
          logo={
            <svg
              className="mb-5 ms-4"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="46" height="46" rx="23" fill="#70A1E6" />
              <path
                d="M23 14.5208C18.3197 14.5208 14.5208 18.3196 14.5208 22.9999C14.5208 27.6802 18.3197 31.4791 23 31.4791C27.6803 31.4791 31.4792 27.6802 31.4792 22.9999C31.4792 18.3196 27.6803 14.5208 23 14.5208ZM13.1458 22.9999C13.1458 17.5602 17.5603 13.1458 23 13.1458C28.4397 13.1458 32.8542 17.5602 32.8542 22.9999C32.8542 28.4396 28.4397 32.8541 23 32.8541C17.5603 32.8541 13.1458 28.4396 13.1458 22.9999Z"
                fill="#F1F1F1"
              />
              <path
                d="M22.6609 18.1965C23.0406 18.1965 23.3484 18.5043 23.3484 18.884V22.6424C23.3484 22.7831 23.4021 22.9871 23.5216 23.1967C23.6411 23.4063 23.7893 23.5562 23.9097 23.6276L23.9115 23.6287L23.9115 23.6287L26.7532 25.3245C27.0792 25.5191 27.1858 25.9411 26.9912 26.2672C26.7966 26.5932 26.3746 26.6998 26.0485 26.5052L23.2087 24.8105C23.2084 24.8103 23.2081 24.8101 23.2077 24.8099C22.8336 24.5879 22.5329 24.2386 22.3272 23.8778C22.1213 23.5168 21.9734 23.0791 21.9734 22.6424V18.884C21.9734 18.5043 22.2812 18.1965 22.6609 18.1965Z"
                fill="#F1F1F1"
              />
            </svg>
          }
        />
      </div>
      <AddTodoModal />
    </>
  );
};

export default Sidebar;
