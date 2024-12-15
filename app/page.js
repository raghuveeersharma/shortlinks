import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 md:h-[50vh] h-[25vh] ">
        <div className=" font-serif flex flex-col justify-center items-center">
          <p className="md:text-4xl text-lg font-bold">The URL Shortner</p>
          <p className="font-mono md:px-36 md:text-base text-xs px-5">
            Tool you need to shorten your links. You can use this tool to
            shorten your links for free and with out sighin etc !!
          </p>
          <div className="flex gap-4 items-center mt-3 ">
            <Link
              href="/shorten"
              className="bg-purple-600 text-white rounded-md"
            >
              <button className="cursor-pointer p-1 rounded-md px-2 font-bold hover:scale-105 ">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/raghuveeersharma/shortlinks"
              target="_blank"
              className=""
            >
              <button className="cursor-pointer rounded-md font-bold hover:scale-105 text-4xl relative">
                <FaGithubSquare />
                <span className="text-xs absolute right-0 font-normal">
                  Github
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/web3.jpg"
            alt="shortlinks"
            className=" mix-blend-darken brightness-[1.1]"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
