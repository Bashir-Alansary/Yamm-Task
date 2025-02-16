import React from 'react'

const TableLoading = ({pageLength}: {pageLength:number}) => {
  return (
    <div 
    role="status" 
    className="p-4 space-y-2 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
        <div className="flex items-center justify-between w-full bg-white p-3">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-52"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        </div>
        {
            [...Array(pageLength)].map((row, index)=> {
                return (
                    <div key={index} className="flex items-center h-8 justify-between bg-white px-11 py-6">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                )
            })
        }
        <span className="sr-only">Loading...</span>
    </div>
  )
}

export default TableLoading