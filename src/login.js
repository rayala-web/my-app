import { Button } from './button'

export default class LoginPage extends React.Component {

    state = {
        username: "",
        Password: "",
        confirmPassword: "",
        usernameError: "",
        passwordError: "",
        confirmpassword: ""
    };

    
    
        
    //this.handleChangeEvent = this.handleChangeEvent.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    
    handleChangeEvent(event)
    {
        if (event.target.id === 'userName' && event.target.value.length <= 10) {
            this.ListeningStateChangedEvent({ [event.target.id]: event.target.value, usernameError })
        }
    
        else {
            this.ListeningStateChangedEvent({ [event.target.id]: event.target.value, usernameError })
        }
        console.log(this.state);
    
    }
    
    handleChangeEvent(event)
    {
        if (event.target.id === 'Password' && event.target.value.length <= 5) {
            this.ListeningStateChangedEvent({ [event.target.id]: event.target.value, PasswordError })
        }
    
        else {
            this.ListeningStateChangedEvent({ [event.target.id]: event.target.value, passwordError })
        }
        console.log(this.state);
    }
    
    handleSubmit(event)
    {
        this.props
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id="userName" type="text" value={this.state.username}></input>
                </div>
                <label>
                    {this.state.usernameError}
                </label>
                <div>Username should be greter than ten digit</div>
                <div>
                    <input type="password" id="password" value={this.state.password}></input>
                </div>
                <div>
                    <input type="Confirmpassword" id="password" value={this.state.confirmpassword}></input>
                </div>

                <input type="submit" />

            </form>
        );
    }
}

const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  console.log(convertArrayToObject([1,2,3,4,5]));
     
ReactDOM.render(
    <LoginPage />, 
    document.getElementById('log'),
); 

