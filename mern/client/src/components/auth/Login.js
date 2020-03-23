import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {setLogin} from '../../action';

const Login = (props, {setLogin, isAuthenticated}) => {
	 const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    //setLogin(email, password);
    if (password !== null) {
      props.history.push({pathname: '/developers'})
    }
  };    
    return (
      <Fragment>
		   <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i class="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
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
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Do not have an account? <Link to={{pathname: '/register'}}>Sign Up</Link>
      </p>
      </Fragment>
	  );
}

// Login.propTypes = {
// 	setLogin: PropTypes.func.isRequired,
// 	isAuthenticated: PropTypes.bool
//}
// const mapToState = (state) => {
// 	//isAuthenticated: state.isAuthenticated
// }
export default Login