"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";

import { EyeSlashFilledIcon } from "@/app/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/app/icons/EyeFilledIcon";
import GoogleIcon from "@/app/icons/GoogleIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";

const SignUp = () => {
  const placement = "inside";
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col">
          <div className="pt-12 pb-7 px-9 rounded-xl border">
            <div className="flex justify-center mb-6">
              <Image
                alt="login-logo"
                height={30}
                src="/images/reinhire-logo-new.png"
                width={180}
              />
            </div>
            <div className="text-2xl font-bold text-[#4d4d4d] pb-2">
              Adventure starts here! 🚀
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-gray-500 pb-2">
                Please sign-up to your account and start the adventure
              </div>
              <Input key={placement} label="Email" type="email" />
              <Input
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
                label="Password"
                type={isVisible ? "text" : "password"}
              />
              <Input
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
                label="Confirm Password"
                type={isVisible ? "text" : "password"}
              />
              <div className="flex justify-between">
                <div className="flex">
                  <Checkbox />
                  <div className="text-sm text-gray-700 flex items-center">
                    I agree to&nbsp;
                    <span>
                      <Link className="text-sm" href="#">
                        privacy policy & terms
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                color="secondary"
                onClick={() => router.push("/")}
              >
                SIGN UP
              </Button>

              <div className="flex justify-center text-sm">
                <span className="text-gray-500">Already have an account?</span>
                &nbsp; &nbsp;
                <Link className="text-sm" href="/signin/jobseeker">
                  Sign in instead
                </Link>
              </div>
              <div className="flex justify-center text-sm">
                <span className="text-gray-500">Are you a recruiter?</span>
                &nbsp; &nbsp;
                <Link className="text-sm" href="/signup/recruiter">
                  Sign up you recruiter account
                </Link>
              </div>

              <div className="relative w-full">
                <span className="sign-in-divider text-gray-500 px-4">or</span>
              </div>
              <div className="flex justify-center space-x-4">
                <GoogleIcon />
                <LinkedinIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          alt="login-image"
          className="absolute bottom-0 left-0 z-10"
          height={185}
          src="/images/login-tree-left.png"
          width={248}
        />
        <Image
          alt="login-image"
          className="absolute w-full bottom-0"
          height={500}
          src="/images/login-background.png"
          width={500}
        />
        <Image
          alt="login-image"
          className="absolute bottom-0 right-0"
          height={289}
          src="/images/login-tree-right.png"
          width={377}
        />
      </div>
    </>
  );
};

export default SignUp;
