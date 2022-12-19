import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename: any) {
  let { meta, default: component } = await import(
    `../pages/projects/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllProjects() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/projects'),
  })

  return Promise.all(articleFilenames.map(importArticle))
}

export async function getFeaturedProjects() {
  let articles = await getAllProjects()
  return articles.filter((article) => article.feat_position !== undefined).sort((a, b) => a.feat_position - b.feat_position)
}