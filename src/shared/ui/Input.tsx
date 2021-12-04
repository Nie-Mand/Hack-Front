const Input = props => {
  const { label, name, register, validate = {}, ...rest } = props
  return (
    <div className="p-1">
      <label className="font-medium uppercase" htmlFor={name}>
        {label ? label : name}
      </label>
      <input
        className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow"
        {...register(name, validate)}
        {...rest}
      />
    </div>
  )
}

export default Input
