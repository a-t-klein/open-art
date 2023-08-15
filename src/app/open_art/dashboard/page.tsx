"use client";

import React from "react";
import Header from "../components/Header";
import Sidebar from "../containers/Sidebar";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <Sidebar>
      <div className="min-h-screen bg-black">
        <Header />
        <DashboardCards />
      </div>
    </Sidebar>
  );
}

export default Dashboard;