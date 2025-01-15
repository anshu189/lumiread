import { useState } from "react";
import {Textarea} from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [value, setValue] = useState("");

  return (
    <DefaultLayout>
      <section className="flex items-center justify-center gap-8">
        <div className="min-w-[45vw] min-h-[80vh]">
          <Textarea
            disableAnimation
            disableAutosize
            isClearable
            classNames={{
              input: "p-2 min-h-[80vh]",
            }}
            label=""
            placeholder="Paste your text here"
            variant="bordered"
            onValueChange={setValue}
          />
        </div>
        <div className="min-w-[45vw] min-h-[80vh]">
          <Textarea
            isReadOnly
            classNames={{
              input: "p-2 min-h-[80vh]",
            }}
            value={value}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
