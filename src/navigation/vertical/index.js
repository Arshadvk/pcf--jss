import { useEffect, useState } from 'react';
import Table from 'mdi-material-ui/Table';
import Home from 'mdi-material-ui/Home';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import AccountPlus from 'mdi-material-ui/AccountPlus';
import AccountArrowLeft from 'mdi-material-ui/AccountArrowLeft';

const useNavigation = () => {
  const [navItems, setNavItems] = useState([
    {
      title: 'Dashboard',
      icon: Home,
      path: '/dashboard'
    },
    {
      title: 'User List',
      icon: Table,
      path: '/user',
    },
    {
      title: 'User Requests',
      icon: AccountArrowLeft,
      path: '/user/requests',
    },
    {
      title: 'Profile',
      icon: AccountCogOutline,
      path: '/profile'
    },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSuperAdmin = Boolean(localStorage.getItem('super'));
      if (isSuperAdmin) {
        setNavItems(prevNavItems => [
          ...prevNavItems,
          {
            title: 'Admin List',
            icon: Table,
            path: '/admin',
          },
          {
            title: 'Admin Register',
            icon: AccountPlus,
            path: '/admin/register',
          }
        ]);
      }
    }
  }, []);

  return navItems;
};

export default useNavigation;
