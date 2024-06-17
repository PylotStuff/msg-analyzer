import { reader } from "@/app/utils/reader";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file: any = formData.get("file");
  const buffer = Buffer.from(await file.arrayBuffer());
  const readerRes = await reader(buffer);
  return Response.json({ reader: readerRes });
}
