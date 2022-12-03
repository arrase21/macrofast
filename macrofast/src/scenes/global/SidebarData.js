import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AssessmentIcon from '@mui/icons-material/Assessment'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import GroupIcon from '@mui/icons-material/Group';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <HomeIcon />,
		cName: 'nav-text',
	},
	{
		title: 'Reports',
		path: '/reports',
		icon: <AssessmentIcon />,
		cName: 'nav-text',
	},
	{
		title: 'Team',
		path: '/team',
		icon: <GroupIcon />,
		cName: 'nav-text',
	},
	{
		title: 'Calendario',
		path: '../calendar/',
		icon: <CalendarMonthIcon />,
		cName: 'nav-text',
	},
	{
		title: 'Support',
		path: '/support',
		icon: <ContactSupportIcon />,
		cName: 'nav-text',
	},
]
