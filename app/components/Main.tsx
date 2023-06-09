import Link  from 'next/link'

const Main = () => {
  return (
    <div className='lg:h-screen px-0 md:px-8 py-12 sm:py-20 w-[85%] sm:w-[75%] md:w-[68%] lg:w-[45%]'>
      <div className='text-left flex flex-col gap-4'>
        <h6>Cześć, mam na imię</h6>
        <h1>Marcin Wojtczak.</h1>
        <h2>Jestem początkującym developerem.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, optio! Delectus consequatur quas commodi repudiandae facere accusantium cum similique et deleniti voluptatibus facilis veniam, odit minima.
        </p>
        <div className='w-fit px-8 py-2 border-2 border-[#17899b] rounded-sm shadow-xl hover:bg-[#17899b] '>
          <Link href='project'><h6>Moje Projekty</h6></Link>
        </div>
      </div>
    </div>
  )
}

export default Main