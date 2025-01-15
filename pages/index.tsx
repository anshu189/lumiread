import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="h-[75vh] flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "violet", size: "lg"})}>Lightning </span>
          <span className={title({ size: "lg" })}>the Way to Speed Reading</span>
          <br />
          <div className={subtitle({ class: "mt-4"})}>
            Beautiful, Fast and Modern Mind Reading.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.routes.lumiReadApp}
          >
            Start Reading
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.routes.github}
            target="_blank"
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
