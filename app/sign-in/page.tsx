"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Checkbox } from "@nextui-org/checkbox";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";

type Props = {};

const SignIn = (props: Props) => {
  const placement = "inside";

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <div className="pt-12 pb-7 px-9 rounded-xl border">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/reinhire-logo-new.png"
              width={180}
              height={30}
              alt="login-logo"
            />
          </div>
          <div className="text-2xl font-bold text-[#4d4d4d] pb-2">
            Welcome to Reinhire! 👋🏻
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-700 pb-2">
              Please sign-in to your account and start the adventure
            </div>
            <Input key={placement} type="email" label="Email" />
            <Input
              label="Password"
              key={placement}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <div className="flex">
              <Checkbox />

              <div className="text-base text-gray-700">Remember me</div>
            </div>

            <Button color="secondary" className="w-full">
              Sign in
            </Button>

            <div>New to our platform? Create an account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
