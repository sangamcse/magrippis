import { NextSeo } from 'next-seo'

import { getSeoProps } from '../getSeoProps'

import { Body } from './Body'

const title = 'Milestones | jmagrippis'
const description = 'Curated activity feed of what Johnny has been up to.'

const Milestones = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default Milestones
