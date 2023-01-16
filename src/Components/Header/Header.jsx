import { NavLink, Outlet} from 'react-router-dom'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase'
import { useSelector } from 'react-redux'

export const navigates = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
  {
    id: 4,
    name: 'About',
    to: '/about'
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles'
  }
]

export function Header({...props}) {
  const isAuth = useSelector((store) => store.profile.name) //попробовать селектор снова

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogOut = async () => {
    await logOut()
  }

  return (
  <>
    <header>
      <nav className={styles.header}>
        <ul>
          {navigates.map((link) => (
            <li key={link.id}>
              <NavLink
              to={link.to}
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'blue'
              })}
            >
              {link.name}
              </NavLink>
            </li> 
          ))}
          
        </ul>
        {isAuth && (
            <>
              <button onClick={handleLogin}>login</button>
              <button onClick={handleSignUp}>sign up</button>
            </>
            )   
            }
          {!isAuth && (
            <>
              <button onClick={handleLogOut}>logout</button>
            </>
            )   
            }
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
  </>
  )
}