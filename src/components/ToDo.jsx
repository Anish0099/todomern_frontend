import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { motion } from 'framer-motion';
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { LuDownload } from "react-icons/lu";


const ToDo = ({ text, reference, setUpdateUi, setPopUpContent, id, setShowPopup }) => {

    const deleteTodo = () => {
        axios.delete(`${baseUrl}/delete/${id}`).then(res => {
            console.log(res.data);
            setUpdateUi((prevState) => !prevState)
        })
    }

    const updateTodo = () => {
        setPopUpContent({ text, id })
        setShowPopup(true)
    }
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] py-10 px-8 bg-zinc-900/90 text-white p-5 overflow-hidden'>
            <div className='flex items-center justify-between'>
                <FaRegFileAlt />
                <span className='w-7 h-7 bg-zinc-600 text-whiet rounded-full flex items-center justify-center'>

                    <LuDownload className='' onClick={deleteTodo} />

                </span>
            </div>
            <p className='mt-5 text-sm font-semibold leading-tight'>{text}</p>
            <div className='footer absolute bottom-0 w-full  left-0 '>
                <div className='flex items-center justify-between mb-3 px-8 py-3 '>
                    <h5>.9mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>

                        <IoIosClose className='' onClick={deleteTodo} />

                    </span>
                </div>
                <div onClick={updateTodo} className={`tag w-full py-4  bg-green-600 flex items-center gap-3 justify-center`} >
                    <h3 className='text-sm font-semibold'>Update</h3>

                </div>


            </div>
        </motion.div >
    )
}

export default ToDo

{/* <div className='toDo'>
            {text}
            <div className='icons'>
                <MdEdit onClick={updateTodo} className='icon' />
                <MdDelete className='icon' onClick={deleteTodo} />
            </div>
        </div> */}