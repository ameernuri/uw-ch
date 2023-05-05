function LoginForm() {
  return (
    <div className='login-form-container'>
      <form className='login-form'>
        <input
          type='email'
          placeholder='Email address'
          className='login-form-input'
        />
        <input
          type='password'
          placeholder='Password'
          className='login-form-input'
        />
        <button type='submit' className='login-form-button'>
          Login
        </button>
      </form>
    </div>
  )
}

ReactDOM.render(<LoginForm />, document.getElementById('root'))
