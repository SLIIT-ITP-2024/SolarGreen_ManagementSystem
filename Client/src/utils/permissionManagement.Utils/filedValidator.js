const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validateUsername = (username) => {
    // Add your custom validation logic for username here
    return username.length >= 3;
  };
  
  const validatePassword = (password) => {
    // Add your custom validation logic for password here
    return password.length >= 6;
  };
  
  const validateForm = (email, username, password) => {
    const errors = {};
  
    if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!validateUsername(username)) {
      errors.username = 'Username must be at least 3 characters long';
    }
  
    if (!validatePassword(password)) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };
  
  export { validateForm };
  