document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('recoveryForm');

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const payload = {
      email: email,
      password: password,
    };
    fetch('/api/session/useradmin/recovery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        if (response.ok) {
          swal('Password Recovered', 'Login with your Email and your new Password', 'success').then(function () {
            window.location.href = '/';
          });
        } else {
          response.json().then(function () {
            {
              swal('User does not exist', 'Password could not be recovered', 'error');
            }
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});
