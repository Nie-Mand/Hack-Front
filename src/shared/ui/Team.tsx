const Team = props => {
  const { name, size, username, show = true, active, acm } = props

  function stringToBoolean(string: String) {
    switch (string) {
      case 'true':
      case 'yes':
      case '1':
        return true
      case 'false':
      case 'no':
      case '0':
      case null:
      case '':
        return false
      default:
        return Boolean(string)
    }
  }

  if (!show) {
    return <></>
  }
  if (size == 'small') {
    return (
      <div className="flex my-px">
        <img
          style={{ borderRadius: '50%', maxHeight: '40px' }}
          src={
            'https://ui-avatars.com/api/?name=' + username.replace(/ /g, '+')
          }
          width="40"
          height="40"
        />
        <div className="flex-column leading-none">
          <h5 className="mt-1 ml-2 text-xs text-white">{username}</h5>
          <h6 className="mt-px ml-2 text-xs text-white">{name}</h6>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex my-2">
        <div className="relative">
          <img
            style={{ borderRadius: '50%' }}
            src={'https://ui-avatars.com/api/?name=' + name.replace(/ /g, '+')}
            width="50"
            height="50"
          />
        </div>
        <h4 className="mt-3 ml-2 text-white">
          {name}{' '}
          {stringToBoolean(acm) ? (
            <span
              className={
                'bg-blue-600 text-white tracking-wide text-xs w-auto inline-block rounded-full py-1 px-2'
              }
            >
              ACM
            </span>
          ) : (
            ''
          )}
        </h4>
      </div>
    )
  }
}

export default Team
