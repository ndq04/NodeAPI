import {RightbarPR} from './../data/Rightbar'

function Rightbar() {
  return (
    <div className='rightbar h-[calc(100vh-60px)] py-4 overflow-y-scroll'>
      <h3 className='mb-1 px-2 py-1 text-gray-500 font-semibold'>
        Được tài trợ
      </h3>
      <ul className='border-b border-gray-300 pb-3 pr-3'>
        {RightbarPR.map((rightbar) => (
          <li key={rightbar.id}>
            <a
              href={rightbar.value.url}
              target='blank'
              className='flex items-center mb-1 px-2 py-1.5 rounded-lg hover:bg-gray-200 cursor-pointer'
            >
              <img
                src={rightbar.value.img}
                alt={rightbar.value.title}
                className='w-[130px] h-[130px] rounded-lg mr-4'
              />
              <div>
                <p className='text-gray-800 font-semibold'>
                  {rightbar.value.title}
                </p>
                <p className='text-gray-400 text-sm'>
                  {rightbar.value.subTitle}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <h3 className='mb-1 px-2 pt-3 pb-1 text-gray-500 font-semibold'>
        Người liên hệ
      </h3>
      <ul>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
        <li className='flex items-center mb-1 px-2 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer'>
          <img
            src='avatar.jpg'
            alt='avatar'
            className='w-8 h-8 rounded-full mr-2'
          />
          <p className='text-gray-800 font-semibold'>
            Quang
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Rightbar
