import React from 'react';
import { useState, useEffect } from 'react';

function FormToDo() {
  const [task, setTask] = useState([]);
  const [listTask, setListTask] = useState([]);
  console.log(listTask);

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('listTask'));
    if (newList) setListTask(newList);
  }, []);

  useEffect(() => {
    localStorage.setItem('listTask', JSON.stringify(listTask));
  }, [listTask]);

  const addTask = () => {
    setListTask((oldArray) => [...oldArray, { name: task }]);
  };

  return (
    <>
      <form className='m-4'>
        <label>
          Nom de la tâche:
          <br />
          <input
            type='text'
            name='name'
            placeholder='Add task'
            className='border-solid border-2 border-black'
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </label>
        <br />
        <button
          className='border-solid border-2 border-black mt-4 p-2 rounded-md'
          onClick={addTask}
        >
          Ajouter
        </button>
      </form>
      {listTask.map((event) => {
        return (
          <div className='border-solid border-2 border-black m-4 p-2 rounded-md w-60 h-16'>
            {event.name}
          </div>
        );
      })}
    </>
  );
}

export default FormToDo;
