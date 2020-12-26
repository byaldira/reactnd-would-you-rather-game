import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { Nav,NavItem,Button} from 'reactstrap';

class NavBar extends Component {
  
  handleLogOut = (e) => {
    	e.preventDefault();
      
      	const { dispatch } = this.props;
      	dispatch(setAuthedUser( null ));
      	this.props.history.push('/');
    }

  
	render () {
      const { user } = this.props;

    	return(
              <Nav className="w3-bar w3-black">
                <NavItem className="w3-bar-item">
                  <NavLink  className="w3-button" to='/' exact>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="w3-bar-item">
                  <NavLink  className=" w3-button" to='/new' >
                    New Question
                  </NavLink>
                </NavItem>
                <NavItem className="w3-bar-item">
                  <NavLink  className="w3-button" to='/leaderboard'>
                    Leader Board
                  </NavLink>
                </NavItem>

          		{user && (
                  <div className="w3-bar-item w3-green w3-right">
                        <NavItem className="w3-bar-item">
                          Hello, {user.name}    
                          <img 
                          height="20"
                              src={user.avatarURL} 
                              alt={user.id}
                              className='w3-circle w3-left'
                          />
                          
                        </NavItem>
                                <Button 
                                onClick={this.handleLogOut}
                                className='w3-bar-item w3-btn w3-block w3-button'
                                >
                                Logout
                        </Button>
                    </div>
                   
                    )}
                     
              </Nav>
        );
    }
} 
function mapStateToProps ({ users, authedUser }) {
    return {
      user:authedUser
           ? users[authedUser]
           :null
    };
}

export default withRouter(connect(mapStateToProps)(NavBar));