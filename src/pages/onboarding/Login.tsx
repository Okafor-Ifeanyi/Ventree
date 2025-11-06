import { useState } from "react";

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex flex-col justify-between p-8 ">
      <div className="text-center">
        <h2 className="text-2xl font-semibold pb-2">Welcome Back!</h2>
      </div>

      <div className="w-full max-w-sm mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Business Name
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Put your business number"
            className="w-full border rounded-md p-2 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Put your password"
            className="w-full border rounded-md p-2 outline-none"
          />
        </div>
      </div>

      <div className="w-full max-w-sm mx-auto space-y-4">
        <button className="w-full py-2 rounded-md font-medium border">
          Login
        </button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}
