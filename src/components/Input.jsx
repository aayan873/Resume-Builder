import React from 'react'

const Input = ({id, placeholder, type, labelText, onChange, value, optional, recommended, "data-key": dataKey}) => {
  return (
    <div className="input">
        <label htmlFor={id}>
            {labelText}
            {optional && <span className="optional"> optional</span>}
            {recommended && <span className="recommended"> recommended</span>}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            data-key={dataKey}
        />
    </div>
  )
}

export default Input;
