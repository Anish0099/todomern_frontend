import React, { useEffect, useState, useRef } from 'react'
import ToDo from './components/ToDo'
import { baseUrl } from './utils/constants'
import axios from 'axios'
import Popup from './components/Popup'


const App = () => {
  const ref = useRef(null)

  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState("")
  const [updateUi, setUpdateUi] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popUpContent, setPopUpContent] = useState({})




  useEffect(() => {
    axios.get(`${baseUrl}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err))
  }, [updateUi]);

  const saveToDo = () => {
    axios.post(`${baseUrl}/save`, { toDo: input }).then(res => {
      console.log(res.data);
      setUpdateUi((prevState) => !prevState)
      setInput("");
    })
      .catch((err) => console.log(err))

  }
  return (
    <main className='w-full h-screen bg-zinc-800 relative'>
      <div className='w-full h-screen fixed z-[2]'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-600 text-xl items-center'>Documents.</div>
        <h1 className='text-[13vw] tracking-tighter absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] leading-none font-semibold text-zinc-900'>Docs.</h1>
      </div>
      <div ref={ref} className='w-full h-full flex gap-10  fixed z-[3] top-0 left-0 flex-wrap p-5'>
        <div className=" mx-auto w-full ">


          < div className="input_holder relative flex-shrink-0 w-80 min-h-740 rounded-[45px] py-10 px-8 bg-zinc-900/90 text-white p-5 overflow-hidden" >
            <input className='bg-zinc-600 rounded-full font-bold text-sm' value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Add a ToDo...' />
            <button className='bg-[#525CEB] rounded-full font-semibold text-white' onClick={saveToDo}>Add..</button>
          </div >

          <div className="list">
            {
              toDos.map(el => <ToDo reference={ref} key={el._id} text={el.toDo} id={el._id} setUpdateUi={setUpdateUi} setShowPopup={setShowPopup} setPopUpContent={setPopUpContent} />)
            }
          </div>
        </div >
        {showPopup && <Popup setShowPopup={setShowPopup} setUpdateUi={setUpdateUi} popUpContent={popUpContent} />}


      </div>


    </main >
  )
}

export default App

{/* <div className="container">
        <h1 className='title'>ToDo App</h1>

        < div className="input_holder" >
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Add a ToDo...' />
          <button onClick={saveToDo}>Add</button>
        </div >

        <div className="list">
          {
            toDos.map(el => <ToDo key={el._id} text={el.toDo} id={el._id} setUpdateUi={setUpdateUi} setShowPopup={setShowPopup} setPopUpContent={setPopUpContent} />)
          }
        </div>
      </div >
      {showPopup && <Popup setShowPopup={setShowPopup} setUpdateUi={setUpdateUi} popUpContent={popUpContent} />} */}