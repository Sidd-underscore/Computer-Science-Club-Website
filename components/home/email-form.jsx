"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitEmail } from "@/lib/submit-email";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Loading } from "../ui/loading";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [submissionSuccessful, setSubmissionSuccessful] = useState(
    "not defined but it must be not boolean on initial load hence we make it string"
  );

  async function submit() {
    setButtonDisabled(true);
    const submission = await submitEmail(email);
    if (submission.error) {
      setSubmissionSuccessful(false);
    } else {
      setSubmissionSuccessful(true);
    }

    setButtonDisabled(false);
  }

  return (
    <div>
      <p className="text-center text-neutral-400 mb-2">Join us!</p>
      <div className="w-full flex items-center justify-center">
        <div className="flex w-[24rem]">
        <Input
          onKeyUp={(e) => e.code == 'Enter' ? submit() : undefined}
          value={email}
          className="h-8"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your school email.."
        />
        <Button
          variant="secondary"
          disabled={buttonDisabled || email.length < 1 || !(email.endsWith("@student.pps.net") || email.endsWith("@pps.net"))}
          className={`aspect-square p-0.5 h-8 border-l-0`}
          onClick={() => !buttonDisabled && submit()}
        >
          {typeof submissionSuccessful != "string" && submissionSuccessful ? (
            <CheckIcon />
          ) : !buttonDisabled ? (
            <ArrowRightIcon />
          ) : (
            <Loading />
          )}
        </Button>
      </div>
      </div>
      {typeof submissionSuccessful != "string" ? (
        submissionSuccessful === false ? (
          <p className="text-center dark:text-red-400 text-red-600 mt-4 text-sm">
            Please enter your school email!
          </p>
        ) : (
          <p className="text-center dark:text-emerald-400 text-emerald-600 mt-4 text-sm">
            Since this process isn&apos;t exactly automated yet, check your
            inbox for an email from us soon!
          </p>
        )
      ) : undefined}
    </div>
  );
}
