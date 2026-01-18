import Homepage from '../components/Homepage'
import { benben } from '../data/benben.en'

export default function Home({ data }) {
  return <Homepage data={data} lang="en" />
}

export const getStaticProps = async () => {
  return {
    props: {
      data: benben,
    },
  }
}
