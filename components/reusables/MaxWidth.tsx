import React from "react";

interface MaxWidthProps {
  children: React.ReactNode;
  className?: string;
}

function MaxWidth({ children, className }: MaxWidthProps) {
  return (
    <div className={`max-w-screen-md mx-auto p-4 ${className}`}>{children}</div>
  );
}

export default MaxWidth;
