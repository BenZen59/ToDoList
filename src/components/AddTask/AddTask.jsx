import React from 'react';
import { FcEmptyTrash } from 'react-icons/fc';

function AddTask({ name, removeTask, key }) {
  return (
    <div className='border-solid border-1 border-black bg-neutral-700 mt-4 mb-[10px] p-2 rounded-lg w-90 h-16 text-[30px]  shadow-2xl text-white flex'>
      <h1 className='overflow-hidden w-[250px]'>{name}</h1>
      <button className='ml-[90px]' onClick={removeTask}>
        <FcEmptyTrash />
      </button>
    </div>
  );
}

export default AddTask;
