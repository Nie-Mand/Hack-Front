function ordinal_suffix_of(i: any) {
  const j = i % 10,
    k = i % 100
  if (j == 1 && k != 11) {
    return 'st'
  }
  if (j == 2 && k != 12) {
    return 'nd'
  }
  if (j == 3 && k != 13) {
    return 'rd'
  }
  return 'th'
}

const rankColourMap: any = {
  '1': 'yellow',
  '2': 'gray',
  '3': 'orange',
}

const TeamPosition = props => {
  const { position, name, points, unqualified, rounds } = props

  return (
    <div
      className={
        'flex ' +
        (position === 1
          ? 'text-2xl sm:text-3xl flex rounded bg-dark-2 shadow-md -mx-12 px-12 mb-3 h-24'
          : 'h-16')
      }
    >
      <div
        className={
          'w-1/4 my-auto font-bold ' +
          (position === 1 ? ' ' : ' text-sm ') +
          'text-' +
          rankColourMap[position] +
          '-400 ' +
          `${unqualified && 'text-dark-3'}`
        }
      >
        {rankColourMap[position] && <i className="fas fa-trophy" />}
        <div className={`${unqualified && 'text-dark-3'}`}>
          {position + ordinal_suffix_of(position)}
        </div>
      </div>
      <div className={`w-1/2 my-auto ${unqualified && 'text-dark-3'}`}>
        {name}
      </div>
      <div className={`${unqualified && 'text-dark-3'} w-1/4 my-auto`}>
        {points} XP
        <br />
        <small className={position === 1 ? 'text-base' : 'text-xs'}>
          {rounds} rds-solved
        </small>
      </div>
    </div>
  )
}

export default TeamPosition
