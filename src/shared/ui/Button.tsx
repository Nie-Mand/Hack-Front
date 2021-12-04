import { Link, NavLink } from 'react-router-dom'

const styles = (
  disabled,
  contained: boolean = false,
  outlined: boolean = false,
  className: string = '',
  fullWidth: boolean = false
) => {
  let base = `${
    fullWidth ? 'w-full' : 'w-30'
  } h-10 px-3 grid place-items-center duration-300 text-white `

  if (contained) base += 'bg-primary-2 rounded-md '
  if (outlined)
    base +=
      'border-2 border-white border-opacity-50 hover:border-opacity-100 rounded-md '
  if (disabled) base += 'opacity-20 cursor-not-allowed '
  if (contained && !disabled)
    base += 'shadow hover:shadow-xl hover:bg-primary-4 '
  return base + className
}

const Button = (props: Props) => {
  const {
    href,
    children,
    contained,
    outlined,
    className,
    show = true,
    disabled = false,
    onClick,
    fullWidth = false,
    type = 'button',
    active,
  } = props

  if (!show) return <></>

  if (href)
    return (
      <NavLink
        activeClassName={active}
        to={href}
        className={styles(disabled, contained, outlined, className, fullWidth)}
      >
        {children}
      </NavLink>
    )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles(disabled, contained, outlined, className, fullWidth)}
    >
      {children}
    </button>
  )
}

type Props = {
  href?: string
  children: any
  contained?: boolean
  outlined?: boolean
  className?: string
  fullWidth?: boolean
  style?: any
  show?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  active?: string
}

export default Button
