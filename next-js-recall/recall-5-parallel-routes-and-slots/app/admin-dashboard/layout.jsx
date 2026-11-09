import React from 'react'

const Adminlayout = ({
  children,
  analytics,
  teams
}) => {
  return (
    <div>
      Layout for admin dashboard.
      <span>{children}</span>
      <span>{analytics}</span>
      <span>{teams}</span>
    </div>
  )
}

export default Adminlayout
