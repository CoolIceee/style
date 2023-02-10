import bgImg from '../../../assets/sneakers.png'

import { Basket } from './components/Basket'
import { Heart } from './components/Heart'
import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
export const Header: React.FC = () => {
  return (
    <>
      <div className='h-20 max-w-full object-cover rounded-b-3xl' style={{ backgroundImage: `url(${bgImg as string})` }}></div>
      <div className='flex h-auto px-9 max-w-full border-b-2 border-blue-100 '>
        <nav className='justify-between w-50 mx-auto self-center  h-full sm:justify-between xl:flex xl:w-full  xl:h-20 xl:mx-0 sm:mx-0 sm:w-full sm:flex sm:h-20'>
          <ul className='flex w-[70%] h-full pt-2 mx-auto  xl:w-[35%]'>
            <li className='px-2 flex self-center h-12  mx-auto xl:w-[35%] xl:mx-0 sm:mx-0'>
              <Logo />
            </li>
          </ul>
          <ul className='flex self-center  w-[80%] py-3 h-full mx-auto xl:mx-0 xl:w-[30%] sm:mx-0 sm:w-[30%]'>
            <li className='w-full px-2 flex self-center mx-auto xl:mx-0 sm:mx-0'>
              <Search />
            </li>
          </ul>
          <ul className='flex absolute bottom-0 left-0 px-10 justify-between h-20 w-full xl:flex-row xl:p-0 xl:self-center xl:static xl:justify-end xl:w-[35%] xl:h-full sm:absolute sm:w-20 sm:flex-col sm:bottom-24 sm:h-auto sm:px-6'>
            <li className='px-2 flex self-center w-12 sm:py-2'>
              <Profile />
            </li>
            <li className='px-2 flex self-center w-12 sm:py-2'>
              <Heart />
            </li>
            <li className='px-2 flex self-center w-12 sm:py-2'>
              <Basket />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
