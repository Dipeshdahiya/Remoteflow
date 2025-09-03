"use client"
import React from "react"
import { useRouter } from "next/navigation"

type Props = {
  children?: React.ReactNode
}

const Logout = ({ children }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/workspace") // 🚀 Redirect straight to workspace
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      {children || "Go to Workspace"}
    </button>
  )
}

export default Logout
