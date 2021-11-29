import Post from './Post'
import Status from './Status'
import {Posts} from '../data/TestData'

function Content({handleToggle}) {
  return (
    <div className='content col-span-2 h-[calc(100vh-60px)] py-4 overflow-y-scroll'>
      <Status handleToggle={handleToggle} />
      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Content
