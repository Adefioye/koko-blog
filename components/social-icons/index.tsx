import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
  Scholar,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
  scholar: Scholar,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]
  const sizeClass =
    size === 4
      ? 'h-4 w-4'
      : size === 5
        ? 'h-5 w-5'
        : size === 6
          ? 'h-6 w-6'
          : size === 7
            ? 'h-7 w-7'
            : size === 8
              ? 'h-8 w-8'
              : size === 10
                ? 'h-10 w-10'
                : 'h-8 w-8'

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`${sizeClass} hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200`}
      />
    </a>
  )
}

export default SocialIcon
