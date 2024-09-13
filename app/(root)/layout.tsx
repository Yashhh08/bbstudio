import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bombay Blokes Studio",
  description: "Bombay Blokes Studio",
  icons: {
    icon: "/assets/images/bb-icon.webp",
  },
  openGraph: {
    title: "Bombay Blokes Studio",
    description: "Bombay Blokes Studio",
    images: [{ url: "/assets/images/bb-icon.webp" }],
  },
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default layout;
