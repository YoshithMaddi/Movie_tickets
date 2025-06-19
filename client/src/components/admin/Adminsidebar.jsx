import React from "react";
import { assets } from "../../assets/assets";
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from "lucide-react";

const Adminsidebar = () => {
  const user = {
    firstname: "Admin",
    lastname: "User",
    imageurl: assets.profile,
  };
  const adminNavlinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon},
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquareIcon },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon},
    {
      name: "List Bookings",path: "/admin/list-bookings",icon: ListCollapseIcon,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px) md:flex flex-col">
      
    </div>
  );
};

export default Adminsidebar;
