"use client"

import React, { createContext, useState, useContext, JSX } from "react";
import { sidebarLinks } from "@/constants";
import { SetBooleanStateType } from "@/types";

type Context = {
   currentView: JSX.Element,
   setCurrentView: React.Dispatch<React.SetStateAction<JSX.Element>>,
   viewSidbar: boolean,
   setViewSidebar: SetBooleanStateType,
   closeSidebar: ()=> void,
}
 const AppContext = createContext<Context | null>(null);

 export function AppWrapper ({children}: {
    children: React.ReactNode;
 }) {
    const [currentView, setCurrentView] = useState(sidebarLinks[1].comp);
    const [viewSidbar, setViewSidebar] = useState<boolean>(false);

    const closeSidebar = (): void => {
      setViewSidebar(false);
    }

    const contextValue = {
      currentView,
      setCurrentView,
      viewSidbar,
      setViewSidebar,
      closeSidebar,
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