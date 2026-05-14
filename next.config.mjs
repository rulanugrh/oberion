import createMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkFrontmatter,
            remarkMdxFrontmatter
        ]
    }
})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)