import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Rightbar from '../../components/Rightbar'
import Sidebar from '../../components/Sidebar'
import {useState} from 'react'
import Modal from '../../components/Modal'

function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-4 bg-[#f0f2f5] select-none px-2'>
        <Sidebar />
        <Content handleToggle={handleToggle} />
        <Rightbar />
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleToggle={handleToggle}
        />
      )}
    </>
  )
}

export default Home
