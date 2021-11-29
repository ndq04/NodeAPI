import {Like} from '../data/Like'
import {Users} from './../data/TestData'

function Post({post}) {
  return (
    <div className='post w-[80%] mx-auto my-5 bg-white shadow-sm rounded-xl p-3'>
      <div className='post-heading flex items-center justify-between'>
        <div className='post-heading--left flex items-center'>
          <img
            src={
              Users.filter(
                (user) => user.id === post.userId
              )[0].avatar
            }
            alt='avatar'
            className='w-11 h-11 rounded-full mr-2'
          />
          <div>
            <p>
              {
                Users.filter(
                  (user) => user.id === post.userId
                )[0].name
              }
            </p>
            <div className='flex text-gray-500 text-[13px] font-semibold'>
              <span>{post.time}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='post-heading--right cursor-pointer w-10 h-10 rounded-full hover:bg-gray-100 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-600 m-auto'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
          </svg>
        </div>
      </div>
      <div className='post-body my-3'>
        <p>{post.desc}</p>
        <img
          src={post.photo}
          alt='img'
          className='w-full mt-3'
        />
      </div>
      <div className='post-footer flex items-center'>
        {Like.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt='*'
            className='w-6 h-6 mr-2'
          />
        ))}

        <p className='text-gray-600 text-sm'>
          {post.like} người thích
        </p>
      </div>
    </div>
  )
}

export default Post
