import { ArrowUpRight, Clock, BookOpen } from "lucide-react"
import { Spotlight } from "@/components/ui/Spotlight"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

function formatDate(dateStr: string) {
  if (!dateStr) return "—"
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
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

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen pb-24 pt-24 overflow-x-hidden">

      <div className="overflow-x-hidden">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-80 left-12 h-[100vh] w-[100vw]" fill="purple" />
        <Spotlight className="top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 max-w-4xl px-5 mx-auto">

        <div className="mb-14">
          <p className="text-[#888580] text-normal uppercase tracking-[0.15em] mb-3 font-medium">
            Blog
          </p>
          <h1 className="text-[#f0ede8] font-semibold text-2xl md:text-3xl tracking-tight leading-none mb-6">
            Writing down what's on my mind
          </h1>
          <div className="h-px bg-[#2a2a2a]" />
        </div>

        <div className="flex flex-col">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="group relative py-8 border-b border-[#1e1e1e] last:border-none"
            >
              <div className="absolute inset-x-[-1rem] inset-y-0 rounded-xl bg-[#1c1c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="flex items-start gap-6">

                <span className="text-[#2a2a2a] group-hover:text-[#3a3a3a] font-semibold text-3xl leading-none mt-1 select-none w-8 shrink-0 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-[#f0ede8] font-semibold text-xl tracking-tight">
                      {post.title}
                    </h2>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="shrink-0 flex items-center gap-1.5 mt-0.5 text-xs text-[#888580] border border-[#2a2a2a] px-2.5 py-1 rounded-md hover:border-[#f0ede8]/20 hover:text-[#f0ede8] transition-all duration-200 no-underline"
                    >
                      <BookOpen size={11} />
                      <span>Read</span>
                      <ArrowUpRight size={10} className="opacity-60" />
                    </Link>
                  </div>

                  <p className="text-[#888580] text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center flex-wrap gap-2">
                    <MetaChip>
                      <Clock size={10} className="opacity-60" />
                      {formatDate(post.created_at)}
                    </MetaChip>

                    {post.tags?.slice(0, 3).map((tag) => (
                      <MetaChip key={tag}>{tag}</MetaChip>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between">
          <span className="text-[#888580] text-xs tracking-wide">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        </div>

      </div>
    </main>
  )
}