 import { createContext, useContext, useState, useEffect } from "react";
 
const AppContext = createContext();

export const AppProvider = ({ children }) => {
   return <AppProvider.Provider value={{}}>
</AppProvider.Provider> 
}

 
 export const useGlobalContext = () => useContext(App);
 hhhhhhhfffff