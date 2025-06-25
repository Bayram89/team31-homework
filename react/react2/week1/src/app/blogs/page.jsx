"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// blog posts
const blogPosts = [
    { slug: "my-new-post", title: "My New Post" },
    { slug: "hello-world", title: "Hello World" },
    { slug: "react-routing", title: "React Routing" },
];

// this is for testing
const NASA_API_KEY = "h4Kf953HHtDP77VVdvtJV7TisdZlWWmX9ZwkEpWg";

function BlogsList() {
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/blogs/nasa-epic">See NASA EPIC Image</Link>
        </div>
    );
}

function BlogPost() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    // Converting title name ( fx from my-new-post to My New Post)
    const title = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    return (
        <div>
            <h1>{title}</h1>
            <Link href="/blogs">Back to Blogs</Link>
        </div>
    );
}

function NasaEpic() {
    const searchParams = useSearchParams();
    const date = searchParams.get("date") || "2024-06-01";
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        async function fetchEpic() {
            // here we get the images for the date
            const resp = await fetch(
                `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${NASA_API_KEY}`
            );
            const data = await resp.json();
            if (data && data.length > 0) {
                const imgName = data[0].image;
              
                const [y, m, d] = date.split("-");
                const url = `https://epic.gsfc.nasa.gov/archive/natural/${y}/${m}/${d}/jpg/${imgName}.jpg`;
                setImgUrl(url);
            } else {
                setImgUrl(null);
            }
        }
        fetchEpic();
    }, [date]);

    return (
        <div>
            <h1>NASA EPIC Image for {date}</h1>
            {imgUrl ? (
                <img src={imgUrl} alt="NASA EPIC" width={400} />
            ) : (
                <p>No image found for this date.</p>
            )}
            <Link href="/blogs">Back to Blogs</Link>
        </div>
    );
}

//  router 
export default function BlogsPage() {
    const pathname = usePathname();

    if (pathname === "/blogs") {
        return <BlogsList />;
    }
    if (pathname.startsWith("/blogs/nasa-epic")) {
        return <NasaEpic />;
    }
    if (pathname.startsWith("/blogs/")) {
        return <BlogPost />;
    }
    return <div>Not Found</div>;
}