import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { allAuthors } from 'contentlayer/generated'

export default function Footer() {
  const author = allAuthors.find((p) => p.slug === 'default')
  const social = {
    email: author?.email ?? siteMetadata.email,
    github: author?.github ?? siteMetadata.github,
    linkedin: author?.linkedin ?? siteMetadata.linkedin,
    scholar: author?.scholar ?? siteMetadata.scholar,
    x: author?.twitter ?? siteMetadata.x ?? siteMetadata.twitter,
  }

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center pt-10 pb-12">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <div className="flex items-center space-x-4">
            <SocialIcon kind="mail" href={`mailto:${social.email}`} size={6} />
            <SocialIcon kind="github" href={social.github} size={6} />
            <SocialIcon kind="linkedin" href={social.linkedin} size={6} />
            <SocialIcon kind="scholar" href={social.scholar} size={6} />
            <SocialIcon kind="x" href={social.x} size={6} />
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {siteMetadata.author}
        </div>
      </div>
    </footer>
  )
}
