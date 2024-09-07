import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import { blog } from "../blog"; // Updated import statement
import Image from "next/image";

const dir = fs.readdirSync("content", "utf-8");

export default function BlogPostCards() {
  const blogPosts: blog[] = dir.map((file: string) => {
    const blogPost = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(blogPost);
    return {
      id: file,
      title: data.title,
      description: data.description,
      content: data.content,
      date: data.date, // Ensure date is a Date object
      img: data.img,
      author: data.author, // Assuming author is also part of the blog type
    };
  });

  return (
    <div className="flex justify-center gap-5 py-20 bg-muted/20 ">
      <div className="">
        <div className=" flex justify-center text-4xl">Our Blogs</div>
       <div className="flex justify-center  gap-5 py-20">
       {blogPosts.map((post:blog ) => (
          <Card key={post?.id} className="relative w-[350px]">
            <CardHeader className="relative p-0">
              <Image width={100} height={100}
                src={post?.img}
                alt={post.title}
                className="absolute top-0 left-0 w-full h-48 object-cover rounded-t"
              />
            </CardHeader>
            <CardContent className="mt-48 p-5">
              <CardTitle>{post?.title}</CardTitle>
              <CardDescription>{post?.description}</CardDescription>
              <p className="text-sm text-muted-foreground">{post?.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-5">
              <div className="  gap-2 flex justify-center">
                <p className="text-sm px-2 border-r-2">By {post?.author}</p>
                <p className="text-sm">{post?.date}</p>
              </div>
              <Button>
                <Link href={`blog/${post?.title}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
       </div>
      </div>
    </div>
  );
}