import React from 'react'

function Carddesign({list,index}) {

    
  return (


  
     <div className='card col-4-md'>
      <div className='title'>{list.name}</div>
<h1 className='cost-month'> ${list.cost}/month</h1>
<div>
<div className='para'>
  {list.line1}
  </div>  

  <div className='para'>
  {list.line2}
  </div>

  <div className='para'>
  {list.line3}
  </div>

  <div className='para `${muted}` '>
  {list.line4}
  </div>

  <div className='para'>
  {list.line5}
  </div>

  <div className='para'>
  {list.line6}
  </div>

  <div className='para'>
  {list.line7}
  </div>

  <div className='para'>
  {list.line8}
  </div>

  </div>
  <button className='btn'>BUTTON</button>

     </div>

  )
}

export default Carddesign