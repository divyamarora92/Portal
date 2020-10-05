const studentRegisterForm = document.querySelector('.studentRegister');
const studentLoginForm = document.querySelector('.studentLogin');

// student register form
studentRegisterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = studentRegisterForm.email.value;
    const password = studentRegisterForm.password.value;
    const repassword = studentRegisterForm.repassword.value;
    const fname = studentRegisterForm.firstname.value;
    const lname = studentRegisterForm.lastname.value;

    if(password !== repassword){
        studentRegisterForm.querySelector('.error').textContent = "Password does not match";
    }
    
    if(password.length < 6){
        studentRegisterForm.querySelector('.error').textContent = "Password should not be less than 6 characters";
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('registered', user);
        studentRegisterForm.reset();
        
      })
      .catch(error => {
        studentRegisterForm.querySelector('.error').textContent = error.message;
      });
  });


  // studentlogin form
studentLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = studentLoginForm.email.value;
    const password = studentLoginForm.password.value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {

        console.log('logged in', user);
        studentLoginForm.reset();
        window.location.href = "home.html";
      })
      .catch(error => {
        studentLoginForm.querySelector('.error').textContent = error.message;
      });
  });

  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //      window.location.href = "home.html";
  //   } else{
  //       window.location.href = "index.html";
  //   }
  // });


//   sign out
// signOut.addEventListener('click', () => {
//     firebase.auth().signOut()
//       .then(() => console.log('signed out'));
//   });