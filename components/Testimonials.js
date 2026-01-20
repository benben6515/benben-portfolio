import styled from '@emotion/styled'
import TextWithMore from './TextWithMore'

const testimonials = [
  {
    avatar: '/images/person/classcipe-logo.png',
    name: 'Xavier Xue',
    title: 'Diretor @ Classcipe',
    description: 'He demonstrated outstanding performance during employment period with no adverse records.',
  },
  {
    avatar: '/images/person/enya-yang.png',
    name: 'Enya Yang',
    title: 'UI/UX Designer @ Classcipe',
    description:
      'Benben is a front-end developer I truly enjoyed working with. We collaborated closely on projects, frequently exchanging ideas and feedback, which helped the work progress smoothly. \n\nHe is thoughtful, responsive, and always willing to explore better solutions. Whenever I shared design feedback, Benben responded quickly and often proposed improvements from a technical perspective. His attitude and professionalism made our collaboration both productive and comfortable.',
  },
  // {
  //   avatar: 'https://i.pravatar.cc/150?img=52',
  //   name: 'Mike Chen',
  //   title: 'CTO @ Startup',
  //   description:
  //     'Benben helped us build our product from scratch. His expertise in React and Vue made our development process smooth and efficient.',
  // },
]

const Section = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  background: rgba(0, 0, 0, 0.5);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const Name = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin: 0;
`

const Role = styled.p`
  color: #7d7;
  font-size: 0.85rem;
  margin: 0;
`

function Testimonials({ lang = 'en' }) {
  const title = lang === 'tw' ? '他們怎麼說' : 'What People Say'

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <CardGrid>
          {testimonials.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar src={item.avatar} alt={item.name} />
                <Info>
                  <Name>{item.name}</Name>
                  <Role>{item.title}</Role>
                </Info>
              </CardHeader>
              <TextWithMore text={item.description} author={item.name} moreText={lang === 'tw' ? '更多' : 'More'} />
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}

export default Testimonials
