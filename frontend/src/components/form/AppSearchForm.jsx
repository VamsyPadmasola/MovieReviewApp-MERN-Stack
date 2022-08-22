import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

const defaultInputStyle = 'dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary dark:text-white '

export default function AppSearchForm({ showResetBtn = false, placeholder = '', inputClassName = defaultInputStyle, onSubmit, onReset }) {
    const [value, setValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(value)
    }

    const handleReset = () => {
        setValue('')
        onReset()
    }

    return (
        <form onSubmit={handleOnSubmit} className="relative">
            <input
                type="text"
                className={inputClassName + " border-2  transition bg-transparent rounded text-lg p-1 outline-none"}
                placeholder={placeholder}
                value={value}
                onChange={({ target }) => setValue(target.value)}
            />
            {showResetBtn ?
                <button onClick={handleReset} type='button' className='dark:text-dark-subtle text-light-subtle absolute top-1/2 -translate-y-1/2 right-2'>
                    <RiCloseCircleLine size={22} />
                </button>
                : null}
        </form>
    )
}
