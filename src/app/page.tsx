"use client"

import Header from "@/components/Header";
import { useAppContext } from "@/context";

export default function Details() {
  const contextValue = useAppContext();
  return (
    <div className="h-screen w-[80%] bg-[#0f1241] p-1">
      <div className="h-full bg-[#edf0f7] rounded-2xl p-8">
        <Header />
        {contextValue?.currentView}
      </div>
    </div>
  );
}
