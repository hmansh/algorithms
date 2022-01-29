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
  ];

  const checkedOrNot = (checked) => {
    console.log(checked);
    if (checked) {
      return (
        <div className='checked'>
          {/* Done */}
        </div>
      );
    } else {
      return (
        <div className='unchecked'>
          {/* Not Done */}
        </div>
      );
    }
  };

  return (
    <>
      {
        goals.map((goal, item) => {
          return (<div className='goal' key={item}>
            <div className='goal-checkbox blue light sm'>
              {checkedOrNot(goal.completed)}
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
