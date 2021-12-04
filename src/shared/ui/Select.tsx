import { forwardRef } from 'react'

const Select = forwardRef((props: Props, ref) => {
  const {
    onBlur,
    defaultValue,
    title,
    options,
    name,
    selectedvalue,
    icon,
    ...rest
  } = props

  const handleChange = e => {
    selectedvalue(e.target.value)
    console.log('test ', e.target.value)
  }

  const icons: any = {
    java: (
      <img
        alt="Java icon"
        srcset="https://img.icons8.com/color/2x/java-coffee-cup-logo.png 2x"
        style="height:48px;width:48px;"
      ></img>
    ),
    cpp: (
      <img
        alt="C++ icon"
        srcset="https://img.icons8.com/color/2x/c-plus-plus-logo.png 2x"
        style="height:48px;width:48px;"
      ></img>
    ),
    c: (
      <img
        srcset="https://img.icons8.com/color/452/c-programming.png 2x"
        alt="C Programming icon in Color"
        loading="lazy"
      ></img>
    ),
  }

  return (
    <div className="p-1">
      {title && (
        <label className="font-medium uppercase" htmlFor={name}>
          {title}
        </label>
      )}
      <select
        name={name}
        onChange={e => handleChange(e)}
        onBlur={onBlur}
        ref={ref}
        {...rest}
        className="appearance-none p-3 rounded-2xl w-full bg-dark-3 mt-1 mb-5 focus:outline-none cursor-pointer"
      >
        <option value="">{defaultValue}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {icon && <div className="mr-3">{icons[icon]}</div>}
            {label}
          </option>
        ))}
      </select>
    </div>
  )
})

export default Select
