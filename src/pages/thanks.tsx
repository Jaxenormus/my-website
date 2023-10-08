import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import Container from '@/src/components/Container'
import { ArrowLeftIcon } from '@/src/components/Icons'

type ThanksPageProps = { url: string }

const ThanksPage: React.FC<ThanksPageProps> = ({ url }) => {
  const router = useRouter()
  return (
    <>
      <NextSeo title="Message Sent" />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl space-y-8">
            <button
              type="button"
              onClick={() => router.push('/')}
              aria-label="Go back to home"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              🎉 Message has been sent!
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Thank you so much for your interest in working with me. I will get
              back to you as soon as possible. I promise. In the meantime enjoy
              this random picture of a capybara.
            </p>
            <Image width={768} height={500} src={url} alt="Capybara" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ThanksPage

export async function getServerSideProps() {
  const data = await fetch('https://api.animality.xyz/img/capybara')
  const json = await data.json()
  const url = json.link
  return { props: { url } }
}
