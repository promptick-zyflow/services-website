import Link from "next/link";
import { site } from "@/lib/site";
import { agents } from "@/lib/agents";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-bold tracking-tight">
              {site.name}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-faint">
              {site.email}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Agents</p>
            <ul className="space-y-3 text-sm">
              {agents.map((a) => (
                <li key={a.slug}>
                  {a.href ? (
                    <Link
                      href={a.href}
                      className="text-muted transition-colors hover:text-bone"
                    >
                      {a.name}
                    </Link>
                  ) : (
                    <span className="text-muted">
                      {a.name}
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-faint">
                        soon
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-muted transition-colors hover:text-bone"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="text-muted transition-colors hover:text-bone"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Built on the Hermes
            multi-agent framework.
          </p>
          <p className="font-mono uppercase tracking-widest">
            Deep agents · human in command
          </p>
        </div>
      </div>
    </footer>
  );
}
