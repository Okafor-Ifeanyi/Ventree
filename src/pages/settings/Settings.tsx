import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Settings() {
  return (
    <main className="flex justify-center min-h-screen py-6 px-1 md:px-1">
      <article className="w-full bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <header className="flex items-center justify-center relative mb-6">
          <Link
            to="/"
            className="absolute left-0 text-gray-600 hover:text-gray-800 transition"
          >
            <Icon icon="ic:outline-arrow-circle-left" width="24" height="24" />
          </Link>
          <h1 className="h3 text-black">Settings</h1>
        </header>

        {/* Account Section */}
        <section className="mb-6">
          <h2 id="account-settings" className="h4 text-black mb-2">
            Account
          </h2>
          <nav className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
            <Link
              to="/change-password"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Icon icon="ic:outline-https" width="24" height="24" />
                <span className="body text-black">Change Password</span>
              </div>
              <span className="text-gray-400 text-sm" aria-hidden="true">
                <Icon
                  icon="ic:outline-arrow-forward-ios"
                  width="24"
                  height="24"
                />
              </span>
            </Link>
          </nav>
        </section>

        {/* Help Section */}
        <section  className="mb-6">
          <h2 id="help-settings" className="h4 text-black mb-2">
            Help
          </h2>
          <nav
            aria-label="Help Settings"
            className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200"
          >
            <Link
              to="/help-center"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Icon icon="ic:outline-help-outline" width="24" height="24" />
                <span className="tbody text-black">Help Center / Feedback</span>
              </div>
              <span className="text-gray-400 text-sm" aria-hidden="true">
                <Icon
                  icon="ic:outline-arrow-forward-ios"
                  width="24"
                  height="24"
                />
              </span>
            </Link>
          </nav>
        </section>

        {/* About Section */}
        <section className=" mb-6">
          <h2 id="about-settings" className="h4 text-black mb-2">
            About
          </h2>
          <nav
            aria-label="About Settings"
            className="bg-white rounded-lg border border-gray-200"
          >
            <Link
              to="/about-us"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Icon icon="ic:outline-report" width="24" height="24" />
                <span className="body text-black">About Us</span>
              </div>
              <span className="text-gray-400 text-sm" aria-hidden="true">
                <Icon
                  icon="ic:outline-arrow-forward-ios"
                  width="24"
                  height="24"
                />
              </span>
            </Link>
          </nav>
        </section>

        {/* Notification section */}
        <section >
          <h2 id="about-settings" className="h4 text-black mb-2">
            Push notification
          </h2>
          <nav
            aria-label="About Settings"
            className="bg-white rounded-lg border border-gray-200"
          >
            <Link
              to="/about-us"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Icon icon="ic:outline-report" width="24" height="24" />
                <span className="body text-black">Turn On / Off</span>
              </div>
              <span className="text-gray-400 text-sm" aria-hidden="true">
                <Icon
                  icon="ic:outline-arrow-forward-ios"
                  width="24"
                  height="24"
                />
              </span>
            </Link>
          </nav>
        </section>
      </article>
    </main>
  );
}
