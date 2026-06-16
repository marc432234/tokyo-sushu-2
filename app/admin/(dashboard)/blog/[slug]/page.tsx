import { notFound } from "next/navigation";

import { getPost } from "@/lib/admin-data";
import { PostEditor } from "../PostEditor";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return <PostEditor post={post} />;
}
