import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className="w-10 rounded-full">
            <img src="./bg-3.jpg" alt="Tailwind CSS chat bubble component" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>
            Hi ! What's Up?
      </div>
      <div className='chat-footer text-xs flex gap-1 items-center text-gray-600'>12:42</div>
    </div>
  )
}

export default Message;
