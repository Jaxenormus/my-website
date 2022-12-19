import Image, { StaticImageData } from 'next/image'
import Head from 'next/head'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoPlanetaria from '@/images/logos/open-shuttle.svg'
import logoSyncore from '@/images/logos/syncore.png'
import { getFeaturedProjects } from '@/lib/getProjects'
import MailIcon from '@/icons/MailIcon'
import BriefcaseIcon from '@/icons/BriefcaseIcon'
import ArrowDownIcon from '@/icons/ArrowDownIcon'
import ArticleCard from '@/components/ArticleCard'
import SocialLink from '@/components/SocialLink'

const Contact: React.FC = () => {
  return (
    <form
      id="contact"
      action="https://submit-form.com/SQvrw9ai"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Lets get in contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Have a question, proposal, or just want to say hi? Send me a message and
        I&apos;ll get back to you. Promise!
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <textarea
          placeholder="Message"
          aria-label="Message"
          name="message"
          required
          rows={4}
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none">
          Send
        </Button>
      </div>
    </form>
  )
}

type Role = {
  company: string
  title: string
  logo: string | StaticImageData
  start: string | { label: string; dateTime: number }
  end: string | { label: string; dateTime: number }
}

const Resume: React.FC = () => {
  let resume: Role[] = [
    {
      company: 'Sinuio',
      title: 'Founder',
      logo: logoPlanetaria,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Syncore LLC',
      title: 'Software Developer',
      logo: logoSyncore,
      start: '2021',
      end: '2022',
    },
  ]

  return (
    <div
      id="work"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />

        <span className="ml-3">Work</span>
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
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${
                  typeof role.start !== 'string' ? role.start.label : role.start
                } until ${
                  typeof role.end !== 'string' ? role.end.label : role.end
                }`}
              >
                <time
                  dateTime={
                    typeof role.start === 'string'
                      ? role.start
                      : role.start.dateTime.toString()
                  }
                >
                  {typeof role.start === 'string'
                    ? role.start
                    : role.start.label}
                </time>{' '}
                <span aria-hidden="true">- </span>
                <time
                  dateTime={
                    typeof role.end === 'string'
                      ? role.end
                      : role.end.dateTime.toString()
                  }
                >
                  {typeof role.end === 'string' ? role.end : role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        onClick={() => alert('Coming Soon')}
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home({ articles }: any) {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hello there 👋 nice to meet you.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Caleb aka Jax, an indie software developer based in the US.
            I&apos;m the founder of Sinuio, an agency building SASS products and
            helping companies automate their business processes.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/Jaxenormus"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/Jaxenormus"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
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
                Take a look at what I&apos;ve been up to:
              </h1>
              <h1 className="text-2xl text-[28px] sm:hidden">
                Highlighted Projects:
              </h1>
            </span>
            <div className="flex flex-col gap-16">
              {articles.map((article: any) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Contact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getFeaturedProjects()).map(
        ({ component, ...meta }: any) => meta
      ),
    },
  }
}
