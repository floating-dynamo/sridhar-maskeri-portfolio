import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";
import mediumLogo from "@/public/images/blogs/medium.png";
import hashnodeLogo from "@/public/images/blogs/hashnode.png";
import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">My Blogs</h1>
      <div className="flex gap-5 flex-wrap">
      <Alert className="flex items-start gap-2">
          <Image src={hashnodeLogo} alt="medium" width={20} height={20} />
          <div>
            <AlertTitle>Hashnode</AlertTitle>
            <AlertDescription>https://sridharmaskeri.hashnode.dev</AlertDescription>
          </div>
        </Alert>
        <Alert className="flex items-start gap-2">
          <Image src={mediumLogo} alt="medium" width={20} height={20} className="dark:bg-white dark:rounded-full"/>
          <div>
            <AlertTitle>Medium</AlertTitle>
            <AlertDescription>https://medium.com/@shridharmaskeri</AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default Blog;
