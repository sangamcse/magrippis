import React from 'react'
import { NextSeo } from 'next-seo'

import { frontMatter as mdxInNext } from '../../pages/blog/2020/how-to-setup-MDX-in-Nextjs.mdx'
import { PostSnippet } from './PostSnippet'

const TITLE = 'Blog | jmagrippis'
const DESCRIPTION =
  'Johnny’s thoughts on software engineering, travelling, photography and many more subjects, in written form!'

const pages = [mdxInNext]

export const Blog = () => (
  <>
    <NextSeo title={TITLE} description={DESCRIPTION} />
    <div className="text-lg max-w-readability-lg flex-grow">
      <h1 className="text-4xl p-4">Blog</h1>
      <ul className="mb-8">
        {pages.map((page) => (
          <PostSnippet key={page.__resourcePath} {...page} />
        ))}
      </ul>
      <a
        href="https://medium.com/@jmagrippis"
        className="block text-center bg-gray-100 p-4 rounded shadow-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find more posts over at{' '}
        <span className="underline text-purple-600">Medium</span>
      </a>
    </div>
  </>
)