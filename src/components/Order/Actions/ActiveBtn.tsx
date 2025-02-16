import React from 'react'

const ActiveBtn = ({setShowToast}: {setShowToast: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <label className="inline-flex items-center me-5 cursor-pointer mx-6">
        <input type="checkbox" value="" className="sr-only peer" onChange={()=>setShowToast(true)} />
        <div className="relative w-[2.3rem] h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  )
}

export default ActiveBtn