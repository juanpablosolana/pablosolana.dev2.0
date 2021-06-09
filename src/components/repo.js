import React from 'react'

const datos = (props)=>(
  <li className="flex items-center" key={props.repo.key}>
   <div className="flex-1 w-10/12 pb-1 overflow-x-hidden">
      <h4 className="font-bold text-gray-500 truncate">{props.repo.name}</h4>
      <p className="overflow-y-hidden text-sm text-yellow-600 truncate" style={{height:"1.5rem"}}>{props.repo.description}</p>
   </div>
   <div className="flex-1 text-right">
   <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver código</a>
    </div>
  </li>
)

export default datos