import { Star, GitFork, ArrowUpRight, Clock } from "lucide-react"
import { Spotlight } from "@/components/ui/Spotlight"
import { projects } from "@/data"

interface GithubRepo {
  stargazers_count: number
  forks_count: number
  language: string | null
  pushed_at: string
  topics: string[]
}

async function getRepoData(repo: string): Promise<GithubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return "today"
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

const langColor: Record<string, string> = {
  Go:         "#00ADD8",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python:     "#3572A5",
  Rust:       "#DEA584",
  Dockerfile: "#384D54",
  Shell:      "#89E051",
}

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-[#888580] border border-[#2a2a2a] bg-[#1c1c1c] px-2 py-0.5 rounded-md">
      {children}
    </span>
  )
}

export default async function Projects() {
  const repoData = await Promise.all(
    projects.map((p) => getRepoData(p.repo))
  )

  return (
    <main className="min-h-screen pb-24 pt-24 overflow-x-hidden">

      <div className="overflow-x-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-80 left-12 h-[100vh] w-[100vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-5 mx-auto">

        <div className="mb-14">
          <p className="text-[#888580] text-xs tracking-[0.15em] uppercase mb-3 font-medium">
            Projects
          </p>
          <h1 className="text-[#f0ede8] font-semibold text-2xl md:text-3xl tracking-tight leading-none mb-6">
            Selected project i&apos;ve maintain
          </h1>
          <div className="h-px bg-[#2a2a2a]" />
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const gh   = repoData[i]
            const lang = gh?.language
            const dot  = lang ? langColor[lang] ?? "#888580" : null

            return (
              <article
                key={project.id}
                className="group relative py-8 border-b border-[#1e1e1e] last:border-none"
              >
                <div className="absolute inset-x-[-1rem] inset-y-0 rounded-xl bg-[#1c1c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="flex items-start gap-6">

                  <span className="text-[#2a2a2a] group-hover:text-[#3a3a3a] font-semibold text-3xl leading-none mt-1 select-none w-8 shrink-0 transition-colors duration-300">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">

                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-[#f0ede8] font-semibold text-xl tracking-tight">
                        {project.title}
                      </h2>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 mt-0.5 text-xs text-[#888580] border border-[#2a2a2a] px-2.5 py-1 rounded-md hover:border-[#f0ede8]/20 hover:text-[#f0ede8] transition-all duration-200 no-underline"
                      >
                        <GithubIcon size={11} />
                        <span>View</span>
                        <ArrowUpRight size={10} className="opacity-60" />
                      </a>
                    </div>

                    <p className="text-[#888580] text-sm leading-relaxed mb-4">
                      {project.des}
                    </p>

                    <div className="flex items-center flex-wrap gap-2">

                      {lang && dot && (
                        <MetaChip>
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dot }} />
                          {lang}
                        </MetaChip>
                      )}

                      {gh && (
                        <MetaChip>
                          <Star size={10} className="opacity-60" />
                          {gh.stargazers_count}
                        </MetaChip>
                      )}

                      {gh && gh.forks_count > 0 && (
                        <MetaChip>
                          <GitFork size={10} className="opacity-60" />
                          {gh.forks_count}
                        </MetaChip>
                      )}

                      {gh && (
                        <MetaChip>
                          <Clock size={10} className="opacity-60" />
                          {timeAgo(gh.pushed_at)}
                        </MetaChip>
                      )}

                      {gh?.topics?.slice(0, 3).map((topic) => (
                        <MetaChip key={topic}>{topic}</MetaChip>
                      ))}

                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-14 flex items-center justify-between">
          <span className="text-[#888580] text-xs tracking-wide">
            {projects.length} projects
          </span>
          <a
            href="https://github.com/rulanugrh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#888580] hover:text-[#f0ede8] transition-colors duration-200 no-underline"
          >
            <GithubIcon size={12} />
            See all on GitHub
            <ArrowUpRight size={11} />
          </a>
        </div>

      </div>
    </main>
  )
}