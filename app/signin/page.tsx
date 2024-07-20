'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import { Checkbox } from '@nextui-org/checkbox';
import { Link } from '@nextui-org/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { hash } from 'bcryptjs';

import { EyeSlashFilledIcon } from '@/app/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/app/icons/EyeFilledIcon';
import GoogleIcon from '@/app/icons/GoogleIcon';
import LinkedinIcon from '@/app/icons/LinkedinIcon';
import signInUser from '@/routes/api/signin';
import Toast from '@/components/Toast';

type Inputs = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const SignIn = () => {
  const placement = 'inside';
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [error, setError] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const hashedPassword = await hash(data.password, 10);
    const signInData = {
      ...data,
      password: hashedPassword,
    };

    const result = await signInUser(signInData);
    const { error } = result;

    if (result.status === 201) {
      reset();
      router.push('/');
    } else if (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="flex h-[85vh] items-center justify-center">
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
              Welcome to Reinhire! 👋🏻
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-gray-500 pb-2">
                Please sign-in to your account and start the adventure
              </div>
              {error && <Toast text={error} type="error" />}
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  key={placement}
                  label="Email"
                  type="email"
                  {...register('email')}
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
                  label="Password"
                  type={isVisible ? 'text' : 'password'}
                  {...register('password')}
                />
                <div className="flex justify-between">
                  <div className="flex">
                    <Checkbox {...register('rememberMe')} />
                    <div className="text-sm text-gray-700 flex items-center">
                      Remember me
                    </div>
                  </div>

                  <Link className="text-sm" href="#">
                    Forgot Password?
                  </Link>
                </div>

                <Button className="w-full" color="secondary" type="submit">
                  SIGN IN
                </Button>
              </form>
              <div className="flex justify-center text-sm">
                <span className="text-gray-500">New to our platform?</span>{' '}
                &nbsp;{' '}
                <Link className="text-sm" href="/signup">
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

export default SignIn;
