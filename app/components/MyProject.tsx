import RightProjectDetail from './RightProjectDetail';
import LeftProjectDetail from './LeftProjectDetail';
import TravelImage from '../../public/travel.jpg';
import BasketballImage from '../../public/basketball.jpg';
import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  backgroundImg: StaticImageData;
  subtitle: string;
  description: string;
  tech: string[]
}

const MyProject = (props: Props) => {

  return (
    <div className='max-w-[850px] my-20 lg:my-0 w-full flex flex-col justify-center gap-4'>
      <div className='flex items-center'>
        <h5>02.</h5>
        <h4>Moje Projekty</h4>
      </div>
      <div className='flex flex-col gap-20'>
        <RightProjectDetail
          title='Travel App'
          backgroundImg={TravelImage}
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing.'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut alias molestiae quia consectetur aperiam corporis iste. Iure dolores eligendi provident ipsum mollitia dolorem?'
          tech={['React Js', 'Tailwind']}
        />
        <LeftProjectDetail 
          title='Django Blog'
          backgroundImg={BasketballImage}
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing.'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut alias molestiae quia consectetur aperiam corporis iste. Iure dolores eligendi provident ipsum mollitia dolorem?'
          tech={['Django', 'Python', 'PostgreSQl', 'Bootstrap']}
        />
      </div>
    </div>
  )
}

export default MyProject