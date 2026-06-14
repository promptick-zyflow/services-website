import { site } from "@/lib/site";
import { agents } from "@/lib/agents";
import { TrackedLink } from "@/components/site/TrackedLink";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">



        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zyflow-short.png"
                alt="Zyflow mark"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                Zyflow
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
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
                    <TrackedLink
                      href={a.href}
                      event="clicked-footer-link"
                      eventProps={{ label: a.name, destination: a.href, group: "agents" }}
                      className="text-muted transition-colors hover:text-bone"
                    >
                      {a.name}
                    </TrackedLink>
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
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              {site.footerGroups.services.map((n) => (
                <li key={n.href}>
                  <TrackedLink
                    href={n.href}
                    event="clicked-footer-link"
                    eventProps={{ label: n.label, destination: n.href, group: "services" }}
                    className="text-muted transition-colors hover:text-bone"
                  >
                    {n.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Products</p>
            <ul className="space-y-3 text-sm">
              {site.footerGroups.products.map((n) => (
                <li key={n.href}>
                  <TrackedLink
                    href={n.href}
                    event="clicked-footer-link"
                    eventProps={{ label: n.label, destination: n.href, group: "products" }}
                    className="text-muted transition-colors hover:text-bone"
                  >
                    {n.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              {site.footerGroups.company.map((n) => (
                <li key={n.href}>
                  <TrackedLink
                    href={n.href}
                    event="clicked-footer-link"
                    eventProps={{ label: n.label, destination: n.href, group: "company" }}
                    className="text-muted transition-colors hover:text-bone"
                  >
                    {n.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono uppercase tracking-widest">
            Deep agents · human in command
          </p>
        </div>
      </div>
    </footer>
  );
}
