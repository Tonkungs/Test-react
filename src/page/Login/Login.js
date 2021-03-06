import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
          route : props
      };
    }
    
    render(){
        return(
            <React.Fragment>
                  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    {console.log( this.state )}
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='http://4.bp.blogspot.com/-RS9sjwFYfas/VOp2yNXDcbI/AAAAAAAAAfc/9faha34HEW8/s320/utorrent.jpg' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment >
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              เข้าสู่ระบบ
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='http://4.bp.blogspot.com/-RS9sjwFYfas/VOp2yNXDcbI/AAAAAAAAAfc/9faha34HEW8/s320/utorrent.jpg'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
            </React.Fragment>
        )
    }
}
export default Login