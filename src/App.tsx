import './App.css'
import Mypic from './assets/images/mypic.jpg'
function App() {

  return (

  <>
  <div className='text-white text-center my-20'>
  <div className=' flex  justify-center  '>
      <div className='w-fit p-10 bg-gray-900 rounded-2xl border-lime-400 border-2 shadow-lg shadow-lime-950'>
        <div className='flex items-center justify-center'>
          <img className='w-24  rounded-full' src={Mypic} alt="" />
        </div>
        <div>
          <h1 className='mt-3 text-2xl font-bold' >M.Arshan Ashraf</h1>
          <h2 className=' text-lg font-bold text-lime-400'>Karachi, Pakistan</h2>
          <h2 className='mt-3 text-lg font-semibold'>"Web Developer and Avid Reader"</h2>
        </div>
        <div className='flex flex-col mt-3'>
          <a href="https://github.com/Arshanashraf" target='_blank' className='bg-gray-700 text-lg p-2 rounded-lg mt-2 font-bold hover:bg-lime-400 hover:text-black'>GitHub</a>
          <a href="https://www.frontendmentor.io/profile/Arshanashraf" target='_blank' className='bg-gray-700 text-lg p-2 rounded-lg mt-3 font-bold hover:bg-lime-400 hover:text-black'>Frontend Mentor</a>
          <a href="https://www.linkedin.com/in/arshan-ashraf-650124288/" target='_blank' className='bg-gray-700 text-lg p-2 rounded-lg mt-3 font-bold hover:bg-lime-400 hover:text-black'>LinkedIn</a>
          <a href="" className='bg-gray-700 text-lg p-2 rounded-lg mt-3 font-bold hover:bg-lime-400 hover:text-black'>Twitter</a>
          <a href="" className='bg-gray-700 text-lg p-2 rounded-lg mt-3 font-bold hover:bg-lime-400 hover:text-black'>Instagram</a>
        </div>
      </div>
      </div>
      <div className="mt-6">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='underline text-lime-400'>Frontend Mentor</a>. 
        Coded by <a href="#" className='underline text-lime-400'>Arshan</a>.
      </div>
  </div>
    
    </>
  )
}

export default App
