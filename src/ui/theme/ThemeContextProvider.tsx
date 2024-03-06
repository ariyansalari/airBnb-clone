import { Theme, createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useColorTheme } from "./hooks";

type ThemeContextType={
    mode:string;
    toggleColorMode:()=>void;
    theme:Theme;
}
export const ThemeContext=createContext<ThemeContextType>({
    mode:"light ",
    toggleColorMode:()=>{},
    theme:createTheme()
})

export const ThemeContextProvider:FC<PropsWithChildren>=({children})=>{
    const value=useColorTheme()
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
export const useThemeContext=()=>{
    return useContext(ThemeContext)
}