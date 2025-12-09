import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("omb");

    const papers = await db.collection("papers").find({}).sort({ publishedAt: -1 }).toArray();

    return Response.json(papers);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
