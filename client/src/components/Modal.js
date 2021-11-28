function Modal({handleToggle}) {
  return (
    <div className='select-none'>
      <div className='modal fixed inset-0 bg-gray-200 opacity-70'></div>
      <div
        className='inner w-[32%] bg-white h-[80%] 
        shadow-lg absolute top-1/2 -translate-y-1/2 
        -translate-x-1/2 left-1/2 z-10 rounded-lg 
        flex flex-col p-4'
      >
        <div
          className='modal-head flex items-center 
          justify-center relative pb-4 border-b 
          border-gray-300'
        >
          <h3 className='font-bold text-xl'>
            Tạo bài viết
          </h3>
          <div
            className='absolute right-1 top-0 cursor-pointer w-9 h-9 
          bg-gray-200 hover:bg-gray-300 rounded-full flex'
            onClick={handleToggle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 m-auto text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
        <div className='modal-name'>
          <li className='flex items-center mb-1 py-4'>
            <img
              src='avatar.jpg'
              alt='avatar'
              className='w-8 h-8 rounded-full mr-2'
            />
            <p className='text-gray-800 font-semibold'>
              Quang
            </p>
          </li>
        </div>
        <div className='modal-text rounded-lg border border-gray-300 overflow-hidden h-1/2 bg-gray-100'>
          <textarea
            className='w-full h-full outline-none p-4 resize-none bg-gray-50'
            placeholder='Bạn đang nghĩ gì thế ?'
          ></textarea>
        </div>
        <button>Đăng</button>
      </div>
    </div>
  )
}

export default Modal
