import React from 'react'
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className='card  '>
            
             <section key={props.user._id} className='card-body Larger shadow w-auto' 
             style={{backgroundColor: '#cfeafc'}}
             >

             <h2 className='card-title'>{props.user._id}</h2>                
             <p className='card-text'>{props.user.username}</p>
             <Link to={`/users/${props.user._id}`} className='btn btn-primary'>Ver mais detalhes</Link>

             </section>
    </div>
  )
}
