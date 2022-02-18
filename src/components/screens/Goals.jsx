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

  // const checkedOrNot = (checked) => {
  //   console.log(checked);
  //   if (checked) {
  //     return (
  //       <div className='checked'></div>
  //     );
  //   } else {
  //     return (
  //       <div className='unchecked'></div>
  //     );
  //   }
  // };

  return (
    <div className='things-section'>
     <h2 className="section-title md regular">101 Things in 2022</h2>
      {
        goals.map((goal, item) => {
          return (<div className='goal' key={item}>
            <div className='goal-checkbox black bold sm'>
              {/* {checkedOrNot(goal.completed)} */}
              {item+1}
            </div>
            <div className={`goal-text regular sm ${goal.completed ? 'completed' : ''}`}>
              {goal.text}
            </div>
          </div>);
        })
      }
    </div>
  );
}
