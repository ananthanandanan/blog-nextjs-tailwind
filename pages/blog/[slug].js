import Head from 'next/head'
import { getAllPosts } from "../../lib/data";
import {format, parseISO} from "date-fns";

export default function BlogPostPage({ title, date, content }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h2 className="font-bold text-2xl">{title}</h2>
                <div className="text-red-300 text-sm">
                    {format(parseISO(date), 'MMMM do uuu')}
                </div>
                <p className="my-8">{content}</p>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.slug)
    const allPosts = getAllPosts();
    const {data, content} = allPosts.find((item) => item.slug === params.slug);
    return {
        props: {
            title: data.title,
            date: data.date.toISOString(),
            content,
        }
    };
}

export async function getStaticPaths() {
    const allPosts = getAllPosts();
    return {
        paths: getAllPosts().map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback:  false, // See the "fallback" section below
    };
}
