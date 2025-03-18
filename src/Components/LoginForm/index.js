// import React, { Component } from 'react';
// import './index.css';
// import Cookies from 'js-cookie';
// import { Navigate } from 'react-router-dom';
// import {auth} from '../FireBase/firebase.js'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//     errorMsg: '',
//     showPassword: false,
//     showSubmitError: false,
//     registeredPersion: false,
//     redirectToHome: false
//   };

//   toggleRegistration = () => {
//     this.setState(prevState => ({
//       registeredPersion: !prevState.registeredPersion
//     }));
//   };

//   toggleShowPassword = () => {
//     this.setState(prevState => ({
//       showPassword: !prevState.showPassword
//     }));
//   };

//   onChangePassword = event => {
//     this.setState({ password: event.target.value });
//   };

//   onChangeUsername = event => {
//     this.setState({ username: event.target.value });
//   };

//   onSubmitSucess = jwtToken => {
//     Cookies.set('jwt_token', jwtToken, {
//       expires: 30,
//       path: '/',
//     });
//   };

//   onSubmitFailure = errorCode => {
//     let errorMsg = '';
//     switch (errorCode) {
//       case 'auth/user-not-found':
//         errorMsg = "User not found. Please sign up.";
//         break;
//       case 'auth/wrong-password':
//         errorMsg = "Incorrect password. Please try again.";
//         break;
//       case 'auth/invalid-email':
//         errorMsg = 'Please provide a valid email address.';
//         break;
//       case 'auth/invalid-credential':
//         errorMsg = 'Please provide correct credentials.';
//         break;
//       case 'auth/weak-password':
//         errorMsg = 'Password should be at least 6 characters.';
//         break;
//       default:
//         errorMsg = errorCode;
//     }
//     errorMsg = errorMsg.replace(/\(.*\)/, '');
//     this.setState({ showSubmitError: true, errorMsg });
//   };

//   signInWithEmailAndPassword = () => {
//     const { username, password } = this.state;
//     auth
//       .signInWithEmailAndPassword(username, password)
//       .then(userCredential => {
//         const jwtToken = userCredential.user.getIdToken();
//         this.onSubmitSucess(jwtToken);
//         this.redirectToHome();
//       })
//       .catch(error => {
//         this.onSubmitFailure(error.message);
//       });
//   };

//   signUpWithEmailAndPassword = () => {
//     const { username, password } = this.state;
//     auth
//       .createUserWithEmailAndPassword(username, password)
//       .then(userCredential => {
//         const jwtToken = userCredential.user.getIdToken();
//         this.onSubmitSucess(jwtToken);
//         this.redirectToHome();
//       })
//       .catch(error => {
//         this.onSubmitFailure(error.message);
//       });
//   };

//   redirectToHome = () => {
//     this.setState({ redirectToHome: true });
//   };

//   submitForm = (event) => {
//     event.preventDefault();
//     const { registeredPersion } = this.state;
//     if (registeredPersion) {
//       this.signInWithEmailAndPassword();
//     } else {
//       this.signUpWithEmailAndPassword();
//     }
//   };

//   renderUsernameField = () => {
//     const { username } = this.state;
//     return (
//       <>
//         <label className='input-label' htmlFor="username">USERNAME/EMAIL</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           className='pser-input-field'
//           onChange={this.onChangeUsername}
//         />
//       </>
//     );
//   };

//   renderPasswordField = () => {
//     const { password, showPassword } = this.state;
//     return (
//       <>
//         <label className='input-label' htmlFor="password">PASSWORD</label>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           id="password"
//           value={password}
//           className='password-input-field'
//           onChange={this.onChangePassword}
//         />
//       </>
//     );
//   };

//   render() {
//     const { registeredPersion, showSubmitError, errorMsg, redirectToHome } = this.state;

//     // if (Cookies.get('jwt_token') || redirectToHome) {
//     //   return <Navigate to="/" />;
//     // }

//     return (
//       <div className="login-form-comtainer">
//         <form onSubmit={this.submitForm}>
//           {registeredPersion ? (
//             <h2 className="from-heading">Sign In</h2>
//           ) : (
//             <h2 className="from-heading">Sign Up</h2>
//           )}
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           {registeredPersion ? (
//             <button type="submit" className='login-button'>Sign In</button>
//           ) : (
//             <button type="submit" className='login-button'>Sign Up</button>
//           )}
//           <div className="from-help-check">
//             <div className='remember-me'>
//               <input
//                 type="checkbox"
//                 id="remember-me"
//                 onChange={this.toggleShowPassword}
//               />
//               <label htmlFor="remember-me">Remember me</label>
//             </div>
//             <button type="button" className="help-link">Need Help</button>
//           </div>
//           {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//           <p>
//             {registeredPersion ? (
//               <>
//                 Already have an account?{' '}
//                 <button type="button" className="toggle-btn" onClick={this.toggleRegistration}>
//                   Sign in
//                 </button>
//               </>
//             ) : (
//               <>
//                 New to WatchNow?{' '}
//                 <button type="button" className='toggle-btn' onClick={this.toggleRegistration}>
//                   Sign up now
//                 </button>
//               </>
//             )}
//           </p>
//           <small>
//             This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
//             <button type="button" className='learn-more'>Learn more.</button>
//           </small>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

import {Component} from 'react'
import Cookies from 'js-cookie'
import { Navigate} from 'react-router-dom'

import {auth} from '../Firebase/Firebase'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    registeredPerson: false,
    showPassword: false,
    redirectToHome: false, // Added state for redirection
  
  }


  toggleRegistration = () => {
    this.setState(prevState => ({
      registeredPerson: !prevState.registeredPerson,
    }))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
  }

  onSubmitFailure = errorCode => {
    let errorMsg = ''
    switch (errorCode) {
      case 'auth/user-not-found':
        errorMsg = 'User not found. Please sign up.'
        break
      case 'auth/wrong-password':
        errorMsg = 'Incorrect password. Please try again.'
        break
      case 'auth/invalid-email':
        errorMsg = 'Please provide a valid email address.'
        break
      case 'auth/invalid-credential':
        errorMsg = 'Please provide correct credentials.'
        break
      case 'auth/weak-password':
        errorMsg = 'Password should be at least 6 characters.'
        break
      default:
        errorMsg = errorCode
    }

    // Remove 'Firebase: ' prefix
    errorMsg = errorMsg.replace('Firebase: ', '')

    // Remove '(auth/weak-password)' suffix
    errorMsg = errorMsg.replace(/\(.*\)/, '')

    this.setState({showSubmitError: true, errorMsg})
  }

  signInWithEmailAndPassword = () => {
    const {username, password} = this.state
    auth
      .signInWithEmailAndPassword(username, password)
      .then(userCredential => {
        const jwtToken = userCredential.user.getIdToken()
        this.onSubmitSuccess(jwtToken)
        this.redirectToHome() // Redirect to home page
      })
      .catch(error => {
        this.onSubmitFailure(error.message)
      })
  }

  signUpWithEmailAndPassword = () => {
    const {username, password} = this.state
    auth
      .createUserWithEmailAndPassword(username, password)
      .then(userCredential => {
        const jwtToken = userCredential.user.getIdToken()
        this.onSubmitSuccess(jwtToken)
        this.redirectToHome() // Redirect to home page
      })
      .catch(error => {
        this.onSubmitFailure(error.message)
      })
  }

  redirectToHome = () => {
    this.setState({redirectToHome: true})
  }

  submitForm = event => {
    event.preventDefault()
    const {registeredPerson} = this.state
    if (registeredPerson) {
      this.signInWithEmailAndPassword()
    } else {
      this.signUpWithEmailAndPassword()
    }
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME/EMAIL
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          required
        />
      </>
    )
  }

  render() {
    const {
      showSubmitError,
      errorMsg,
      registeredPerson,
      redirectToHome,
    } = this.state
    if (Cookies.get('jwt_token') || redirectToHome) {
      return <  Navigate to="/" />
    }

    return (
      <div className="login-form-container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/ddsbr0cfw/image/upload/v1714556131/logoo_h43ryr.png"
            alt="logo"
          />
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          {registeredPerson ? (
            <h2 className="from-heading">Sign In</h2>
          ) : (
            <h2 className="from-heading">Sign Up</h2>
          )}
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          {registeredPerson ? (
            <button type="submit" className="login-button">
              Sign In
            </button>
          ) : (
            <button type="submit" className="login-button">
              Sign Up
            </button>
          )}

          <div className="from-help">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                onChange={this.toggleShowPassword}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="help-link">
              Need help?
            </button>
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <p>
            {registeredPerson ? (
              <>
                Already have an account?
                <button
                  type="button"
                  className="rigistredToggle"
                  onClick={this.toggleRegistration}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                New to WatchNow?
                <button
                  type="button"
                  className="rigistredToggle"
                  onClick={this.toggleRegistration}
                >
                  Sign up now
                </button>
              </>
            )}
          </p>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <button type="button" className="learn-more-link">
              Learn more.
            </button>
          </small>
        </form>
      </div>
    )
  }
}

export default LoginForm