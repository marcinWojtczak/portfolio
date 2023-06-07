import Link from "next/link";

const Menu = () => {

  return (
    <nav className='h-full w-full flex md:flex-row flex-col items-center justify-center gap-6'>
      <Link href='/'><p className='font-semibold'>O mnie</p></Link>
      <Link href='projects'><p className='font-semibold'>Moje Projekty</p></Link>
      <Link href='/'><p className='font-semibold'>Kontakt</p></Link>
    </nav>
  )
}

export default Menu