import clientPromise from "@/lib/mongodb";

// Defining the POST function that handles HTTP POST requests
export async function POST(request) {
  // Parsing the incoming request body as JSON to extract the URL and short URL
  const body = await request.json();

  // Awaiting the connection to the MongoDB client
  const client = await clientPromise;

  // Accessing the 'shortlinks' database in the MongoDB client
  const db = client.db("shortlinks");

  // Accessing the 'urls' collection in the 'shortlinks' database
  const collection = db.collection("urls");

  // Checking if a URL with the same short URL already exists
  const existingUrl = await collection.findOne({
    shortUrl: body.shortUrl,
  });

  if (existingUrl) {
    return Response.json({
      success: false,
      error: true,
      message: "Short URL already exists",
    });
  }

  // Inserting the new URL data into the 'urls' collection
  const result = await collection.insertOne({
    url: body.url, // Storing the original URL from the request body
    shortUrl: body.shortUrl, // Storing the short URL from the request body
  });

  // Returning a JSON response with success and no errors
  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully",
  });
}
