import { notFound } from "next/navigation";
import { getPostBySlug } from "../data/blog-posts";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import BlogStructuredData from "@/components/BlogStructuredData"; // Add this import

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();
  
  const postUrl = `https://linglow.pl/blog/${post.slug}`;

  return (
    <>
      {/* Add the BlogStructuredData component here */}
      <BlogStructuredData post={post} url={postUrl} />
      
      <div className="flex justify-center py-12 px-2 bg-gradient-to-br from-white to-emerald-50 min-h-screen">
        <Card className="max-w-3xl w-full shadow-2xl border border-emerald-100">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-t-2xl w-full object-cover max-h-80"
              priority
            />
          )}
          <CardBody className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Avatar src={post.authorAvatar} alt={post.author} size="md" />
                <span className="font-semibold text-gray-800">{post.author}</span>
                <span className="text-gray-400 text-sm">{post.publishedAt}</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <Chip key={tag} size="sm" variant="flat" color="success">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-900">{post.title}</h1>
            <Divider className="mb-8" />
            <div>
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-8 mb-4 text-emerald-800" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-6 mb-3 text-emerald-700" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-4 mb-2 text-emerald-600" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-gray-800" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4 text-gray-800" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4 text-gray-800" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  a: ({node, ...props}) => <a className="text-emerald-600 underline hover:text-emerald-800" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-emerald-300 pl-4 italic text-gray-600 my-4" {...props} />,
                  code: ({node, ...props}) => <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
