import { useEffect, useState } from "react";
import {Textarea} from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [inputText, setInputText] = useState<string>("Attention neurodivergent community - this bionic reading method is absolutely mind blowing. Your eyes scan the first bold letters and your brain center automatically completes the words. It lets you read twice as fast, is less overwhelming and helps you to stay focused. You will feel much more productive and a greater sense of achievement which will boost your confidence and makes you overall feel more positive. Let me know in the comments if this bionic reading method works for you.");

  const makeHalfBold = (text: string) => {
    const words = text.split(" ");

    const processedWords = words.map((word) => {
      const midIndex = Math.ceil(word.length / 2);
      const firstHalf = word.substring(0, midIndex);
      const secondHalf = word.substring(midIndex);

      return `<b>${firstHalf}</b>${secondHalf}`;
    });

    return processedWords.join(" ");
  };

  const handleInputChange = (text: string) => {
    const processedText = makeHalfBold(text);
    setInputText(processedText);
  };

  useEffect(() => {
    handleInputChange(inputText);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-start md:items-center justify-end md:justify-center gap-0 md:gap-4 md:mb-0 mb-4">
        <div className="min-w-full md:min-w-[40vw] min-h-[45vh] md:min-h-[80vh]">
          <Textarea
            disableAnimation
            disableAutosize
            isClearable
            classNames={{
              input: "p-2 min-h-[40vh] md:min-h-[80vh] montserrat text-md",
            }}
            label=""
            placeholder="Attention neurodivergent community - this bionic reading method is absolutely mind blowing. Your eyes scan the first bold letters and your brain center automatically completes the words. It lets you read twice as fast, is less overwhelming and helps you to stay focused. You will feel much more productive and a greater sense of achievement which will boost your confidence and makes you overall feel more positive. Let me know in the comments if this bionic reading method works for you."
            variant="bordered"
            onValueChange={handleInputChange}
          />
        </div>
        <div className="min-w-full md:min-w-[45vw] min-h-[100%] md:min-h-[80vh]">
          <div
            className="min-h-[35vh] md:min-h-[82vh] bg-[#dbdbdb] text-black font-extrathin tracking-[0.02em] leading-[1.8em] montserrat hover:opacity-95 opacity-90 duration-200 border-none focus-none outline-none p-3 px-4 border rounded-lg"
            dangerouslySetInnerHTML={{ __html: inputText }}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
