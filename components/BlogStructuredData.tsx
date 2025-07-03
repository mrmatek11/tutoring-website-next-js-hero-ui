"use client";

import Script from 'next/script';
import { BlogPost } from '@/app/blog/data/blog-posts';

interface BlogStructuredDataProps {
  post: BlogPost;
  url: string;
}

const BlogStructuredData = ({ post, url }: BlogStructuredDataProps) => {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://linglow.pl${post.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Linglow Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://linglow.pl/logolinglow.svg"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.tags.join(", ")
  };

  return (
    <Script
      id="blog-post-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogPostSchema),
      }}
    />
  );
};

export default BlogStructuredData;
