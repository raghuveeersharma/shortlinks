"use client";
import React, { useState } from "react";

const shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  return (
    <div className="mx-auto md:max-w-lg max-w-xs my-16 bg-purple-200 rounded-lg p-7 shadow-xl ">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-xl font-semibold">Generate your link</h1>
        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          className="rounded-md border border-purple-400 p-1"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your preferd short URL"
          value={shortUrl}
          className="rounded-md border border-purple-400 p-1"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button className="max-w-fit mx-auto text-white cursor-pointer bg-purple-700 p-1 rounded-md px-2 font-bold hover:scale-105">
          Generate
        </button>
      </div>
    </div>
  );
};

export default shorten;
