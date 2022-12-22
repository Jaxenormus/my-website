import Card from './Card'

type ProjectCardProps = {
  article: {
    title: string
    slug: string
    description: string
    image: string
    tags: string[]
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ article }) => {
  return (
    <Card as="article">
      <Card.Title href={`/projects/${article.slug}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {article.title}
        </div>
      </Card.Title>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Learn more</Card.Cta>
    </Card>
  )
}

export default ProjectCard
