import { X } from "lucide-react";
import { Link } from "react-router-dom";

export function NotificationModal({ onClose }: { onClose: () => void }) {
  const notifications = [
    {
      id: 1,
      avatar: "/images/service1.png",
      name: "Matthew Edwards",
      message: "has accepted your job request",
      time: "30 mins ago",
      actions: ["Ignore", "Start chat"],
      unread: true,
    },
    {
      id: 2,
      avatar: "/images/service1.png",
      name: "Matthew Edwards",
      message:
        "You booked Matthew Edwards for a job, please indicate the status of this job",
      time: "30 mins ago",
      actions: ["Incomplete", "Complete"],
      unread: true,
    },
    {
      id: 3,
      avatar: "/images/service1.png",
      name: "Matthew Edwards",
      message: "has accepted your job request",
      time: "30 mins ago",
      actions: ["Ignore", "Start chat"],
      unread: true,
    },
    {
      id: 4,
      avatar: "/images/service1.png",
      name: "Matthew Edwards",
      message: "replied your chat on his product post",
      time: "30 mins ago",
      actions: ["Ignore", "View"],
      unread: false,
    },
  ];

  return (
    <div className="flex items-start justify-end fixed inset-0 z-40 px-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mt-16 mr-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-gray-200">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">
            Notifications
          </h2>
          <div></div>
        </div>

        {/* Notifications List */}
        <div className="max-h-60 overflow-y-auto">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {/* Unread Indicator */}
              <div className="flex-shrink-0 mt-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    notif.unread ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              </div>

              {/* Avatar */}
              <img
                src={notif.avatar}
                alt={notif.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 mb-1">
                  <span className="font-semibold">{notif.name}</span>{" "}
                  {notif.message}
                </p>
                <p className="text-xs text-gray-500 mb-2">{notif.time}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-shrink-0">
                {notif.actions.map((action, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      idx === 0
                        ? "text-orange-500 hover:bg-orange-50"
                        : "text-orange-500 border border-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 text-center border-t border-gray-200">
          <Link to={"/notification"} onClick={onClose} className="font-medium text-sm hover:underline">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}
