import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <div className='flex justify-center text-center items-center gap-4 bg-gray-300 text-white font-bold h-screen text-3xl'>
            <button className='bg-purple-200 rounded-xl font-medium text-md p-2 '>
                <Link href={"/one/two"}>Redirect to two page</Link>
            </button>
            
             <br  />

            <button className='bg-amber-200 rounded-xl font-medium text-md p-2 '>
                <Link href={"/three"}>Redirect to page three</Link>
            </button>

        </div>
    )
}

export default page
