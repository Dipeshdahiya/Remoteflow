"use client"
import { logout } from '@/app/actions/auth.action'
import React from 'react'

type props = {
  className?: string
}

const Logout = (props: props) => {
  return (
    <button
      onClick={async() => {
        logout()
      }}
      className={props.className}
    >
      Logout
    </button>
  )
}

export default Logout
