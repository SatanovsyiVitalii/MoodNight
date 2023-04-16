import { colors } from './colors';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: {
        light: string,
        soft: string,
        regular: string,
        dark: string,
        darker: string,
        darkest: string,
        hover: {
          light: string,
          soft: string,
          regular: string,
          dark: string,
          darker: string,
          darkest: string,
        },
      },
      fontSize: {
        lg: string,
      },
      background: {
        gradient: {
          primary: string,
          secondary: string,
          success: string,
          info: string,
          warning: string,
          danger: string,
          light: string,
          dark: string,
          hover: {
            primary: string,
            secondary: string,
            success: string,
            info: string,
            warning: string,
            danger: string,
            light: string,
            dark: string,
          },
        },
        gray: {
          light: string,
          soft: string,
          regular: string,
          dark: string,
          darker: string,
          darkest: string,
        },
      },
      border: {
        light: string,
        soft: string,
        regular: string,
        dark: string,
        darker: string,
        darkest: string,
        hover: {
          light: string,
          soft: string,
          regular: string,
          dark: string,
          darker: string,
          darkest: string,
        },
      },
    },
  }
}

export const theme = {
  colors,
};