import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl text-center font-medium mb-8 capitalize">
      {children}
    </h2>
  );
}
