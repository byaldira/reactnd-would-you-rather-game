import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button,ListGroup, ListGroupItem , FormGroup,Label,Form, Input} from 'reactstrap';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state={
        optionOne:'',
        optionTwo:'',
        goToHome:false
    }

    handleChangeOptOne = (e) => {
        const optionOne = e.target.value
    
        this.setState({
          optionOne
        })
      }

      handleChangeOptTwo = (e) => {
        const optionTwo = e.target.value
    
        this.setState ({
          optionTwo
        })
      }
      
      handleSubmit = (e) => {
        e.preventDefault()
    
        const {  optionOne,optionTwo } = this.state
        const { dispatch } = this.props
    
        // todo: Add Question to Store
    
        dispatch(handleAddQuestion(optionOne, optionTwo))
    
        this.setState(() => ({
          optionOne:'',
          optionTwo:'',
          goToHome: true,
        }))
      }
render(){
        const { optionOne,optionTwo,goToHome } =this.state;
        const { authedUser } = this.props;

        if( goToHome === true || authedUser===null ){
            return <Redirect to='/' />
        }

    return(
      <div className="w3-margin-top w3-cursive">
        <div className="w3-quarter"><br/></div>
        <div className="w3-half">
        <ListGroup className='home-list-group margin-top'> 
        <ListGroupItem>
          <h3>Create New Question </h3>
            <br/>
        <h6 className='new-question-h6' >Question: 
        <br/><br/> Would you rather ..</h6>
       
        <Form className='new-tweet' onSubmit={this.handleSubmit}>
          <FormGroup>
          <Label>Option One</Label>
          <Input placeholder='Enter Option One Text Here'
                onChange={this.handleChangeOptOne}
            text={optionOne}/>
         </FormGroup>
          <FormGroup>
            <Label>Option Two</Label>
            <Input placeholder='Enter Option One Text Here'
                  onChange={this.handleChangeOptTwo}
              text={optionTwo}/>
          </FormGroup>
            <Button color="success" className="w3-btn w3-button w3-green w3-block"
              type='submit'
              disabled={optionOne === '' || optionTwo === ''}>
                Submit
            </Button>
        </Form>
        </ListGroupItem>
      </ListGroup>
        </div>
        <div className="w3-quarter"><br/></div>
        
      </div>

    )
}

}

function mapStateToProps({authedUser}) {
	return {
    	authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);