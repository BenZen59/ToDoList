import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddTask from '../AddTask/AddTask';

function FormToDo() {
  const [listTask, setListTask] = useState([]);
  console.log(listTask);

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('listTask'));
    if (newList) setListTask(newList);
  }, []);

  useEffect(() => {
    localStorage.setItem('listTask', JSON.stringify(listTask));
  }, [listTask]);

  const addTask = (event) => {
    event.preventDefault();
    const nametask = document.getElementById('name').value;
    setListTask((oldArray) => [...oldArray, { name: nametask }]);
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-pink-500 h-[1080px] pt-[50px]'>
      <div className='bg-gray-200 w-[330px] p-2 ml-[40%] rounded-lg shadow-2xl'>
        <p className='text-[30px] font-bold text-center'>To Do List</p>
        <form className='m-4'>
          <label className='text-[18px] font-bold ml-[20px]'>
            Nom de la tâche
            <br />
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Add task'
              className='border-solid border-2 border-black font-normal pl-1 ml-[20px]	'
            />
          </label>

          <button
            className='border-solid border-2 border-black mt-4 p-[0.2px] w-[30px] ml-2 bg-black text-white'
            onClick={addTask}
          >
            +
          </button>
        </form>
        {listTask.map((event) => (
          <AddTask name={event.name} key={v4()} />
        ))}
      </div>
    </div>
  );
}

export default FormToDo;
