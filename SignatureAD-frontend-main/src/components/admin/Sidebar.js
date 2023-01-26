
  import { Link } from "react-router-dom";
  import {FaUserFriends, FaChalkboard, FaChartLine, FaImages, FaCalendarAlt, FaBuilding, FaCar, FaQuestionCircle} from 'react-icons/fa';

  export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
            <Link to={`/admin`}className="SidebarLink">
              <li className="sidebarListItem">
                <span className="sidebaricon"><FaChalkboard/></span>
                <span>Dashboard</span>
              </li>
              </Link>
                <li className="sidebarListItem">
                  <span className="sidebaricon"><FaUserFriends/></span>
                  <span>Accounts</span>
                </li>
                <Link to={`/admin/services`} className="SidebarLink">
                <li className="sidebarListItem">
                <span className="sidebaricon"><FaCar/></span>
                <span>Services</span>
                </li></Link>
                <Link to={`/admin/gallery`} className="SidebarLink">
                  <li className="sidebarListItem">
                    <span className="sidebaricon"><FaImages/></span>
                    <span>Gallery</span>
                </li></Link>
              <li className="sidebarListItem">
              <span className="sidebaricon"><FaCalendarAlt/></span>
                <span>Calendar</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebaricon"><FaChartLine/></span>
                <span> Reports </span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebaricon"><FaBuilding/></span>
                <span>Administration</span>
              </li>
              <li className="sidebarListItem">
              <span className="sidebaricon"><FaQuestionCircle/></span>
              <span>Help</span>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
    );
  }