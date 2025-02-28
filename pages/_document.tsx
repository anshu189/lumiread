import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

// import { fontSans, fontDisplay, fontPoppins, fontQuicksand, fontRobotomono, fontMontserrat } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background inter antialiased",
          // fontSans.variable,
          // fontDisplay.variable,
          // fontPoppins.variable,
          // fontQuicksand.variable,
          // fontRobotomono.variable,
          // fontMontserrat.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
