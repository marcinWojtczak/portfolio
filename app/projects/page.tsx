import fetchRepos from "../../lib/getAllRepos";
import Link from 'next/link'
import Image from 'next/image';

const Projects = () => {
  
  return (
    <div className='p-20 w-full bg-[red] flex flex-col items-center'>
      <h1>Moje Projekty</h1>
      <div className='flex p-10 gap-4 max-w-[60%]'>
        <Image 
          src='/camper.jpg'
          width={300}
          height={300}
          alt='camper picture'
        />
        <div className='flex flex-col gap-4 w-full'>
          <h3>Camper Rental</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo, ea totam nesciunt accusamus ratione expedita tempora vero maxime, rerum unde, inventore modi laboriosam pariatur facere optio eaque. Quis, possimus.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects