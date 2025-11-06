import { Outlet } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-full max-w-4xl rounded-lg md:shadow-2xl overflow-hidden">

        {/* Left side */}
        {/* <div className="hidden md:flex w-1/2 relative "   style={{ backgroundImage: "url('images/Rectangle-11.svg')" }}> */}
        <div className="hidden md:flex justify-center items-center mx-auto w-1/2 relative bg-secondary ">
          <img
            src="/images/logo-white.svg"
            alt="Ventree Background"
            width={200}
          />
        </div>

         {/* Right side */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 min-h-[600px]">
          <Outlet />
      </div>
      </div>
    </div>
  );
}
