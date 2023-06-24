import RightProjectDetail from './RightProjectDetail';
import LeftProjectDetail from './LeftProjectDetail';
import OthersProject from './OthersPorject'
import TravelImage from '../../public/travel.jpg'
import BasketballImage from '../../public/basketball.jpg';
import CryptoImage from '../../public/crypto.jpg';
import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  backgroundImg: StaticImageData;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
}

const MyProject = () => {

  return (
    <div className='max-w-[850px] my-20 lg:my-0 w-full flex flex-col justify-center gap-4'>
      <div className='flex items-center gap-2'>
        <h5 className='font-mono tracking-wider text-[#00DDFF]'>02.</h5>
        <h2>Moje Projekty</h2>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <div className='flex flex-col gap-20'>
        <RightProjectDetail
          title='Travel App'
          backgroundImg={TravelImage}
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing.'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut alias molestiae quia consectetur aperiam corporis iste. Iure dolores eligendi provident ipsum mollitia dolorem?'
          tech={['JavaScript', 'React Js', 'RTK Query', 'Tailwind']}
          link='https://github.com/marcinWojtczak/travel-places'
        />
        <LeftProjectDetail 
          title='Django Blog'
          backgroundImg={BasketballImage}
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing.'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut alias molestiae quia consectetur aperiam corporis iste. Iure dolores eligendi provident ipsum mollitia dolorem?'
          tech={['Django', 'Python', 'PostgreSQl', 'Bootstrap']}
          link='https://github.com/marcinWojtczak/django-nbablog'
        />
        <RightProjectDetail 
          title='Crypto App'
          backgroundImg={CryptoImage}
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing.'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut alias molestiae quia consectetur aperiam corporis iste. Iure dolores eligendi provident ipsum mollitia dolorem?'
          tech={['JavaScript', 'React Js', 'CSS',]}
          link='https://github.com/marcinWojtczak/cryptocurrency-website'
        />
      </div>
      <div className='mt-20 mb-4 flex items-center gap-2'>
        <hr className='border-[#17899b] grow'></hr>
        <h4 className='text-center'>Inne Projekt</h4>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <div className='flex flex-wrap gap-4 w-full flex-col lg:flex-row'>
        <OthersProject 
          title='Portfolio'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis ut.'
          link='https://github.com/marcinWojtczak/portfolio'
          tech={['JavaScript', 'Next Js', 'Tailwind']}
        />
        <OthersProject 
          title='Camper-rental'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima.'
          link='https://github.com/marcinWojtczak/portfolio'
          tech={['JavaScript', 'React Js']}
        />
        <OthersProject 
          title='Exercise-note'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis.'
          link='https://github.com/marcinWojtczak/portfolio'
          tech={['JavaScript', 'TypeScriot', 'Css']}
        />
        <OthersProject 
          title='Camper-rental'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima.'
          link='https://github.com/marcinWojtczak/portfolio'
          tech={['JavaScript', 'React Js']}
        />
      </div>
    </div>
  )
}

export default MyProject