import Head from 'next/head'
import { getAllPosts } from "../../lib/data";
import {format, parseISO} from "date-fns";
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

export default function BlogPostPage({ title, date, content }) {
    //hydrate the object passed into desired markdown presentable format.
    const hydratedContent = hydrate(content);

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
                <p className="my-8 prose">{hydratedContent}</p>
            </main>
        </div>
    )
}

//For loading the static file or data and then pass to component as props to use.
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.slug)
    const allPosts = getAllPosts();
    const {data, content} = allPosts.find((item) => item.slug === params.slug);
    //parse the content of md page to the desired object that needs to be hydrated... its server-side function
    const mdxSource = await renderToString(content);
    return {
        props: {
            title: data.title,
            date: data.date.toISOString(),
            content: mdxSource,
        }
    };
}

//This function is used for dynamic routing where each path hit, its recognizes and passes that slug as params to
//staticprops.
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
