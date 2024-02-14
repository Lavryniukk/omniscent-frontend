"use client";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";

const getContrastingColor = (color: string) => {
  const hex = color.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
};

export default function ChooseYourLanguageSection() {
  const divRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState<number | null>(null);

  const images = [
    { src: "/images/c++.png", color: "#00599C", name: "C++" },
    { src: "/images/python.png", color: "#00599C", name: "Python" },
    { src: "/images/java.png", color: "#00599C", name: "Java" },
    { src: "/images/react.png", color: "#00599C", name: "React" },
    { src: "/images/vue.png", color: "#00599C", name: "Vue" },
    { src: "/images/rust.png", color: "#00599C", name: "Rust" },
  ];

  return (
    <div className="flex w-full h-fit ">
      <div className="w-1/2 h-full flex  items-center justify-center overflow-hidden">
        <div
          ref={divRef}
          className={`flex flex-col max-h-[400px] overflow-hidden`}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt="language logo"
              className="object-contain w-full max-h-[400px]"
              height={400}
              width={400}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 px-4 flex flex-col justify-between items-center gap-4 py-2">
        <h1 className="text-4xl text-center font-bold">
          {!current ? "Cleverize" : images[current].name}
        </h1>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, et
          iure iusto illo earum quod tenetur harum voluptatibus perferendis
          veniam dolorem ut, animi commodi exercitationem eum nemo enim tempore
          neque?
        </div>
        <button
          style={{
            backgroundColor: current ? images[current].color : "#000000",
            color: current
              ? getContrastingColor(images[current].color)
              : "000000",
          }}
          className={` rounded px-6 py-2 transition-all duration-100`}
          onClick={() => {
            setCurrent((prev) => {
              if (!prev) prev = 0;
              const nextIndex = prev + 1 === images.length ? 0 : prev + 1;
              divRef.current?.scrollTo({
                top: nextIndex * 400,
                behavior: "smooth",
              });
              return nextIndex;
            });
          }}
        >
          Start now
        </button>
      </div>
    </div>
  );
}
