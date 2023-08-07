import React, { ReactNode } from "react";
import Link from "next/link";

interface SidebarLinkProps {
  Icon: any;
  navLink: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ Icon, navLink }) => {
  return (
    <>
      <Link href={navLink}>
        <div className="bg-background text-white p-2 rounded-lg inline-block">
          <Icon size={40} />
        </div>
      </Link>
      <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
    </>
  );
};

export default SidebarLink;
