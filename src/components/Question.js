import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/questions';
import {ListGroup, ListGroupItem ,Media ,Button} from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ResultQuestion from './ResultQuestion';
class Question extends Component{
    state={
        answer:'',
        toResult: false
    }

    handleChange= (e)=> {
        const answer = e.target.value;

        this.setState({
            answer,
        })
    }
    handleSubmit = (e)=> {
        e.preventDefault();
      
        const { answer } = this.state;
        const { dispatch, id } = this.props;
    
        dispatch( handleAddAnswer(id, answer ));
    
        this.setState({
            answer:'',
            toResult: true,
      })

    }
    render(){
        const { question, author, id } = this.props;
        const { answer, toResult } = this.state;
       
		if (toResult) {
          return (<ResultQuestion id={id} />)
        }
        return(
            <div className="w3-row w3-cursive w3-margin-top">
                <div className="w3-quarter"><br/></div>
                <div className="w3-half">
                <ListGroup className='w3-card-4 '>
                        <ListGroupItem> 
                            <div className="w3-row">  <h3 className="result-list-group-item">
                                { author.name }  asks:
                                </h3></div>
                            <div className="w3-quarter w3-padding">
                                <Media
                                alt={ author.id }
                                src={ author.avatarURL }
                                className='w3-circle'
                                height="200"
                                />
                            </div>
                            <div className="w3-rest w3-padding">
                            
                            Would You Rather...
                            <br></br> <br></br>
                            <FormControl component="fieldset">
                            <RadioGroup onChange={this.handleChange}>
                                <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text } onChange={this.handleChange}  />
                                <FormControlLabel value="optionTwo"  control={<Radio />} label={question.optionTwo.text } onChange={this.handleChange}  />
                            </RadioGroup>
                            </FormControl>
                            <Button 
                                        className="w3-button w3-block w3-green"
                                        type='submit'
                                        disabled={answer === ''}
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </Button>
                            </div>
                          
                           
                           
                            </ListGroupItem>
                     
                        </ListGroup>
                </div>
                <div className="w3-quarter"><br/></div>
                
            </div>
       
        )
    
     }
}

function mapStateToProps ({ questions, users, authedUser }, {id}) {
return {
    question: questions[id],
      author: users[questions[id].author],
      id,
} 
}
export default connect(mapStateToProps)(Question);