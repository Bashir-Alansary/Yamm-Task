"use client"

import React, { createContext, useState, useContext, JSX } from "react";
import { sidebarLinks } from "@/constants";

type Context = {
   currentView: JSX.Element,
   setCurrentView: React.Dispatch<React.SetStateAction<JSX.Element>>,
}
 const AppContext = createContext<Context | null>(null);

 export function AppWrapper ({children}: {
    children: React.ReactNode;
 }) {
    const [currentView, setCurrentView] = useState(sidebarLinks[0].comp);
    const contextValue = {
      currentView,
      setCurrentView,
    }
    return (
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    )
 }

 export function useAppContext() {
   return useContext(AppContext);
 } 