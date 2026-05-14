import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogMeta {
    slug: string
    title: string
    description: string
    created_at: string
    tags?: string[]
}

const contentDir = path.join(process.cwd(), "content")

export function getAllPosts(): BlogMeta[] {
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

    return files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "")
        const filePath = path.join(contentDir, filename)
        const raw = fs.readFileSync(filePath, "utf-8")

        const { data } = matter(raw)

        return {
            slug,
            title: data.title ?? slug,
            description: data.description ?? "",
            created_at: data.created_at ?? "",
            tags: data.tags ?? []
        } satisfies BlogMeta
    }).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export function getPostSlugs(): { slug: string} [] {
    return fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx")).map((f) => ({
        slug: f.replace(/\.mdx$/, "")
    }))
}