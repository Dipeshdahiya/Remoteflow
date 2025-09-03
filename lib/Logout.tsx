"use client"
import React from "react"
import { useRouter } from "next/navigation"

type Props = {
  children?: React.ReactNode
}

const Logout = ({ children }: Props) => {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/") // 🚀 redirect to home
  }

  return (
    <button onClick={handleLogout}>
      {children || "Logout"}
    </button>
  )
}

export default Logout
