import React, { Component } from "react";
import {  ListGroup, Button, Media, }  from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./Login";

class Home extends Component {
  state = {
    answered: false,
  };

  handleUnansweredTab = (e) => {
    e.preventDefault();
    // Tab kontrolü için kontrol yap!!! 
    this.setState({
      answered: false,
    });
  };
  handleAnsweredTab = (e) => {
    e.preventDefault();

    // kullanıcı tab değiştirdi.
    this.setState({
      answered: true,
    });
  };

  handleViewUserPool = (e, id) => {
    e.preventDefault();
    // Kullanıcının sorusana redirect eder id parametresi ni geçirir. 
    this.props.history.push(`/questions/${id}`);
  };

  render() {
    const { answered } = this.state;
    
    const {
      users,
      unansweredQuestions,
      authedUser,
      answeredQuestions, 
    } = this.props;
    

    let questionList = unansweredQuestions;
    if (authedUser === null) {
      return <Login />;
    }

    if (answered) {
      questionList = answeredQuestions;
    }
console.log(questionList.length);
    return (
      <div className="w3-margin-top w3-cursive">
        <div className="w3-quarter"><br/></div>
        <div className="w3-half">
        <div className="w3-bar w3-black">
         
          <button className={`w3-bar-item w3-button tablink  ${this.state.answered == false ? "w3-red" : ""}`}  onClick={this.handleUnansweredTab}> Unanswered Questions</button>
          <button className={`w3-bar-item w3-button tablink  ${this.state.answered == true  ?"w3-red" : ""}`}  onClick={this.handleAnsweredTab}>Answered Questions</button>
        </div>

        <ListGroup className="w3-row w3-margin-top">
          {
            questionList.length >0 ? 
            <div>
            {
            questionList.map((question) => (
              <div key={question.id} className="w3-card-2 w3-margin-top w3-margin-bottom w3-padding">
                <h5 className="a-size" >{users[question.author].name} asks:</h5>
                <div className="w3-quarter"> 
                <Media
                    height="200"
                    alt={users[question.author].id}
                    src={users[question.author].avatarURL}
                    className="w3-circle"
                  /></div>
                <div className="w3-thereequarter">
                  
                    <div className="">
                      <Media heading>Would you rather</Media>
                      <span>
                         {question.optionOne.text.substring(0, 20)} ...
                      </span>
                      <div className="w3-row">
                        <div className="w3-right">
                                            <Button
                                              className="w3-button w3-btn w3-green w3-block"
                                              onClick={(e) => this.handleViewUserPool(e, question.id)}
                                            >
                                              View Poll
                                            </Button>
                        </div>
                      </div>
                    </div>
                  
                </div>
                
              </div>
            ))  }
            </div> : 
            <div>
              <div className="w3-row w3-panel w3-round-large w3-yellow  w3-padding">
                <h3>You answered all questions :) </h3>
              </div>
            </div>
            
          }
        </ListGroup>
        </div>
        <div className="w3-quarter"><br/></div>
       
      </div>
    );
  }
}
// Burada 
function mapStateToProps({ questions, users, authedUser }) {
  return {
    users,
    authedUser,
    answeredQuestions: Object.values(questions)
      .filter(
        (quesId) =>
          quesId.optionTwo.votes.includes(authedUser)  || 
          quesId.optionOne.votes.includes(authedUser)
         
      )
        .sort((a, b) => b.timestamp - a.timestamp),
        unansweredQuestions: Object.values(questions)
        .filter(
          (quesId) =>
            !quesId.optionOne.votes.includes(authedUser) &&
            !quesId.optionTwo.votes.includes(authedUser)
            )
            .sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default withRouter(connect(mapStateToProps)(Home));
