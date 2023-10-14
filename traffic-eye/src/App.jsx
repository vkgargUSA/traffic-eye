import React from 'react'
import{Routes, Route}from 'react-router-dom'
import Settings from './components/Settings';
import Incidents from './components/Incidents';
import Admin from './components/Admin';
import Logout from './components/Logout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Incidents />}></Route>
			<Route path='/admin' element={<Admin />}></Route>
			<Route path='/settings' element={<Settings/>}></Route>
			<Route path='/logout' element={<Logout />}></Route> 
		</Routes>
	);
}

export default App
