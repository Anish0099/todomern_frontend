import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IoIosClose } from 'react-icons/io';

const Popup = ({ setShowPopup, setUpdateUi, popUpContent }) => {
    const [input, setInput] = useState(popUpContent.text);

    const updateTodo = () => {
        axios.put(`${baseUrl}/update/${popUpContent.id}`, { toDo: input }).then((res) => {
            console.log(res.data);
            setUpdateUi((prevState) => !prevState);
            setShowPopup(false)
        })
    }
    return (
        <div className='backdrop'>
            <div className='popup bg-zinc-700 rounded-full'>
                <div className='flex justify-center  items-center pt-4 '>


                </div>
                <div className="popup__input_holder ">
                    <input className='bg-zinc-900/90 text-white font-bold rounded-3xl text-sm' value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Update ToDo...' />
                    <button className='bg-yellow-600 rounded-3xl text-sm font-bold' onClick={updateTodo}>Update</button>
                    <span className='w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center'>

                        <IoIosClose onClick={() => setShowPopup(false)} />

                    </span>

                </div>
            </div>
        </div>
    )
}

export default Popup