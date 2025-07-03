import { MetadataRoute } from 'next';
import { getAllPosts } from './blog/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://linglow.pl'; // Replace with your actual domain
  const blogPosts = getAllPosts();
  
  // Get current date for lastModified
  const currentDate = new Date();
  
  // Main pages
  const mainPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
  
  // Blog posts
  const blogPostsPages = blogPosts.map((post) => {
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.7 : 0.5,
    };
  });
  
  return [...mainPages, ...blogPostsPages];
}
