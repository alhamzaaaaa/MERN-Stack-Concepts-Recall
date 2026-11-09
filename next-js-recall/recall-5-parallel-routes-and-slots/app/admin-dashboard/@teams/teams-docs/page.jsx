import React from 'react'
import Link from 'next/link'

const TeamDocsPage = () => {
  return (
    <div className='bg-amber-300 h-[50%]'>
      Team docs page for admin dashboard.
      <Link href={"/admin-dashboard"}>Go To Default Page</Link>
    </div>
  )
}

export default TeamDocsPage
