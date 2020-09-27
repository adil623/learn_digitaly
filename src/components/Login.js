import React from 'react';

const Login = () => {
  return (
    <div>
      <section className='section-border-bottom login-signup'>
        <div className='container'>
          <div className='row'>
            <div className='login-main template-form'>
              <h4>
                Please Log In, or <a href='#'>Sign Up</a>
              </h4>
              <div className='template-space'></div>
              <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6'>
                  {' '}
                  <a href='#' className='btn btn-facebook btn-block'>
                    Facebook
                  </a>{' '}
                </div>
                <div className='col-xs-6 col-sm-6 col-md-6'>
                  {' '}
                  <a href='#' className='btn btn-google btn-block'>
                    Google
                  </a>{' '}
                </div>
              </div>
              <div className='login-or'>
                <hr className='hr-or' />
                <span className='span-or'>or</span>{' '}
              </div>
              <form>
                <div class='form-group'>
                  <label for='inputUsernameEmail'>Username or email</label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputUsernameEmail'
                  />
                </div>
                <div class='form-group'>
                  {' '}
                  <a class='pull-right' href='#'>
                    Forgot password?
                  </a>
                  <label for='inputPassword'>Password</label>
                  <input
                    type='password'
                    class='form-control'
                    id='inputPassword'
                  />
                </div>
                <div class='checkbox pull-right'>
                  <label>
                    <input type='checkbox' />
                    Remember me{' '}
                  </label>
                </div>
                <button type='submit' class='btn btn btn-primary'>
                  {' '}
                  Log In{' '}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
