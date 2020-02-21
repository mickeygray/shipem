import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import RecentLeads from '../stacks/RecentLeads';

const Navbar = () => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			
			<li>
			<Link to='/'>Danger Zone!</Link>
			<Link to='/ShipEm'>Ship Em!</Link>
			<Link to='/Stacks'>Stacks!</Link>
			<Link to='/leads/'>Popkis!</Link>
				
				
				<a href='#!' onClick={onLogout}>
					<i className='fa fa-sign-out' />{" "}
					<span className='hide-sm'>Logout</span>
				</a>
				
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
		</Fragment>
	);

 

	return (
	<div>
	<div className='navbar bg-primary'>
			<h2 >
			<span className='text-dark'>NTE</span><span className='text-danger lead'>NET</span>	
			</h2>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		    
		</div>
		<span className='leadul bg-light'>	{isAuthenticated ? <RecentLeads /> : ''} </span>
		</div>	
		
		

	);
};

Navbar.prototype = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Navbar.defaultProps = {
	title: "Ship 'Em"
};
export default Navbar;