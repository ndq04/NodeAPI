function Content({handleToggle}) {
  return (
    <div className='content col-span-2 h-[calc(100vh-60px)] py-4 overflow-y-scroll'>
      <div className='status w-[90%] m-auto bg-blue-300 h-[300px]'>
        <button onClick={handleToggle}>Open</button>
      </div>
    </div>
  )
}

export default Content
