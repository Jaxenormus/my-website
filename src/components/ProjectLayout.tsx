import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

import { ArrowLeftIcon, LinkIcon } from './Icons'

type ProjectLayoutProps = {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: { [key: string]: any }
  previousPathname?: string
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  children,
  meta,
  previousPathname,
}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{`${meta.title} - Caleb`}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}

            <article>
              <header className="flex flex-col">
                <Image
                  src={meta.image}
                  alt=""
                  className="h-14 w-14"
                  unoptimized
                />
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <div className="flex gap-4">
                  {(meta.links ?? []).map((link, index) => (
                    <Link href={link.url} key={index}>
                      <span className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <LinkIcon className="mr-2 h-6 w-6 flex-none" />
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProjectLayout
