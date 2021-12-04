const Checkbox = props => {
  const { name, label, register, validate = {}, ...rest } = props
  return (
    <div className="box-subtitle p-1">
      <input id={name} type="checkbox" {...register(name)} />

      <label className="font-medium uppercase" htmlFor={name}>
        {' '}
        {label ? label : name}
      </label>
    </div>
  )
}

export default Checkbox
