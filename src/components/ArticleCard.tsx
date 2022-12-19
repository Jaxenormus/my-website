import { Card } from './Card'
import Image from 'next/image'

type ArticleCardProps = {
  article: {
    title: string
    slug: string
    description: string
    image: string
    tags: string[]
  }
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card as="article">
      <Card.Title href={`/projects/${article.slug}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={article.image} alt="" className="h-9 w-9" unoptimized />
          </div>
          <span className="flex flex-col gap-1">
            {article.title}
            <div className="hidden flex-wrap gap-2 sm:flex">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center rounded border border-zinc-100 p-6 dark:border-zinc-700/40 px-2 py-0.5 text-xs leading-tight text-zinc-500 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </span>
        </div>
      </Card.Title>
      {/* <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow> */}
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>View project</Card.Cta>
    </Card>
  )
}

export default ArticleCard
