import { Badge } from "@/components/Badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card"

import { releases } from "../data/releases"
import type { ReleaseChange } from "../data/releases"

const changeTypeLabels: Record<ReleaseChange["type"], string> = {
  feature: "Feature",
  fix: "Fix",
  breaking: "Breaking",
}

const changeTypeVariants: Record<
  ReleaseChange["type"],
  "default" | "secondary" | "outline"
> = {
  feature: "default",
  fix: "secondary",
  breaking: "outline",
}

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`))
}

export function ReleasesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <section>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Releases
        </h1>
        <p className="mt-2 text-muted-foreground">
          New updates and improvements to erco-ui.
        </p>
      </section>

      <div className="mt-10 space-y-8 pb-8">
        {releases.map((release) => (
          <Card key={release.version} className="shadow-none">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-xl">v{release.version}</CardTitle>
                <Badge variant="secondary">{formatReleaseDate(release.date)}</Badge>
              </div>
              <CardDescription>{release.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {release.changes.map((change) => (
                  <li key={change.text} className="flex gap-3 text-sm leading-relaxed">
                    <Badge
                      variant={changeTypeVariants[change.type]}
                      className="mt-0.5 h-5 shrink-0 px-1.5 text-[10px]"
                    >
                      {changeTypeLabels[change.type]}
                    </Badge>
                    <span className="text-muted-foreground">{change.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
