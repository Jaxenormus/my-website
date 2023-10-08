import Image, { StaticImageData } from 'next/image'

import logoSinuio from '@/public/assets/logos/barnabus.png'
import logoSyncore from '@/public/assets/logos/syncore.png'
import logoWhop from '@/public/assets/logos/whop.png'
import Button from '@/src/components/Button'
import { Container } from '@/src/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/src/components/Icons'
import ProjectCard from '@/src/components/ProjectCard'
import SocialLink from '@/src/components/SocialLink'
import BriefcaseIcon from '@/src/icons/BriefcaseIcon'
import MailIcon from '@/src/icons/MailIcon'
import { getFeaturedProjects } from '@/src/lib/getProjects'

const Contact: React.FC = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <input type="hidden" name="_append" value="false" />
      <input
        type="hidden"
        name="_redirect"
        value={`${process.env.NEXT_PUBLIC_SITE_URL}/thanks`}
      />
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Ready to start a project?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {
          "Interested in working together? We should queue up a time to chat. I'll buy the coffee."
        }
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <Button href="/contact" className="flex-none">
          Contact Me
        </Button>
      </div>
    </div>
  )
}

const Information: React.FC = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">My tech stack</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Im always looking to improve my tech stack but here is my tried and true
        stack that I use for most projects:
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-2">
        {[
          'Typescript',
          'Next.js',
          'Svelte',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
        ].map((technology) => (
          <li
            key={technology}
            className="flex items-center text-sm text-zinc-600 dark:text-zinc-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 flex-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              />
            </svg>
            <span className="ml-3">{technology}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type Role = {
  company: string
  title: string
  logo: string | StaticImageData
  start: string | { label: string }
  end: string | { label: string }
}

const Experience: React.FC = () => {
  const resume: Role[] = [
    {
      company: 'Whop',
      title: 'Software Engineer',
      logo: logoWhop,
      start: '2023',
      end: { label: 'Present' },
    },
    {
      company: 'Sinuio',
      title: 'Founder',
      logo: logoSinuio,
      start: '2020',
      end: { label: 'Present' },
    },
    {
      company: 'Syncore LLC',
      title: 'Frontend Developer',
      logo: logoSyncore,
      start: '2021',
      end: '2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs leading-tight text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs leading-tight text-zinc-400 dark:text-zinc-500"
                aria-label={`${
                  typeof role.start !== 'string' ? role.start.label : role.start
                } until ${
                  typeof role.end !== 'string' ? role.end.label : role.end
                }`}
              >
                <time>
                  {typeof role.start === 'string'
                    ? role.start
                    : role.start.label}
                </time>{' '}
                <span aria-hidden="true">- </span>
                <time>
                  {typeof role.end === 'string' ? role.end : role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button
        onClick={() => alert('Coming Soon')}
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

type HomePageProps = { articles: any }

const HomePage: React.FC<HomePageProps> = ({ articles }) => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            hello there 👋 nice to meet you.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Caleb aka Jax, an indie software developer based in the US.
            I&apos;m the founder of Sinuio, an agency building SASS products and
            helping companies automate their business processes.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Jaxenormus"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://twitter.com/Jaxenormus"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/caleb-delbridge-65b5b624a/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10">
            <span className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              <h1 className="hidden text-3xl sm:block">
                Take a look at what i’ve built:
              </h1>
              <h1 className="text-2xl text-[28px] sm:hidden">
                Highlighted Projects:
              </h1>
            </span>
            <div className="flex flex-col gap-12">
              {articles.map((article: any) => (
                <ProjectCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Information />
            <Experience />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  return {
    props: {
      articles: (await getFeaturedProjects()).map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ({ component, ...meta }: any) => meta
      ),
    },
  }
}
