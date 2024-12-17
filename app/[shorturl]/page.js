import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shortUrl = (await params).shorturl;

  const client = await clientPromise;
  const db = client.db("shortlinks");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shortUrl: shortUrl });
  console.log(`doc is ${doc}`);
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My Post: {url}</div>;
}
