import { BiHomeSmile } from 'react-icons/bi';
import { FaBriefcase, FaUserFriends, FaCogs, FaUsers } from 'react-icons/fa';

export const sidebarMenus = [
  { id: 1, name: 'Dashboard', link: '/', icon: BiHomeSmile },
  { id: 2, name: 'Jobs', link: '/jobs', icon: FaBriefcase },
  { id: 3, name: 'Interviews', link: '/interviews', icon: FaUsers },
  { id: 4, name: 'Job Seekers', link: '/job-seekers', icon: FaUserFriends },
  // { id: 5, name: 'Settings', link: '/settings', icon: FaCogs },
];
