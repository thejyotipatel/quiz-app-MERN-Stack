const InputCmponent = ({
  value,
  name,
  type,
  labelText,
  handleChange,
  placeholder,
}) => {
  return (
    <div className='input-controler'>
      <label htmlFor={name} className=' label '>
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='input-control'
        placeholder={placeholder || name}
      />
    </div>
  )
}
export default InputCmponent
