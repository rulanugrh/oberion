import createMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import rehypePrettyCode from "rehype-pretty-code"

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkFrontmatter,
            remarkMdxFrontmatter
        ],
        rehypePlugins: [[
            rehypePrettyCode,
            {
                keepBackground: false,
            }
        ]],
    }
})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)