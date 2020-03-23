import React, {Fragment, useState} from 'react';
import {setAuth} from '../../action';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from 'firebase';
import fire from '../../Fire';
import Developers from '../layout/Developers';

const Register = (props) => {
if (!firebase.apps.length) {
    firebase.initializeApp(fire);
}
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
});

const { name, email, password, password2 } = formData;

const singUp = () => {
  firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  )
}

const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      //authListener()
      singUp()
      localStorage.setItem('user', JSON.stringify(formData));
      setAuth({name});
      console.log(formData);
      props.history.push({pathname: '/login'})
    }
    
};    
    return (
      <Fragment>
		   <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange={e => onChange(e)} required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} 
            onChange={e => onChange(e)} required
            minLength="6"
          />
        </div>
       <input onClick={props.Authed} type="submit" class="btn btn-primary" value="Register" />
        <p>Attempts - {props.currentUsers}</p>
      </form>
      <p className="my-1">
        Already have an account? <Link to={{pathname: '/login'}}>Sign In</Link>
      </p>
      </Fragment>
	  );
}

///  Register.propTypes = {
//   setAlert: PropTypes.func.isRequired
// };

    function toMatchState (state) {
      return {
        currentUsers: state.currentUsers,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        isAuthen: state.isAuthen
      }
    }
    function toDispatchState (dispatch) {
      return {
        
      }
    }
export default connect(toMatchState, toDispatchState)(Register);
