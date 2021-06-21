import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {emitUserLogout} from "../redux/user/actions";
import {USER_ROLE} from "../constants/defaultConstants";
import {formatString} from "../functions/generalFunctions";
import {PROFILE_PAGE, SETTINGS_PAGE} from "../constants/pageNameConstants";
import {PROFILE_PAGE_PATH, SETTINGS_PAGE_PATH} from "../constants/pagePathConstants";

// Component
function NavBarComponent({userName, dispatch}) {
    const handleLogout = () => {
        dispatch(emitUserLogout());
    }

    // Render
    return (
        <nav id="app-navbar" className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Menu toggle*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link hand-cursor" data-widget="pushmenu">
                        <i className="fas fa-bars"/>
                    </span>
                </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
                <li className='text-center'>
                    {formatString(userName, 19)}<br/>
                    <strong className='text-theme'>{USER_ROLE}</strong>
                </li>
            </ul>
            {/* Nav bar*/}
            <ul className="navbar-nav ml-auto">
                {/* User menu */}
                <li className="nav-item dropdown">
                    <span className="nav-link hand-cursor" data-toggle="dropdown">
                        <i className="far fa-user"/>
                    </span>
                    <div className="dropdown-menu dropdown-menu-lg min-width-200 dropdown-menu-right">
                        <Link to={PROFILE_PAGE_PATH} className="dropdown-item dropdown-header">
                            <i className='fa fa-user' /> {PROFILE_PAGE}
                        </Link>
                        <div className="dropdown-divider"/>
                        <Link to={SETTINGS_PAGE_PATH} className="dropdown-item dropdown-header">
                            <i className='fa fa-cogs' /> {SETTINGS_PAGE}
                        </Link>
                        <div className="dropdown-divider"/>
                        {/* Logout */}
                        <span className="dropdown-item dropdown-footer bg-danger text-white hand-cursor" onClick={handleLogout}>
                            <i className='fa fa-sign-out' /> Deconnexion
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

// Prop types to ensure destroyed props data type
NavBarComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired
};

export default React.memo(NavBarComponent);