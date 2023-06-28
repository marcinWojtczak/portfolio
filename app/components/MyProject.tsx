'use client'
import RightProjectDetail from './RightProjectDetail';
import LeftProjectDetail from './LeftProjectDetail';
import OthersProject from './OthersProject'
import TravelImage from '../../public/travel.jpg'
import BasketballImage from '../../public/basketball.jpg';
import CryptoImage from '../../public/crypto.jpg';
import { StaticImageData } from 'next/image';
import React,{ useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, } from 'framer-motion';

interface Props {
  title: string;
  backgroundImg: StaticImageData;
  subtitle: string;
  description: React.ReactNode;
  tech: string[];
  link: string;
}



const MyProject: React.FC = () => {

  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const animation = useAnimation();

  useEffect(() => {
    console.log(isInView)
    if(isInView){
      animation.start("visible");
    }
  },[isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={{
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0},
      }}
      transition={{ duration: 0.2, delay: 0.2, bounce: 0.2, type: 'spring' }}
      className='max-w-[850px] xl:max-w-[950px] my-20 lg:my-0 w-full flex flex-col justify-center gap-10 scroll-mt-6' id='projects'>
      <div className='flex items-center gap-2'>
        <h5 className='font-mono tracking-wider text-[#00DDFF]'>02.</h5>
        <h2>Moje Projekty</h2>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <div className='flex flex-col gap-20'>
        <RightProjectDetail
          title='Travel App'
          backgroundImg={TravelImage}
          subtitle='Aplikacja w której można sprawdzić atrakcje turystyczne, lokale gastonomiczne, hotele, oraz pogodę w wybranej przez nas lokalizacji.'
          description='W mojej aplikacji wykorzystałem kilka zewnętrznych API, aby zapewnić dodatkowe funkcjonalności takie jak: wyświetlania interaktywnej mapy na stronie, pobierania danych na temat atrakcji turystycznych, lokali gastronomicznych i hoteli oraz do wyświetlania informacji o pogodzie w danej lokalizacji'
          tech={['JavaScript', 'React Js', 'RTK Query', 'Tailwind']}
          link='https://github.com/marcinWojtczak/travel-places'
        />
        <LeftProjectDetail 
          title='NBA Blog'
          backgroundImg={BasketballImage}
          subtitle='Blog o tematyce NBA'
          description='Aplikacja oferuje kilka funkcjonalności takich jak: rejestracja konta użytkownika, tworzenie, edycja i usuwanie postów, dodawanie komentarzy. Aplikacja umożliwia również dodawanie filmów do postów oraz wyszukiwania postów na podstawie tytułu lub zawartości.'
          tech={['Django', 'Python', 'PostgreSQl', 'Bootstrap']}
          link='https://github.com/marcinWojtczak/django-nbablog'
        />
        <RightProjectDetail 
          title='Crypto App'
          backgroundImg={CryptoImage}
          subtitle='Aplikacja Poświęcona Tematyce Krypto Walut'
          description='Aplikacja dostarcza użytkownikom aktualne dane z rynku kryptowalut. Wyświetla aktualne cen, dostarcza również użytkownikom szczegółowe informacje na temat poszczególnych kryptowalut oraz wykresy cen dla wybranych kryptowalut, umożliwiając użytkownikom analizę zmian cen w różnych okresach czasu'
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
          description='Przedstawia umiejętności i doświadczenia zawodoweg oraz projekty realizowane w różnych technologiach. Portfolio zawiera sekcję kontaktową, która zawiera dane kontaktowe, takie jak adres e-mail, numer telefonu lub linki do profili na platformach społecznościowych. '
          link='https://github.com/marcinWojtczak/portfolio'
          tech={['JavaScript', 'Next Js', 'Tailwind']}
        />
        <OthersProject 
          title='Camper-rental'
          description='Strona internetowa wypożyczalni camperów to platforma, która umożliwia użytkownikom wynajem i rezerwację kamperów na różne okazje, takie jak podróże, wypady na kemping, festiwale czy wakacje rodzinne..'
          link='https://github.com/marcinWojtczak/camper-rental'
          tech={['JavaScript', 'React Js']}
        />
        <OthersProject 
          title='Exercise-note'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates non nesciunt in laboriosam dolore esse iusto sunt quidem minima, doloribus quis nulla sapiente debitis.'
          link='https://github.com/marcinWojtczak/exercise-note'
          tech={['JavaScript', 'TypeScriot', 'Css']}
        />
      </div>
    </motion.div>
  )
}

export default MyProject