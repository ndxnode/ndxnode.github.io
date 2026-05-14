export type SocialLink = {
  label: 'GitHub' | 'LinkedIn' | 'X' | 'Email'
  href: string
}

export type ProjectPlaceholder = {
  title: string
  kind: string
  description: string
}

export const portfolio = {
  name: 'Andy Wu',
  email: 'andy.wu.dev32@gmail.com',
  resumeHref: '/Andy_Wu_resume.pdf',
  profileImage: '/profile.jpeg',
  bio:
    'Building software with React, TypeScript, and Python',
  stack: ['React', 'TypeScript', 'Python', 'Tailwind CSS', 'shadcn/ui'],
  learning: ['TypeScript', 'Effect.ts'],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/ndxnode',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/andy-wu32',
    },
    {
      label: 'X',
      href: 'https://x.com/ndxnode',
    },
    {
      label: 'Email',
      href: 'mailto:andy.wu.dev32@gmail.com',
    },
  ] satisfies SocialLink[],
  projects: [
    {
      title: 'Full-stack app',
      kind: 'Coming soon',
      description:
        'A focused product-style build that shows frontend polish, backend thinking, and clean TypeScript structure.',
    },
    {
      title: 'React interface',
      kind: 'Coming soon',
      description:
        'A small but refined UI case study centered on layout, state, accessibility, and motion restraint.',
    },
    {
      title: 'Python tool',
      kind: 'Coming soon',
      description:
        'A practical utility that demonstrates automation, data handling, and clear developer ergonomics.',
    },
  ] satisfies ProjectPlaceholder[],
}
