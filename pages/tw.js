import Homepage from '../components/Homepage'
import { benben } from '../data/benben.tw'

export default function Home({ data }) {
  return <Homepage data={data} lang="tw" />
}

export const getStaticProps = async () => {
  return {
    props: {
      data: benben,
    },
  }
}
