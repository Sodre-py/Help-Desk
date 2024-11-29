import { LayoutDashboard, MessageCircle, Ticket } from 'lucide-react'
import style from './Sidebar.module.css'
import logo  from '../../assets/logo.png'
import { LayoutDashboardIcon } from 'lucide-react'
import { Link } from 'react-router-dom'



export function Sidebar() {

  return (
    <nav className={style.sidebar}>
      <div className={style.sidebar_top_wrapper}>
        <div className={style.sidebar_top}>
        <a href="#" className={style.logo_wrapper}>
          <img src={logo} alt="logo" className={style.logo_small} />
          <span className={style.hide}>
            Dr.SuporTI
          </span>
        </a>
      </div>
      <div className={style.expand_btn}>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      </div>
      <div className={style.sidebar_links}>
          <ul>
            <Link to={"/"} className={style.LinkTo}>
            <li>
            <a href="#dashboard" title='Dashboard' className={style.tooltip}>
              <LayoutDashboardIcon className={style.icon} />
              <span className={style.link_hide}>Dashboard</span>
              <span className={style.tooltip__content}>Dashboard</span>
            </a>
            </li>
            </Link>
            <Link to={"/ticket"} className={style.LinkTo}>
            <li>
            <a href="#ticket" title='Ticket' className={style.tooltip}>
              <Ticket className={style.icon}/>
              <span className={style.link_hide}>Ticket</span>
              <span className={style.tooltip__content}>Ticket</span>
            </a>
            </li>
            </Link>
            <li>
            <a href="#Chat" title='Chat' className={style.tooltip}>
              <MessageCircle  className={style.icon}/>
              <span className={style.link_hide}>Chat</span>
              <span className={style.tooltip__content}>Chat</span>
            </a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
