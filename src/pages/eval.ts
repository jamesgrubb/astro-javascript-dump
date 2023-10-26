import { v2 as cloudinary } from "cloudinary";
import type { APIRoute, APIContext } from "astro";

cloudinary.config({
  cloud_name: import.meta.env.CLOUD_NAME,
  api_key: import.meta.env.CLOUD_API_KEY,
  api_secret: import.meta.env.CLOUD_API_SECRET,
  secure: true,
});

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (file instanceof File) {
    // Process the file here if needed
    // For example, you can upload it to a service like Cloudinary

    // Assuming you want to return the file name as a response
    const responseObj = {
      fileName: file.name,
      fileType: file.type,
      // Add other relevant properties if needed
    };

    return new Response(JSON.stringify(responseObj), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Return an error response if no file was provided or if it's not a File instance
  return new Response(JSON.stringify({ error: "Invalid file" }), {
    status: 400, // Use an appropriate HTTP status code for bad requests
    headers: {
      "Content-Type": "application/json",
    },
  });
}
