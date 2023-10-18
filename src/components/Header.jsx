import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const data = [
	{
		title: 'Incidents',
		link: '/',
	},
	{
		title: 'Administration',
		link: '/admin',
	},
	{
		title: 'Settings',
		link: '/settings',
	},
	{
		title: 'Logout',
		link: '/logout',
	},
];

const Header = ({title}) => {
  const [navs]=useState(data)
  return (
		<>
			<div>
				<h1 className='h1'>{title}</h1>
				<hr></hr>
			</div>
			<br/>
			<ul className='flex justify-center items-center gap-8'>
				{navs.map((nav, index) => (
					<li key={index} className='li'>
						<NavLink
							to={nav.link}
							className='navs'>
							{nav.title}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	);
}

export default Header
