import { SimpleLayout } from '@/components/SimpleLayout'

import { getAllProjects } from '@/lib/getProjects'

import ArticleCard from '@/components/ArticleCard'
import { NextSeo } from 'next-seo'

export default function ArticlesIndex({ articles }: any) {
  return (
    <>
      <NextSeo
        title="My Projects"
        description="Things I've made trying to put my dent in the universe."
      />
      <SimpleLayout
        title="Things I've made trying to put my dent in the universe."
        intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article: any) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllProjects()).map(
        ({ component, ...meta }: any) => meta
      ),
    },
  }
}
