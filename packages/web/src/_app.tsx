import React from 'react';
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono, Roboto, Roboto_Mono } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ['latin'] })
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] });

import useWindowViewport from '../src/hooks/use-window-viewport';

import '../styles/layout.css';
// import { useApollo } from '../apollo-client';
// import useIsLoggedIn from '../lib/hooks/use-is-logged-in';
// import { isLoggedInVar } from '../lib/vars';
import { LayoutProvider } from 'elemental-react'
import { QueryClient } from 'react-query'



export const queryClient = new QueryClient({});

const fontSizes = [96, 60, 48, 34, 24, 20, 16, 14];
const [h1, h2, h3, h4, h5, h6] = fontSizes;

const roundTo = function(target, num) {
  var resto = target % num;
  if (resto <= num / 2) {
    return target - resto;
  } else {
    return target + num - resto;
  }
};

const lineHeights = [h1, h2, h3, h4, h5, h6].map(n =>
  roundTo(Math.abs(n * 1.15), 4),
);
// @ts-ignore
fontSizes.h1 = h1;

export const typefaces = {
  ibmPlexSans: {
    light: ibmPlexSans.style.fontFamily,
    regular: ibmPlexSans.style.fontFamily,
    medium: ibmPlexSans.style.fontFamily,
    semiBold: ibmPlexSans.style.fontFamily,
    mono: ibmPlexMono.style.fontFamily,
  },
};


export const getBreakpoint = (w) => {
  const width = Number(w);

  if (width <= 768) {
    return 0;
  }
  if (width <= 1024) {
    return 1;
  }

  return 2;
};

export const Wrapper = ({ children }) => {
  const { width } = useWindowViewport();
  const breakpoint = getBreakpoint(width);
  // const session = useSession()
  // const isLoggedIn = useIsLoggedIn();
  // if (session?.status === 'authenticated' && !isLoggedIn) {
  //   isLoggedInVar(true);
  // }

  return (
    <LayoutProvider breakpoint={breakpoint}>
      {children}
    </LayoutProvider>
  );
}

export const processStyleFunc = (style) => ({ ...style });
