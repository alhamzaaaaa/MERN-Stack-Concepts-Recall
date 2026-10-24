import React from 'react'

const page = async ({ params }) => {

  const { slug } = await params;

  return (
    <div>
      This is a Documentation Page <br />
      <span>
        {slug}
      </span>
    </div>
  )
}

export default page
