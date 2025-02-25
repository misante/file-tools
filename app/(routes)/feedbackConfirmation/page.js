"use client";
import FeedbackConfirmation from "@/app/_components/FeedbackConfirmation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Redirect to homepage after 5 seconds
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [router]);
  return (
    <div>
      <FeedbackConfirmation />
    </div>
  );
};

export default page;
