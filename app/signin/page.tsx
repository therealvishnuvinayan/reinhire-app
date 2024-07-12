"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Checkbox } from "@nextui-org/checkbox";
import { EyeSlashFilledIcon } from "@/app/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/app/icons/EyeFilledIcon";
import { Link } from "@nextui-org/link";
import GoogleIcon from "@/app/icons/GoogleIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const SignIn = () => {
  const placement = "inside";
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("##data", data);

  return (
    <>
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
              <div className="text-sm text-gray-500 pb-2">
                Please sign-in to your account and start the adventure
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <Input
                  key={placement}
                  type="email"
                  label="Email"
                  {...register("email")}
                />
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
                  {...register("password")}
                />
                <div className="flex justify-between">
                  <div className="flex">
                    <Checkbox {...register("rememberMe")} />
                    <div className="text-sm text-gray-700 flex items-center">
                      Remember me
                    </div>
                  </div>

                  <Link href="#" className="text-sm">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  onClick={() => router.push("/")}
                  color="secondary"
                  className="w-full"
                  type="submit"
                >
                  SIGN IN
                </Button>
              </form>
              <div className="flex justify-center text-sm">
                <span className="text-gray-500">New to our platform?</span>{" "}
                &nbsp;{" "}
                <Link href="signup" className="text-sm">
                  Create an account
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
          src="/images/login-tree-left.png"
          width={248}
          height={185}
          alt="login-image"
          className="absolute bottom-0 left-0 z-10"
        />
        <Image
          src="/images/login-background.png"
          width={500}
          height={500}
          alt="login-image"
          className="absolute w-full bottom-0"
        />
        <Image
          src="/images/login-tree-right.png"
          width={377}
          height={289}
          alt="login-image"
          className="absolute bottom-0 right-0"
        />
      </div>
    </>
  );
};

export default SignIn;
