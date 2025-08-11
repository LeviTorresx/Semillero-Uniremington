"use client";

import React from "react";

interface SelectWrapperProps {
  icon: React.ReactNode;
  value: string | number;
  onChange: (val: string) => void;
  children: React.ReactNode;
}

export function SelectWrapper({
  icon,
  value,
  onChange,
  children,
}: SelectWrapperProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all">
      {icon}
      <select
        className="outline-none bg-transparent w-full cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}
