import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");

    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() =>{
            dispatch(addMessage({
                name:generateRandomName(),
                message: makeRandomMessage(20) + " 🚀",
            }));
        },2000);
        return () => clearInterval(i);
    },[]);
  return (
    <div>
        <div className='w-[400px] h-[500px] bg-gray-100 dark:bg-gray-800 overflow-y-auto flex flex-col-reverse border rounded-md ms-6'>
            {chatMessages.map((c,i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />

            ))}
        
        </div> 
        <form className='ms-6 border' onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "You",
                message: liveMessage,
            }));
            setLiveMessage("");
        }}>
            <input type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} placeholder='Chat...' className='w-80 border m-2 p-2 px-5 rounded-md'/>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M5 12 3 3l19 9-19 9 2-9zm.82.93-1.4 6.29L19.66 12 4.42 4.78l1.4 6.29L17 12l-11.18.93z" fill-rule="evenodd"></path></svg></button>
        </form>

    </div>
  )
}

export default LiveChat;
