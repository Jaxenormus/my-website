import { NextSeo } from 'next-seo'
import {
  createElement,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

import Button from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'

const Input = ({
  variant,
  ...props
}: {
  variant: 'textarea' | 'input'
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return createElement(variant, {
    className:
      'min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm',
    ...props,
  })
}

const ContactPage: React.FC = () => {
  return (
    <>
      <NextSeo title="Contact" />
      <SimpleLayout
        title="I'm excited to learn about your project. Ready to get started?"
        intro="Im so glad you are interested in working with me. I will get back to you as soon as possible."
      >
        <form
          id="contact"
          action={`https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID}`}
          data-botpoison-public-key={
            process.env.NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY
          }
        >
          <input type="hidden" name="_append" value="false" />
          <input
            type="hidden"
            name="_redirect"
            value={`${process.env.NEXT_PUBLIC_SITE_URL}/thanks`}
          />
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
                variant="input"
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                required
              />
              <Input
                variant="input"
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                required
              />
            </div>
            <Input
              variant="textarea"
              placeholder="Details"
              aria-label="Details"
              name="details"
              required
              rows={5}
            />
            <Button type="submit" className="flex-none">
              Submit
            </Button>
          </div>
        </form>
      </SimpleLayout>
    </>
  )
}

export default ContactPage
