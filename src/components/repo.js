import React from 'react'

const datos = (props)=>(
  <li className="flex items-center">
   <div className="w-10/12 overflow-x-hidden">
      <h4 className="text-gray-500 font-bold truncate">{props.repo.name}</h4>
      <p className="text-sm text-yellow-600 overflow-y-hidden truncate" style={{height:"1.5rem"}}>{props.repo.description}</p>
   </div>
   <div className="flex-1 text-right">
   <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">Ver código</a>
    </div>
  </li>
)

export default datos