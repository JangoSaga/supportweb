import { Outlet } from "react-router";
import Header from "../components/Header";
function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="m-4 p-6 flex-grow overflow-y-auto h-[calc(100vh-theme(spacing.20))] shadow-2xl rounder-lg ">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center text-xl">
        &copy; Created by 🤖 K.A.V
      </footer>
    </div>
  );
}

export default AppLayout;
