function Navbar() {
  return (
    <nav className='bg-white shadow-md w-full h-20 px-6 grid grid-cols-4 sticky'>
      <div className='nav-left h-full flex items-center'>
        <img
          src='logo.png'
          alt='logo'
          className='w-12 h-12 rounded-full hidden sm:block'
        />
        <h3 className='text-blue-500 font-bold text-xl sm:hidden'>
          Q Social
        </h3>
        <div className='flex items-center ml-2 p-2 bg-gray-100 rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <input
            type='text'
            placeholder='Tìm kiếm trên QSocial'
            className='bg-gray-100 outline-none border-0 focus:outline-none px-6 text-lg'
          />
        </div>
      </div>
      <div className='nav-center col-span-2 flex items-center justify-between px-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9 text-blue-600'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
          />
        </svg>
      </div>
      <div className='nav-right flex items-center justify-evenly'>
        <div className='flex items-center hover:bg-gray-100 cursor-pointer transition-colors p-2 rounded-full'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-10 h-10 rounded-full mr-2'
          />
          <p className='text-lg text-gray-600 font-semibold'>
            Quang
          </p>
        </div>

        <div className='flex w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 m-auto text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <div className='flex w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 m-auto text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
          </svg>
        </div>

        <div className='flex w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 m-auto text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
