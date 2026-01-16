import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center pt-10 pb-12">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="scholar" href={siteMetadata.scholar} size={6} />
          {siteMetadata.x ? (
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          ) : (
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          )}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {siteMetadata.author}
        </div>
      </div>
    </footer>
  )
}
