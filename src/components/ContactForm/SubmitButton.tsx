'use client'

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

// Submit button with loading state
export function SubmitButton() {
  const {pending} = useFormStatus();
  
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-tekhelet hover:bg-tekhelet/90 text-alabaster text-lg py-6 
        transition-all duration-300 hover:shadow-lg hover:shadow-tekhelet/20 
        disabled:opacity-50 disabled:cursor-not-allowed"
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Enquiry'
      )}
    </Button>
  );
}