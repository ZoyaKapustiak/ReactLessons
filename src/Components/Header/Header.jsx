import { NavLink, Outlet} from 'react-router-dom'

import styles from './Header.module.css'

export const navigate = [
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
  },
  {
    id: 6,
    name: 'SignIn',
    to: '/signin'
  }, {
    id: 7,
    name: 'SignUp',
    to: '/signup'
  },
]

export function Header() {

  return (
  <>
    <header>
      <nav className={styles.header}>
        <ul>
          {navigate.map((link) => (
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
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
  </>
  )
}