"client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

//components
import SidebarLink from "../components/SidebarLink";

//interface
interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const navLinks: string[] = [
    "/open_art/dashboard",
    "/open_art/artists",
    "/open_art/account",
    "/open_art/containers/ArtWorksDashboard",
    "/",
  ];
  const icons: ReactNode[] = [
    RxSketchLogo,
    RxDashboard,
    RxPerson,
    HiOutlineShoppingBag,
    FiSettings,
  ];

  const sideIcons = () => {
    const iconComponents: ReactNode[] = [];

    for (let i = 0; i < icons.length; i++) {
      iconComponents.push(
        <SidebarLink Icon={icons[i]} navLink={navLinks[i]} key={i} />,
      );
    }

    return iconComponents;
  };

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">{sideIcons()}</div>
      </div>
      <main className="ml-20 w-full"> {children}</main>
    </div>
  );
};

export default Sidebar;
