import { breakpoints } from "./breakpoints"
import { darkTheme, lightTheme } from "./thems"

import { UnistylesRegistry } from 'react-native-unistyles';

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints

// if you defined themes
type AppThemes = {
  light: typeof lightTheme,
  dark: typeof darkTheme,
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
    .addThemes({
        light: lightTheme,
        dark: darkTheme,
    })
    .addBreakpoints(breakpoints)
    .addConfig({
        initialTheme: 'light', // Default initial theme (should add this if adaptiveThemes:false)
        adaptiveThemes: false, // Change to true for system theme adaptation
    });