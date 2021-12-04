import { Link } from 'react-router-dom'

const styles = (
  disabled,
  contained: boolean = false,
  className: string = ''
) => {
  let base = 'w-full p-3 mt-1 mb-5 rounded-xl grid place-items-center duration-300 text-white '
  if (contained) base += 'bg-primary-2 rounded-md '
  if (disabled) base += 'opacity-20 cursor-not-allowed '
  if (contained && !disabled)
    base += 'shadow hover:shadow-xl hover:bg-primary-4 '
  return base + className
}

const FullButton = (props: Props) => {
  const {
    href,
    children,
    contained,
    className,
    show = true,
    disabled = false,
    onClick,
    type = 'button',
  } = props

  if (!show) return <></>

  if (href)
    return (
      <Link to={href} className={styles(disabled, contained, className)}>
        {children}
      </Link>
    )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles(disabled, contained, className)}
    >
      {children}
    </button>
  )
}

type Props = {
  href?: string
  children: any
  contained?: boolean
  className?: string
  style?: any
  show?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
}

export default FullButton
