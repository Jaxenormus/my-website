import glob from 'fast-glob'
import * as path from 'path'

type Project = {
  slug: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export async function getAllProjects(): Promise<Project[]> {
  const cwd = path.join(process.cwd(), 'src/pages/projects')
  const paths = await glob(['*.mdx', '*/index.mdx'], { cwd })
  return Promise.all(
    paths.map(async (projectPath) => {
      const { meta, default: component } = await import(
        `../pages/projects/${projectPath}`
      )
      const slug = projectPath.replace(/(\/index)?\.mdx$/, '')
      return { slug, ...meta, component }
    })
  )
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects
    .filter((project) => project.feat_position !== undefined)
    .sort((a, b) => a.feat_position - b.feat_position)
}
