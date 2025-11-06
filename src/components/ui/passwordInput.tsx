import React, { useState } from "react";
import { Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

interface PasswordInputProps {
  label?: string;
  value: string;
  noFP?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  noFP = true,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label> // 👈 only render if passed}
      )}

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Password"
          className="w-full px-4 py-2 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Fingerprint icon */}
        {noFP ? (
            <Fingerprint className="absolute right-5 top-3 text-gray-500 w-5 h-5" />
        ) : null} 

        {/* Toggle password visibility */}
        {/* <button
          type="button"
          className="absolute right-3 top-3 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button> */}
      </div>

      {/* Show password toggle */}
      <div className="flex justify-between mt-2 text-sm">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        {noFP ? (
          <Link to="/forgot-password" className="text-SB hover:underline">
            Forgot Password?
          </Link>
        ) : null}
        
      </div>
    </div>
  );
};

export default PasswordInput;
