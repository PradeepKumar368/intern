import AddCourseButton from "./AddCourseButton"
import Sidebar, { SidebarItem } from "./Sidebar/sidebar"
import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import CourseTable from "./Table/table"


const Dashboard = () => {
  return (
    <div className="flex">

      <Sidebar>
        {/* Sidebar items */}
        <SidebarItem text="Home" icon={<AiOutlineHome />} active={true} />
        <SidebarItem text="Messages" icon={<AiOutlineMessage />} />
        <SidebarItem text="Settings" icon={<AiOutlineSetting />} />
      </Sidebar>
      {/* Main content of your app */}
      <div className="flex-1">
        <CourseTable />
        <AddCourseButton />
      </div>

    </div>
  )
}

export default Dashboard
