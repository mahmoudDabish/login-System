function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    if (!email || !password) {
      document.getElementById("validSignInP").innerHTML="All inputs is required";
      return;
    }

    var userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
      showWelcome(userData.name);
    } 
  }

  function signup() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var name = document.getElementById('signup-name').value;

    
    if (!email || !password || !name) {
      document.getElementById("validSignUpP").innerHTML="All inputs is required";
      return;
    }

    if (localStorage.getItem(email)) {
      document.getElementById("emailExisted").innerHTML="email already exists";
    } else {
      var userData = { password, name };
      localStorage.setItem(email, JSON.stringify(userData));

      showWelcome(name);
    }
  }

  function showWelcome(name) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'block';
    document.getElementById('welcome-message').textContent = 'Welcome, ' + name + '!';
  }

  function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'none';
  }

  function showSignup() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('welcome-container').style.display = 'none';
  }

  function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'none';
  }



  