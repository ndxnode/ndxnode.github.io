import { motion } from "motion/react";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolio, type SocialLink } from "@/data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <main className="min-h-screen px-5 py-6 text-foreground sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full flex-col gap-8">
        <Hero />
        <SelectedWork />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden lg:min-h-155"
      initial="hidden"
      animate="visible"
      variants={reveal}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-x-8 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
      <div className="absolute -right-24 top-16 size-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 left-10 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-6xl flex-col justify-center gap-16">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="max-w-3xl">
            <motion.h1
              id="top"
              className="max-w-4xl text-6xl font-medium leading-[0.95] tracking-[-0.055em] text-balance sm:text-7xl lg:text-[7.75rem]"
              variants={reveal}
              transition={{ delay: 0.14, duration: 0.65 }}
            >
              {portfolio.name}
            </motion.h1>
            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
              variants={reveal}
              transition={{ delay: 0.2, duration: 0.65 }}
            >
              {portfolio.bio}
            </motion.p>
          </div>

          <motion.aside
            className="flex flex-col gap-5 justify-self-start lg:justify-self-end"
            variants={reveal}
            transition={{ delay: 0.28, duration: 0.65 }}
            aria-label="Profile summary"
          >
            <div className="relative w-full max-w-sm border border-border bg-background/70 p-3 shadow-[0_18px_55px_hsl(216_16%_15%/0.11)]">
              <img
                src={portfolio.profileImage}
                width="520"
                height="520"
                alt="Andy Wu"
                className="aspect-[4/5] w-full object-cover grayscale-[15%] saturate-[0.88]"
              />
            </div>
            <nav
              aria-label="Contact links"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full px-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <a href={portfolio.resumeHref}>
                  <FileText className="size-4" aria-hidden="true" />
                  Resume
                </a>
              </Button>
              {portfolio.socials.map((link) => (
                <SocialIconLink key={link.label} link={link} />
              ))}
            </nav>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}

function SocialIconLink({ link }: { link: SocialLink }) {
  return (
    <Button
      asChild
      variant="outline"
      size="icon-lg"
      className="rounded-full bg-background/60 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background"
    >
      <a
        href={link.href}
        aria-label={link.label}
        target="_blank"
        rel="noreferrer"
      >
        <BrandIcon label={link.label} />
      </a>
    </Button>
  );
}

function BrandIcon({ label }: { label: SocialLink["label"] }) {
  if (label === "Email") {
    return <Mail className="size-4" aria-hidden="true" />;
  }

  if (label === "LinkedIn") {
    return (
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M5.34 7.08a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28ZM3.5 21V8.83h3.68V21H3.5Zm6.06 0V8.83h3.52v1.66h.05c.49-.93 1.7-1.91 3.5-1.91 3.74 0 4.43 2.46 4.43 5.66V21h-3.67v-6c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.29 1.55-2.29 3.15V21H9.56Z" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.11.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.61 1.21 3.24.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.6 10.6 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.07v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    );
  }

  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path d="m4 4 16 16M20 4 4 20" />
    </svg>
  );
}

function SelectedWork() {
  return (
    <motion.section
      className="bg-card/64 p-6 shadow-sm backdrop-blur sm:p-8"
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={reveal}
      transition={{ duration: 0.6 }}
      aria-labelledby="selected-work-title"
    >
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2
            id="selected-work-title"
            className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
          >
            Projects
          </h2>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Card className="group h-full border-border/80 bg-background/60 transition duration-300 hover:-translate-y-1 hover:bg-background">
              <CardHeader>
                <div className="mb-8 flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full bg-card/70">
                    {project.kind}
                  </Badge>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="pt-2 text-base leading-7">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default App;
