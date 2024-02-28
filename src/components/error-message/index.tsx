import React from "react"

export const ErrorMessage = ({ error = "" }: { error: string }) => {
  return error && <p className="text-rose-500 mt-2 mb-6 text-small">{error}</p>
}
