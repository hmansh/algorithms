 export const pxToRem = px => `${px / 18.018}rem`;

 export const spacing = value => `${pxToRem(value)}`;
 
 export const pxToVh = (px, portHeight = 940) => `${(px * 100) / portHeight}vh`;
 
 export const pxToVw = (px, portWidth = 1920) => `${(px * 100) / portWidth}vw`;

 export const COLORS = {
    primary: {
        light: "#acbdbd",
        dark: "#779395",
    },
    secondary: {
        light: '#E5E5E5',
        dark: '#4F5B5F',
    },
    basic: {
        white: '#ffffff',
        black: '#000000',
        error: '#ff3a31',
        success: '#2dcc70',
    }
 }