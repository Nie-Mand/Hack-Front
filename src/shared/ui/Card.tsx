import { isString } from 'lodash'

const Card = (props: Props) => {
  const { children, title } = props

  const Header = () => {
    if (isString(title)) return <h1 className="text-2xl font-bold">{title}</h1>
    return title
  }
  return (
    <div className="text-white my-10 p-7 w-full rounded-xl h-auto bg-dark-2 shodow hover:shadow-xl duration-300">
      {title && <div className="px-2 py-20 text-center block">
        <Header />
      </div>
      }
      <div className="py-4">
      </div>
      {children}
    </div>
  )
}

type Props = {
  children: any
  title: JSX.Element | string
}

export default Card
