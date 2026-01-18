import ResumeProfile from '../../components/ResumeProfile'
import { benben } from '../../data/benben.en'

export default function ResumePage({ data }) {
  return <ResumeProfile data={data} lang="en" />
}

export const getStaticProps = async () => {
  return {
    props: {
      data: benben,
    },
  }
}
