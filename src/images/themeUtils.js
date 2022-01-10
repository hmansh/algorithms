export const pxToRem = px => `${px / 18.018}rem`;

export const spacing = value => `${pxToRem(value)}`;

export const pxToVh = (px, portHeight = 940) => `${(px * 100) / portHeight}vh`;

export const pxToVw = (px, portWidth = 1920) => `${(px * 100) / portWidth}vw`;
