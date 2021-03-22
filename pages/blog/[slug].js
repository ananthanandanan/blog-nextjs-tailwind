import Head from 'next/head'
import {blogPost} from "../../lib/data";

export default function BlogPostPage({ title, date, content }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>{title}</h1>
                <p>{content}</p>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    return {
        props: blogPost.find((item) => item.slug === params.slug),
    };
}

export async function getStaticPaths() {

    return {
        paths: blogPost.map((item) => ({
            params: {
                slug: item.slug,
            },
        })),
        fallback:  false, // See the "fallback" section below
    };
}
