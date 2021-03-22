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

        <div>
            {blogPost.map((post) => (
                <BlogList key={post.slug} {...post}/>
            ))}
        </div>

    </div>
  )
}

function BlogList( { slug, title, date, content }) {

    return (

        <div>
            <div><Link href={`/blog/${slug}`}>
                <a>{title}</a>
            </Link></div>
            <div>{date}</div>
            <div>{content}</div>

        </div>
    )
}
