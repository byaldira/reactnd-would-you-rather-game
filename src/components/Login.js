import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { setAuthedUser } from '../actions/authedUser';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';

const imageUserLabel=({ name, avatarURL }) => (
    <div className=''>
        <img src={avatarURL} alt={name} className='w3-circle' height="40" />
      {name}
    </div>
  );
class Login extends Component{
    state={
        user: '',
        goToHome:false
    };
    handleOnChange=(value)=>{
        this.setState({
            user:value.id,
        })
    }
    handleFormSubmit = (e) => {
        const {user}= this.state;
		const { dispatch, id } = this.props;

		e.preventDefault();

		if (user !== '') {
            dispatch(setAuthedUser(user));
            this.setState({
                user: '',
                  goToHome: id === null
                          ? true
                          : false,
            });
		}

        if (id !== null) {
        	this.props.history.push(`/questions/${id}`)
        }
	};
render()
{
        const { user,goToHome} = this.state;
        const { users,authedUser} = this.props;
        
        if (goToHome || !!authedUser) {
        	return <Home />
        }
        
		return (
			<div>
                <div className="w3-container w3-margin-top  w3-cursive">
                <div className='login-list-group font-size w3-center'>
                    <h1>Welcome to the Would You Rather App!</h1>
                    <h3>Log in </h3><br/>

                </div>
                <div className="w3-row">
                    <div className="w3-third w3-center">
                        <br/>
                    </div>
                    <div className='w3-third'>
                    <Select
                            onChange={this.handleOnChange} 
                            formatOptionLabel={imageUserLabel}
                            getOptionLabel={(option)=>option.id}
                            getOptionValue={(option)=>option.name}
                            options={users} 
                            placeholder='Please Select a User to login'
                            isSearchable={false}
                    />
                  <br/> <br/>
                  <button color="success" 
                        className="w3-button w3-btn w3-green w3-block"
                        type='submit'
                        disabled={user === ''}
                        onClick={this.handleFormSubmit}>
                        Sign In
                 </button>
                </div>
                    <div className="w3-third w3-center">
                     <br/>
                    </div>
                </div>
               
               
            </div>
            </div>
		);
    
}
}
function mapStateToProps ({ users,authedUser}, {id}) {
    // get id 
	return {
        authedUser,
    	users: Object.values(users),
      	id: id ? id : null
	}
}

export default withRouter(connect(mapStateToProps)(Login));