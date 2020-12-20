import { Component } from "react";
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const imageUserLabel=({ name, avatarURL }) => (
    <div className='login-single-user'>
        <img src={avatarURL} alt={name} className='login-img-user' />
      {name}
    </div>
  );
class Login extends Component{

    render(){
        // const { user,goToHome} = this.state;
        // const { users,authedUser} = this.props;
        
        return (
            
            <div className="w3-row w3-cursive">
                {/* <div class="w3-col m2 l3">
                    <p></p>
                </div>
                <div className="w3-col m2 l6 w3-center ">
                    <h2 className="w3-cursive"> Would You Rather ?</h2>
                    <form className="w3-container w3-card-4">
                    <Select
                        onChange={this.handleOnChange} 
                        formatOptionLabel={imageUserLabel}
                        options={users} 
                        getOptionLabel={(option)=>option.id}
                        getOptionValue={(option)=>option.name}
                        placeholder='Select User'
                        isSearchable={false}
                        />
                    <button className="w3-button w3-section w3-teal w3-ripple"> Log in </button>

                    </form>
                </div>
                <div className="w3-col m2 l3">
                    <p></p>
                </div>  */}
            </div>
        )
    }

}

function mapStateToProps ({ users,authedUser}, {id}) {
	// return {
    //     authedUser,
    // 	users: Object.values(users),
    //   	id: id ? id : null
	// }
}
export default withRouter(connect(mapStateToProps)(Login));