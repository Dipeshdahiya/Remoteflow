"use client"
import React from "react"

type Props = {
  children?: React.ReactNode
}

const Logout = ({ children }: Props) => {
  return (
    <button onClick={() => alert("Logout clicked (no auth setup)")}>
      {children || "Logout"}
    </button>
  )
}

export default Logout
