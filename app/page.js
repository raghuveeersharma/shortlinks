import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" font-serif flex flex-col justify-center items-center">
          <p className="text-4xl font-bold">The URL Shortner</p>
          <p className="font-mono px-36">
            Tool you need to shorten your links. You can use this tool to
            shorten your links for free and with out sighin etc !!
          </p>
        </div>
        <div className="relative">
          <Image
            src="/web3.jpg"
            alt="shortlinks"
            className=" mix-blend-darken"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
