import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Link,BrowserRouter} from 'react-router-dom'


function Nav() {
  return (
    <div>
      <ul className='nav-list'>
        <BrowserRouter>
     <Link to ="/"> <li>  Home </li></Link>
     <Link to ="/about">  <li> About </li> </Link>
     <Link to ="/menu"> <li>  Menu </li></Link>
     <Link to ="/reservation">  <li> Reservation </li></Link>
     <Link to ="/order online"><li>   Order Online</li> </Link>
     <Link to ="/login">   Login</Link>
     </BrowserRouter>
      </ul>
    </div>
  )
}

export default Nav
