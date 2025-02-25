"use client";

import { Card } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FeedbackConfirmation = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="min-h-[100vh] w-full flex justify-center items-center">
      <Card className="w-[350px] shadow-xl shadow-green-500">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Check className="h-12 w-12 p-2 rounded-full bg-green-500/30 text-green-500" />
          </div>
          <h1 className="text-center font-bold text-2xl text-green-500">
            Feedback Successful!
          </h1>
          <p className="text-center text-muted-foreground text-sm">
            Thank you for your feedback. We will review your feedback and act
            accordingly.
          </p>
          <button
            className={`${
              isLoading
                ? "cursor-not-allowed bg-green-400"
                : "bg-green-500 hover:bg-green-300 hover:text-black transition-all duration-500"
            } text-white py-2 px-6 w-full mt-6 rounded-md font-bold`}
            disabled={isLoading}
            onClick={() => router.push("/")}
          >
            {isLoading ? (
              <div className="flex justify-around items-center">
                <p className="text-sm"> Updating records... </p>
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              "Back to Home Page"
            )}
          </button>
        </div>
      </Card>
    </section>
  );
};

export default FeedbackConfirmation;
