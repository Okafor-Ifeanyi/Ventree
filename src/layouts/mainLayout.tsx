import React, { useState } from "react";
import {
  Moon,
  Sun,
  Search
} from "lucide-react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { NotificationModal } from "./components/NotificationModal";
import { ProfileModal } from "./components/ProfileModal";
import { Icon } from "@iconify/react";
import { SupportModal } from "./components/SupportModal";

export default function MainLayout() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bg text-text">
      {/* Sidebar */}
      <aside className="w-1/6 bg-white py-6 flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mb-8 px-6">
          <img src="/images/IDEY-logo.svg" alt="logo" width={60} />
        </div>

        <div className="text-left w-full pl-8 pb-2 ">
          <h2 className="text-sm font-thin ">MAIN</h2>
        </div>

        <nav className="flex-1 space-y-3 pl-3 w-full">
          <SidebarItem to="/home" icon={<Icon icon="material-symbols-light:home-rounded" width="24" height="24" />} label="Home" />
          <SidebarItem to="/jobs" icon={<Icon icon="material-symbols-light:home-repair-service-rounded" width="24" height="24" />} label="Jobs" />
          <SidebarItem
            to="/marketplace"
            icon={<Icon icon="material-symbols-light:shoppingmode" width="24" height="24" />}
            label="Marketplace"
          />
          {/* <SidebarItem to="/message" icon={<MessageCircle size={24} />} label="Message" /> */}
          <SidebarItem
            to="/notification"
            icon={<Icon icon="material-symbols-light:notifications-rounded" width="24" height="24" />}
            label="Notification"
          />
        </nav>

        <div className="pt-4 space-y-4 w-full">
          <div className="pl-3 space-y-2">
            <h2 className="text-sm font-thin px-5">ACCOUNT</h2>
            <SidebarItem
              to="/profile"
              icon={<Icon icon="material-symbols-light:person" width="24" height="24" />}
              label="Profile"
            />
            <SidebarItem
              to="/settings"
              icon={<Icon icon="material-symbols-light:settings-rounded" width="24" height="24" />}
              label="Settings"
            />
            <SidebarItem
              to="/logout"
              onClick={() => {
                // Example: clear tokens
                localStorage.removeItem("authToken");
                sessionStorage.clear();

                // Redirect to login
                window.location.href = "/login";
              }}
              icon={<Icon icon="material-symbols-light:logout-rounded" width="24" height="24" />}
              label="Logout"
            />
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center px-6">
            <button className="w-full flex justify-between items-center rounded-full bg-primary mx-auto">
              <div className="p-4 bg-primary flex rounded rounded-tl-full rounded-bl-full justify-center w-1/2">
                <Sun size={16} color="white" />
              </div>
              <div className="p-4 dark text-text bg-primary flex rounded-bl-full rounded-tr-full rounded-br-full justify-center w-1/2">
                <Moon size={16} color="white" />
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-5/6 h-screen">
        {/* Header (fixed height, non-scrolling) */}
        <header className="flex items-center justify-between bg-white p-5 flex-shrink-0">
          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-grey px-3 py-2 rounded-full w-1/4">
            <Search size={24} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>

          {/* Header Icons */}
          <div className="flex items-center gap-4 relative">
            <HeaderItem
              icon={<Icon icon="material-symbols-light:notifications-rounded" width="24" height="24" className="text-grey" />}
              label="Notification"
              onClick={() => setShowNotifications(true)}
            />
            <HeaderItem icon={<Icon icon="material-symbols-light:contact-support-rounded" width="24" height="24" className="text-grey" />} 
            label="Support"
            onClick={() => setShowSupport(true)}
            />
            <HeaderItem
              icon={<div className="w-6 h-6 bg-gray-400 rounded-full" />}
              label="Me "
              onClick={() => setShowProfile(true)}
            />
          </div>
          {/* Modals */}
      {showNotifications && (
        <NotificationModal onClose={() => setShowNotifications(false)} />
      )}
      {showProfile && (
        <ProfileModal onClose={() => setShowProfile(false)} />
      )}
      {showSupport && (
        <SupportModal onClose={() => setShowSupport(false)} />
      )}
        </header>

        {/* Body (scrollable Outlet area) */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function SidebarItem({
  to,
  icon,
  label,
  onClick,
}: SidebarItemProps & { onClick?: () => void }) {
  const location = useLocation();
  
  // Get the first segment of the current path
  const currentPathSegment = '/' + location.pathname.split('/')[1];
  
  // Check if the current path starts with the link's path
  const isActive = currentPathSegment === to;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-3 py-2 px-5 w-full rounded-tl-full rounded-bl-full cursor-pointer transition-colors hover:bg-light-hover text-gray-600"
      >
        {icon}
        <span className="text-sm">{label}</span>
      </button>
    );
  }

  return (
    <NavLink
      to={to}
      className={`flex items-center gap-3 py-2 px-5 w-full rounded-tl-full rounded-bl-full cursor-pointer transition-colors ${
        isActive
          ? "bg-primary text-white"
          : "hover:bg-light-hover text-gray-600"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </NavLink>
  );
}

interface HeaderItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function HeaderItem({ icon, label, onClick }: HeaderItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center cursor-pointer"
    >
      {icon}
      <span className="text-xs mt-2 text-center text-text">{label}</span>
    </div>
  );
}
