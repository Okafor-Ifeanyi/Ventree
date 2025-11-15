import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import ConfirmPassword from "../../components/ui/confirmPassword";
import { validatePassword } from "../../components/common/validation";
import { useFormSubmit } from "../../components/common/formHooks";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoading, submit } = useFormSubmit();

  const validateForm = (): boolean => {
    // Validate current password
    const currentPasswordError = validatePassword(currentPassword);
    if (currentPasswordError) {
      toast.error(currentPasswordError);
      return false;
    }

    // Validate new password
    const newPasswordError = validatePassword(newPassword);
    if (newPasswordError) {
      toast.error(`New password: ${newPasswordError.toLowerCase()}`);
      return false;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return false;
    }

    // Check if new password is different from current
    if (currentPassword === newPassword) {
      toast.error("New password must be different from current password");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!validateForm()) return;

    await submit(
      async () => {
        // YOUR API CALL HERE
        // Example: await changePassword({ currentPassword, newPassword });
        await new Promise((resolve) => setTimeout(resolve, 1500));
      },
      "Password changed successfully!",
      () => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        // Optional: redirect or close modal
        // window.location.href = '/profile';
      }
    );
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:bg-white">
      <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden">
        <div
          className="text-white py-15 px-6 text-center bg-black bg-center"
          style={{ backgroundImage: "url('images/onboarding-pattern.svg')" }}
        >
          <h1 className="text-2xl font-semibold">Change Password</h1>
        </div>

        <form onSubmit={handleSubmit} className="py-8 space-y-6">
          <ConfirmPassword
            label="Current Password"
            placeholder="Put your current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            disabled={isLoading}
            noFP={false}
          />

          <ConfirmPassword
            label="New Password"
            placeholder="Put your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isLoading}
            noFP={false}
          />

          <ConfirmPassword
            label="Confirm Password"
            placeholder="Put your new password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            noFP={false}
          />

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="flex-1 px-6 py-3 body border border-secondary text-secondary rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 btn btn-primary  rounded-md f flex items-center justify-center gap-2"
            >
              {isLoading ? "Saving..." : "Save"}
              {isLoading && (
                <LoaderCircle width={20} className="animate-spin" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
