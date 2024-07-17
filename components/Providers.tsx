"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = (props: ProvidersProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
