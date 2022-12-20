import ArticleCard from '@/components/ArticleCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function ThanksPage({ url }: any) {
  return (
    <>
      <NextSeo title="Message Sent" />
      <SimpleLayout
        title="🎉 Message has been sent!"
        intro="Thank you so much for sending me a message. I will get back to you as soon as possible. I promise. In the meantime enjoy this random picture of a capybara."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <Image width={768} height={500} src={url} alt="Capybara" />
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch('https://api.animality.xyz/img/capybara')
  const json = await data.json()
  const url = json.link
  return { props: { url } }
}
