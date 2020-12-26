import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ListGroup, ListGroupItem ,Media } from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
class ResultQuestion extends Component {
   
  render() {
  const { question, author ,selectedOption }=this.props;
  const optOneCount=question.optionOne.votes.length;
  const optTwoCount=question.optionTwo.votes.length;
  const sumCount= optOneCount + optTwoCount;
  const optOnePercentage =  Math.round((optOneCount/sumCount)*100);
  const optTwoPercentage = Math.round((optTwoCount/sumCount)*100);

    return (
      <div className="w3-margin-top w3-cursive">
        <div className="w3-quarter"><br/></div>
        <div className="w3-half">
        <ListGroup className='w3-card-4 w3-padding'>
              {
                    <div>
                   <ListGroupItem key = { question.id } className="w3-row" > 
                   <div className="w3-row">
                     <h4>  Asked By { author.name } </h4>
                   </div>
                    <div className="w3-quarter w3-padding">
                      
                    <Media
                    height="200"
                      alt={ author.id }
                      src={ author.avatarURL }
                      className='w3-circle'
                    />
                    </div>
                    <div className="w3-rest w3-padding"></div>
                    
                    <Media body> 
                  Results: 
                    </Media>
                    {selectedOption === 'optionOne' && <Media className="result-vote">Your Vote</Media>}
                    <Media> 
                    Would You Rather {question.optionOne.text } 
                    </Media>
                    <div className="w3-center">{optOneCount} out of {sumCount} votes</div>
                    <ProgressBar  striped variant="info" 
                                now={optOnePercentage} 
                                label={`${optOnePercentage}%`} />
                    {selectedOption === 'optionTwo' && <Media className="result-vote">Your Vote</Media>}
                    <hr/>
                    <Media className="w3-margin-top"> 
                       Would You Rather {question.optionTwo.text } 
                    </Media>
                    
                      <div className="w3-center">{optTwoCount} out of {sumCount} votes</div>
                    <ProgressBar striped variant="info" 
                                now={optTwoPercentage}
                                label={`${optTwoPercentage}%`}  />
                                
                    </ListGroupItem>
                    </div>
                    
                }

                </ListGroup>
        </div>
        <div className="w3-quarter"><br/></div>
        
      </div>
       
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }, {id}) {
  // get id 
  // get for spesific question information
  return {
      question: questions[id],
      author: users[questions[id].author],
      selectedOption: users[authedUser].answers[id]
  }
}


export default connect(mapStateToProps)(ResultQuestion) ;