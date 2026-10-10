import { ArrowUpRight, BookOpen, ExternalLink, Sparkles } from 'lucide-react'

const picks = [
  {
    name: 'Google Calendar',
    url: 'https://calendar.google.com',
    reason: 'I block out study time, so it actually happens.',
  },
  {
    name: 'Notion',
    url: 'https://notion.so',
    reason: 'Keeps my notes, assignments, and to-dos in one place.',
  },
  {
    name: 'Anki',
    url: 'https://apps.ankiweb.net',
    reason: 'Flashcards that remind me to review right before I’d forget.',
  },
  {
    name: 'Forest',
    url: 'https://forestapp.cc',
    reason: 'Grows a tree while I stay off my phone, which keeps me focused.',
  },
  {
    name: 'Grammarly',
    url: 'https://grammarly.com',
    reason: 'Catches my writing mistakes before I submit.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fc] text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <header className="relative overflow-hidden rounded-[2rem] bg-[#1E3A8A] px-6 py-10 text-white shadow-[0_24px_60px_-28px_rgba(30,58,138,0.65)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-20 size-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -right-4 top-8 size-28 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-medium tracking-wide text-blue-100">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/20">
                <BookOpen aria-hidden="true" />
              </span>
              <span>MY EVERYDAY KIT</span>
            </div>
            <h1 className="max-w-xl text-balance font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              Tools That Got Me Through College
            </h1>
            <p className="mt-4 text-base text-blue-100 sm:text-lg">5 tools I use every week.</p>
            <div className="mt-8 grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Who it’s for</p>
                <p className="mt-2 max-w-xs text-base leading-7 text-blue-50">For new students / visitors / beginners who want useful study and productivity tools.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Why I made it</p>
                <p className="mt-2 max-w-xs text-base leading-7 text-blue-50">Because I kept getting asked for my recommendations.</p>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 sm:py-16" aria-labelledby="picks-heading">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1E3A8A]">The shortlist</p>
              <h2 id="picks-heading" className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">My picks</h2>
            </div>
            <p className="hidden text-right text-sm leading-6 text-slate-500 sm:block">Five small helpers<br />that make a big difference.</p>
          </div>
          <div className="grid gap-4">
            {picks.map((pick, index) => (
              <article key={pick.name} className="group grid gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_30px_-20px_rgba(30,58,138,0.4)] sm:grid-cols-[72px_1fr_auto] sm:items-center sm:p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 font-serif text-2xl text-[#1E3A8A] sm:size-14">0{index + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{pick.name}</h3>
                  <a href={pick.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[#1E3A8A] underline decoration-blue-200 underline-offset-4 hover:decoration-[#1E3A8A]">
                    {pick.url.replace('https://', '')} <ExternalLink aria-hidden="true" />
                  </a>
                  <p className="mt-3 max-w-2xl text-[15px] leading-6 text-slate-600">{pick.reason}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="hidden text-slate-300 transition group-hover:text-[#1E3A8A] sm:block" />
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex gap-4">
            <Sparkles aria-hidden="true" className="mt-1 shrink-0 text-[#1E3A8A]" />
            <div>
              <h2 className="font-serif text-2xl tracking-[-0.02em]">Know a tool I missed?</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">Share it with me and I’ll give it a try.</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white sm:self-auto">
            Suggestion link not provided <ArrowUpRight aria-hidden="true" />
          </span>
        </section>
        <footer className="pt-8 text-center text-xs text-slate-400">A personal shortlist for better work and study.</footer>
      </div>
    </main>
  )
}

