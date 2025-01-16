import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono, fontDisplay, fontPoppins, fontQuicksand, fontRobotomono, fontMontserrat } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  display: fontDisplay.style.fontFamily,
  poppins: fontPoppins.style.fontFamily,
  quicksand: fontQuicksand.style.fontFamily,
  robotomono: fontRobotomono.style.fontFamily,
  montserrat: fontMontserrat.style.fontFamily,
};
