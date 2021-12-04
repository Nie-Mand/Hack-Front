import { useHistory, IndexLink } from 'react-router'
import { useAuth } from '../../config/auth.context'
import { Button } from '../ui'

const Navbar = props => {
  const { name } = props
  const router = useHistory()

  const { isAuth, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="bg-primary-1 shadow-md">
      <nav className="w-4/5 mx-auto py-2 h-auto flex items-center">
        <Button href="/" className="font-bold ">
          INSAT ACM {name ? `~ ${name}` : null}
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/problemset"
          active="text-opacity-100"
        >
          Problemset
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/submissions"
          active="text-opacity-100"
          show={isAuth}
        >
          Submissions
        </Button>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          active="text-opacity-100"
          href="/leaderboard"
        >
          Leaderboard
        </Button>

        <div className="mx-auto"></div>

        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/login"
          show={!isAuth}
        >
          Login
        </Button>

        <Button contained show={isAuth} onClick={handleLogout}>
          Logout
        </Button>

        {/* 
        
        
        



        <Button
          className="text-opacity-50 hover:text-opacity-100"
          href="/register"
        outlined show={!isLoggedIn}>
          Register
        </Button>
        <Team name="Linus Tech Tips" username="Linus Sebastian" size="small" show={isLoggedIn}/>
        <Button href="/admin" className="text-opacity-50 hover:text-opacity-100" show={isLoggedIn && isAdmin}>
        <i className="fas fa-user-shield"></i>
        </Button>
</div>
         */}
      </nav>
    </div>
  )
}

export default Navbar

/*
import Link from "next/link"
import useAuth from "./useAuth"
import TeamNav from "./TeamNav"
import AdminNav from "./AdminNav"

export default function Navbar() {
    
    const { loading, isLogged, isAdmin } = useAuth()

    if (loading) return <></>

    if (isLogged && !isAdmin) 
        return <TeamNav navClass={navClass} loginClass={loginClass} />

    if (isLogged) 
        return <AdminNav navClass={navClass} loginClass={loginClass} />

*/
