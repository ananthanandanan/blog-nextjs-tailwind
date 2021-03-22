import Head from 'next/head'
import Link from "next/link";
import {blogPost} from "../lib/data";

export default function Home() {
    console.log(blogPost)
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <h1>My blog</h1>

        </main>
        <div>
            {blogPost.map((post) => (
                <div key={post.slug}>
                    <div><Link href={`/blog/${post.slug}`}>
                        <a>{post.title}</a>
                    </Link></div>
                    <div>{post.date.toString()}</div>
                    <div>{post.content}</div>

                </div>
            ))}
        </div>

    </div>
  )
}
