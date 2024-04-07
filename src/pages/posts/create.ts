import type { APIRoute } from "astro";

export const POST: APIRoute = async (args) => {
  const formData = await args.request.formData();
  const message = formData.get("message")?.toString();
  return args.redirect(
    `/post-success?message=${encodeURIComponent(message || "No message")}`
  );
};
