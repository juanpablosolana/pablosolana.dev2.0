import React from 'react'

const datos = (props)=>(
  <li className="flex items-center">
   <div className="flex-1">
      <h4 className="text-gray-500">{props.repo.name}</h4>
      <p className="text-sm text-yellow-600 overflow-x-hidden" style={{height:"1.5rem"}}>{props.repo.description}</p>
   </div>
   <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver código</a>
  </li>
)

export default datos