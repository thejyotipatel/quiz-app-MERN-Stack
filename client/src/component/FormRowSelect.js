import React from 'react'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='input-controler'>
      <label htmlFor={name} className='from-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        className='form-select'
        onChange={handleChange}
        value={value}
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item} className='select-option'>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormRowSelect
