"use client"
import { useAppContext } from "@/context";

export default function Details() {
  const contextValue = useAppContext();
  return (
    <>{contextValue?.currentView}</>
  );
}
