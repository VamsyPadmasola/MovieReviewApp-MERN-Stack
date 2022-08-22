import React from 'react'

export default function Selector({ name, options, value, label, onChange }) {
  return (
    <select id={name} name={name} value={value} onChange={onChange}
      className={"border-2 bg-transparent outline-none dark:border-dark-subtle border-light-subtle dark:hover:border-secondary hover:border-secondary cursor-pointer" +
        "  dark:text-white text-primary dark:hover:text-white hover:text-primary transition rounded px-4 py-1 pr-10"}>
      <option value={""}>{label}</option>
      {
        options.map(({ title, value }) => {
          return (
            <option key={title} value={value}>{title}</option>
          )
        })
      }
    </select>
  )
}
