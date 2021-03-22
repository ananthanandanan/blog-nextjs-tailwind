import Head from 'next/head'
import Link from "next/link";
//import {blogPost} from "../lib/data";
import { format, add, parseISO} from "date-fns"
import {getAllPosts} from "../lib/data";

export default function Home({ posts }) {
    //console.log("this",posts);

  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="space-y-4">
           {posts.map((post) => (
                <BlogList key={post.slug} {...post}/>
            ))}
        </div>

    </div>
  )
}

function BlogList( { title, date, content, slug }) {
    return (

        <div className="border border-black-400 shadow hover:shadow-md rounded p-2">
            <div><Link href={`/blog/${slug}`}>
                <a className="font-bold">{title}</a>
            </Link></div>
            <div className="text-red-300 text-sm">{format(parseISO(date), 'MMMM do uuu')}</div>
            <div>{content}</div>

        </div>
    )
}


export async function getStaticProps(context) {
    const { params } = context;
    const allPosts = getAllPosts();
    //const {data, content} = allPosts.find((item) => item.slug === params.slug);
    return {
        props: {
            posts: allPosts.map(({data, content, slug}) => ({
                ...data,
                date: data.date.toISOString(),
                content,
                slug,
            })),

        },
    };
}
