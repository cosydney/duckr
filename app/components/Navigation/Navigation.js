import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function NavLinks (isAuthed) {
  return isAuthed === true
  ? <ul>
      <li><Link to ='/'>{'Home'}</Link></li>
    </ul>
  : null
}

function ActionLinks(isAuthed) {
  return isAuthed === true
  ? <ul>
    <li>New Duck</li>
    <li><Link to='/logout'>{'Logout'}</Link></li>
  </ul>
  : <ul>
    <li><Link to='/home'>{'Home'}</Link></li>
    <li><Link to='/auth'>{'Authenticate'}</Link></li>
  </ul>
}

export default function Navigation (isAuthed) {
  return (
    <div>
      <nav>
        <NavLinks isAuthed={isAuthed}/>
        <ActionLinks   />
      </nav>
    </div>
  )
}
