import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

class LeaderBoard extends Component{
render(){
	const { authedUser,users  } = this.props;

      	if (authedUser === null) {
          return <Redirect to='/' />
        }

    return(
        <Fragment>
            <div className="w3-margin-top">
            <div className="w3-quarter"><br/></div>
            <div className="w3-half w3-margin-top ">
            {users && users.map((user,index)=>(
            <div key={user.id} className='w3-card-2 w3-margin-top w3-padding w3-cursive'>
                <div className="w3-quarter">
                <div className='w3-left'>
                    <img
                    alt={ user.id }
                    src={ user.avatarURL }
                    className='w3-circle'
                    height="200"
                    />
                </div>
                </div>
                <div className="w3-rest">
                     <div className='w3-row'>
                        <h2>{user.name}</h2>
                        <h5>Answered Questions &nbsp;
                        <span> {user.answeredQuestions}</span>
                        </h5>
                        <hr></hr>
                        <h5> Created Question &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <span>{user.createdQuestions}</span>
                        </h5>
                        <div className='w3-right w3-padding'>
                            <h5>Score</h5> 
                            <h2>{user.score}</h2>
                        </div>
                    </div>

                </div>
            </div>
            ))}
            </div>
            <div className="w3-quarter"><br/></div>
            </div>
        </Fragment>
)
}
}
function mapStateToProps({users, authedUser}){
    let usersArray = [];
  
    Object.entries(users).forEach(
      ([key, value]) => {
        
            usersArray.push({
              id: value.id,
                name: value.name,
                avatarURL: value.avatarURL,
                answeredQuestions: Object.entries(value.answers).length,
                createdQuestions: value.questions.length,
                score: Object.entries(value.answers).length + value.questions.length,
          })
      }
  )
  return {
      users: usersArray.sort((a,b) => b.score - a.score),
      authedUser
  }  
}
export default connect(mapStateToProps)(LeaderBoard);