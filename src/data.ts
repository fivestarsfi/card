export type Link = { label: string; href: string }

export const profile = {
  handle: '@fivestars',
  role: 'fullstack software engineer - web3 defi | ml',
}

export const projects: Link[] = [
  { label: 'resu', href: 'https://resufi.github.io/landing/' },
  { label: 'syde', href: 'https://syde.fi/' },
  { label: 'elizaos-ton', href: 'https://www.linkedin.com/posts/haoen-peng_you-can-now-use-the-elizaos-plugin-to-interact-activity-7308970684024508418-evaR' },
]

export const experience: { when: string; title: string; company: Link }[] = [
  { when: 'resu protocol', title: 'cf / cto', company: { label: 'risk tranches', href: 'https://resufi.github.io/landing/' } },
  { when: 'syde.fi', title: 'ex cf / cto', company: { label: 'synts', href: 'https://syde.fi/' } },
  { when: 'dedust / vertus / papaya / & more', title: 'sc dev', company: { label: 'my cv', href: 'https://github.com/fivestarsfi/card/blob/main/src/public/cv.pdf' } },
]

export const socials: { text: string; link: Link }[] = [
  { text: 'say hi in', link: { label: 'telegram', href: 'https://t.me/smilefromthestreets' } },
  { text: 'research & takes on', link: { label: 'x', href: 'https://x.com/cankeepsafe' } },
  { text: 'code lives on', link: { label: 'github', href: 'https://github.com/fivestarsfi' } },
  { text: 'or just drop a line:', link: { label: 'murmurants@gmail.com', href: 'mailto:murmurants@gmail.com' } },
]
