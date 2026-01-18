import ResumeProfile from '../../components/ResumeProfile'
import { benben } from '../../data/benben.tw'

export default function ResumePage({ data }) {
  return <ResumeProfile data={data} lang="tw" />
}

export const getStaticProps = async () => {
  return {
    props: {
      data: benben,
    },
  }
}
