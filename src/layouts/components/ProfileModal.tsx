import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

// Profile Dropdown Modal Component
export function ProfileModal({ onClose }: { onClose: () => void }) {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="px-4 absolute top-20 right-6 bg-white rounded-2xl shadow-2xl w-70 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Header */}
        <div className="py-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="/images/meee.jpg"
              alt="Graziella Obialor"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Graziella Obialor
              </h3>
              <p className="text-sm text-gray-500">Client</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <h4 className="py-2 text-xs font-semibold text-gray-900">Account</h4>
          
          <NavLink
            to="/profile"
            className="flex items-center py-1 hover:bg-gray-50 transition-colors text-gray-700"
            onClick={onClose}
          >
            <span className="text-sm">Profile</span>
          </NavLink>

          <NavLink
            to="/notification"
            className="flex items-center py-1 hover:bg-gray-50 transition-colors text-gray-700"
            onClick={onClose}
          >
            <span className="text-sm">Notification</span>
          </NavLink>

          <NavLink
            to="/settings"
            state={{ activeTab: "language" }}
            className="flex items-center py-1 hover:bg-gray-50 transition-colors text-gray-700"
            onClick={onClose}
          >
            <span className="text-sm">Language</span>
          </NavLink>

          <NavLink
            to="/location"
            className="flex items-center py-1 hover:bg-gray-50 transition-colors text-gray-700"
            onClick={onClose}
          >
            <span className="text-sm">Set location</span>
          </NavLink>
        </div>

        {/* Logout */}
        <div className="border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full py-4 hover:bg-red-50 transition-colors text-red-500"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}