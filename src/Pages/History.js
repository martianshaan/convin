import React from 'react'
function History({history}) {
  return (
    <div>
        <h1>My history</h1>
        {history.map(person=>(
            <div>
            <h1>{person.Name}</h1>
            <h1>{person.Link}</h1>
            </div>
        ))}
       
       
    </div>
  )
}

export default History