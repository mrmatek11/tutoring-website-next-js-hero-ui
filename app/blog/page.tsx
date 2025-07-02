"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Avatar } from "@heroui/avatar";
import { title, subtitle } from "@/components/primitives";
import { useState, useMemo } from "react";
import Link from "next/link";
import { getAllPosts, categories, BlogPost } from "@/app/blog/data/blog-posts";
import Image from "next/image";


// Proste ikony SVG jako komponenty
const SearchIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CalendarIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const ArrowRightIcon = ({ className = "" }) => (
  <svg 
    className={`w-4 h-4 ${className}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const allPosts = getAllPosts();

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "Wszystkie" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allPosts]);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary/10 to-emerald-300/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12, 
            ease: "easeInOut" 
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip 
                color="primary" 
                variant="flat" 
                size="lg"
                className="mb-6 font-semibold"
              >
                Blog Linglow
              </Chip>
              
              <h1 className={title({ size: "lg", class: "mb-6" })}>
                <span className="text-primary block">Twój przewodnik</span>
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent block">
                  po świecie angielskiego
                </span>
              </h1>

              <p className={subtitle({ class: "max-w-2xl mx-auto mb-8" })}>
                Praktyczne porady, sprawdzone metody i inspirujące historie, 
                które pomogą Ci osiągnąć płynność w angielskim.
              </p>
            </motion.div>

            {/* Search and Filters */}
        
          </div>
        </div>
      </section>

       {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <Chip color="success" variant="flat" size="lg" className="mb-4">
                  Wyróżniony artykuł
                </Chip>
              </div>

              <Card 
                className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                as={motion.div}
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/30 rounded-l-lg"></div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Chip color="success" size="sm" className="font-semibold">
                        {featuredPost.category}
                      </Chip>
                    </div>
                  </div>
                  
                  <CardBody className="p-8 lg:p-12">
                    <div className="h-full flex flex-col justify-center">
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-foreground-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center gap-4 mb-6 text-sm text-foreground-500">
                        <div className="flex items-center gap-2">
                          <Avatar src={featuredPost.authorAvatar} size="sm" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={16} />
                          <span>{new Date(featuredPost.publishedAt).toLocaleDateString('pl-PL')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon size={16} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <Chip key={tag} size="sm" variant="flat" color="primary">
                            {tag}
                          </Chip>
                        ))}
                      </div>

                      <Button
                        as={Link}
                        href={`/blog/${featuredPost.slug}`}
                        color="primary"
                        size="lg"
                        className="w-fit font-semibold"
                        endContent={<ArrowRightIcon />}
                      >
                        Czytaj więcej
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
       <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className="h-full hover:shadow-xl transition-all duration-300 group"
                      as={motion.div}
                      whileHover={{ y: -5 }}
                    >
                      <CardHeader className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/30"></div>
                          )}
                          <div className="absolute top-3 left-3">
                            <Chip color="primary" size="sm" variant="flat">
                              {post.category}
                            </Chip>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardBody className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-foreground-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-3 mb-4 text-sm text-foreground-500">
                          <div className="flex items-center gap-2">
                            <Avatar src={post.authorAvatar} size="sm" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Chip key={tag} size="sm" variant="flat" color="default">
                              {tag}
                            </Chip>
                          ))}
                        </div>

                        <Button
                          as={Link}
                          href={`/blog/${post.slug}`}
                          variant="flat"
                          color="primary"
                          size="sm"
                          className="w-full font-medium"
                        >
                          Czytaj więcej
                        </Button>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-default-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchIcon size={24} className="text-default-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Brak wyników
                  </h3>
                                    <p className="text-foreground-600">
                    Nie znaleziono artykułów pasujących do Twojego wyszukiwania.
                  </p>
                  <Button
                    variant="flat"
                    color="primary"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Wszystkie");
                    }}
                  >
                    Wyczyść filtry
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-xl">
              <CardBody className="p-8 lg:p-12">
                 <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Nie przegap nowych artykułów!
                </h2>
                <p className="text-foreground-600 text-lg mb-6">
                  Zapisz się, aby otrzymywać najnowsze porady i materiały do nauki angielskiego.
                </p>
                <Button
                  as="a"
                  href="https://calendly.com/linglow/30min"
                  target="_blank"
                  color="primary"
                  size="lg"
                  className="font-semibold"
                >
                  Umów konsultację
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

