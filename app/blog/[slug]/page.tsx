import { ArrowLeft, Clock, BookOpen } from "lucide-react"
import { Spotlight } from "@/components/ui/Spotlight"
import Link from "next/link"
import { getAllPosts, getPostSlugs } from "@/lib/blog"

function formatDate(dateStr: string) {
  if (!dateStr) return "—"
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-[#888580] border border-[#2a2a2a] bg-[#1c1c1c] px-2 py-0.5 rounded-md">
      {children}
    </span>
  )
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  // Ambil metadata post yang sesuai dari semua post
  const posts = getAllPosts()
  const meta = posts.find((p) => p.slug === slug)

  return (
    <main className="min-h-screen px-5 py-20 overflow-x-hidden">

      <div className="overflow-x-hidden">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-80 left-12 h-[100vh] w-[100vw]" fill="purple" />
        <Spotlight className="top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 max-w-4xl px-5 mx-auto">

        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#888580] border border-[#2a2a2a] px-2.5 py-1 rounded-md hover:border-[#f0ede8]/20 hover:text-[#f0ede8] transition-all duration-200 no-underline"
          >
            <ArrowLeft size={11} />
            Back to Blog
          </Link>
        </div>

        {meta && (
          <div className="mb-12">
            <p className="text-[#888580] text-xs tracking-[0.15em] uppercase mb-3 font-medium">
              Blog
            </p>
            <h1 className="text-[#f0ede8] font-semibold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              {meta.title}
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-6">
              <MetaChip>
                <Clock size={10} className="opacity-60" />
                {formatDate(meta.created_at)}
              </MetaChip>
              {meta.tags?.map((tag) => (
                <MetaChip key={tag}>{tag}</MetaChip>
              ))}
            </div>

            <div className="h-px bg-[#2a2a2a]" />
          </div>
        )}

        <article className="
          prose prose-invert max-w-none
          prose-headings:text-[#f0ede8] prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[#888580] prose-p:leading-relaxed prose-p:text-sm
          prose-a:text-[#f0ede8] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#f0ede8]
          prose-code:text-[#f0ede8] prose-code:bg-[#1c1c1c] prose-code:border prose-code:border-[#2a2a2a] prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#1c1c1c] prose-pre:border prose-pre:border-[#2a2a2a] prose-pre:rounded-xl
          prose-ul:text-[#888580] prose-ul:text-sm
          prose-ol:text-[#888580] prose-ol:text-sm
          prose-li:marker:text-[#3a3a3a]
          prose-blockquote:border-l-[#2a2a2a] prose-blockquote:text-[#888580]
          prose-hr:border-[#2a2a2a]
        ">
          <Post />
        </article>

        <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#888580] hover:text-[#f0ede8] transition-colors duration-200 no-underline"
          >
            <ArrowLeft size={11} />
            Back to all posts
          </Link>
        </div>

      </div>
    </main>
  )
}

export function generateStaticParams() {
  return getPostSlugs()
}

export const dynamicParams = false