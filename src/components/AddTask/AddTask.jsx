import React from 'react';

function AddTask({ name }) {
  return (
    <div className='border-solid border-1 border-black bg-neutral-700 mt-4 mb-[10px] ml-[35px] p-2 rounded-full w-60 h-16 text-[30px] text-center shadow-2xl text-white'>
      {name}
    </div>
  );
}

export default AddTask;
