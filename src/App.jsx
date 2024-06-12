import './App.css'
import Rightside from './Components/Rightside'
import Sidebar from './Components/Sidebar'
import 'typeface-inter';
function App() {
  return (
    <>
      <div className='w-full flex font-sans'>
        <div className='w-[20%]'><Sidebar /></div>
        <div className='w-[80%]'><Rightside /></div>
      </div>
     
    </>
  )
}

export default App
