import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAddressCard, faEuroSign } from '@fortawesome/free-solid-svg-icons'
export default function Stat(props) {
   return (
      <div className="box">
         <ul>
            <li>{props.sum}</li>
            <li>{props.email}</li>
            <li>{props.total}</li>
            <li>{props.full}</li>
            <li>{props.free}</li>
            <li>{props.discount}</li>
         </ul>
      </div>
   )
}
