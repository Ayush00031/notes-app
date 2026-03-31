"use client";

import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

function LogOutButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("You have been successfully logged out");

      router.push("/");
    } else {
      toast.error("Error");
    }
    setLoading(false);
  };

  return (
    <Button
      className="w-24"
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log out"}
    </Button>
  );
}
export default LogOutButton;
