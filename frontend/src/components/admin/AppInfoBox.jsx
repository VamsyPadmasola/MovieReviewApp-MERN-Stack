import React from 'react'

export default function AppInfoBox({ title, subTitle }) {
    return (
        <div className='dark:bg-primary bg-white p-5 dark:shadow-darkShadow shadow-lightShadow
        rounded-3xl'>
            <h1 className='font-semibold text-2xl mb-2 text-primary dark:text-white'>
                {title}
            </h1>
            <p className='text-xl text-primary dark:text-white'>
                {subTitle}
            </p>
        </div>
    )
}
