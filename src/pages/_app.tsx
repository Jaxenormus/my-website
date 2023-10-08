import '@/src/styles/tailwind.css'
import 'focus-visible'

import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { useEffect, useRef } from 'react'

import Footer from '@/src/components/Footer'
import { Header } from '@/src/components/Header'

function usePrevious(value: any) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: any) {
  const previousPathname = usePrevious(router.pathname)
  return (
    <>
      <Script src="https://unpkg.com/@botpoison/browser" async />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <DefaultSeo
          titleTemplate="Caleb - %s"
          title="Indie Software Developer"
          description="I'm Caleb, an indie software developer based in the US. I'm the founder of Sinuio, an agency building SASS products and helping companies automate their business processes."
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.jaxenorm.us',
            siteName: 'Caleb - Indie Software Developer',
          }}
          twitter={{ handle: '@Jaxenormus' }}
        />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
