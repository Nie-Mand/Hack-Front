const CodeArea = (props: Props) => {
    const { name, register, validate = {}, ...rest } = props
    return (
      <div className="p-1">
        <label className="font-medium uppercase" htmlFor={name}>
          {name}
        </label>
        <textarea
          className="w-full font-mono h-40 p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow"
          {...register(name, validate)}
          {...rest}
        >
        </textarea>
      </div>
    )
  }
  
  export default CodeArea
  