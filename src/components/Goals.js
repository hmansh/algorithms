/* eslint-disable max-len */
import React from 'react';

export default function Goals() {
  const goals = [
    {
      completed: false,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: true,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
    {
      completed: false,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: true,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
    {
      completed: false,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: true,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
    {
      completed: false,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: true,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
    {
      completed: true,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: true,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
    {
      completed: false,
      text: 'Learn to draw to the point where I can create art like this',
    },
    {
      completed: false,
      text: 'Playing tennis and generally making sure to be active every single day',
    },
  ];
  return (
    <>
      {
        goals.map((goal, item) => {
          return (<div className='goal' key={item}>
            <div className='goal-checkbox blue light sm'>
              {goal.completed ? 'Done' : 'Not Done'}
            </div>
            <div className={`goal-text regular sm ${goal.completed ? 'completed' : ''}`}>
              {goal.text}
            </div>
          </div>);
        })
      }
    </>
  );
}
