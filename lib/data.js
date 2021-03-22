import fs from 'fs';
import  path from 'path';
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), '_content');

export function getAllPosts(){
    const allPost = fs.readdirSync(contentDir);
    return allPost.map(fileName => {
        const slug = fileName.replace('.md', '');
        const fileContents = fs.readFileSync(
            path.join(contentDir, fileName),
            'utf-8'
        );
        const { data, content } = matter(fileContents);

        return {
            data,
            content,
            slug,
        }

    })
}
