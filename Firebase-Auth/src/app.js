/* Obtener datos de input de formularios */
console.log('Felicidades estás conectado');

const txtEmail = document.getElementById('txtEmail');
console.log(txtEmail);

const txtPassword = document.getElementById('txtPassword');

const btnLogIn = document.getElementById('btnLogIn');
console.log(btnLogIn);

const btnSignUp = document.getElementById('btnSignUp');
console.log(btnSignUp);

const btnLogoUt = document.getElementById('btnLogoUt');
console.log(btnLogoUt);


/* Crear constante donde se almacenará la promesa con Firebase.auth() */
const auth = firebase.auth();

/* Evento Login */
/* e => {} Agrega Función Callback, para que cuando se origine click ocurra */
btnLogIn.addEventListener('click', e => {
/* Obtener valor de id y password */
  const email = txtEmail.value;
  const pass = txtPassword.value;
  /* Crear método de login (signin) con método auth.signInWhithEmailAndPassword(email, pass) */
  auth.signInWithEmailAndPassword(email, pass).then(console.log('Estas Logueado'))

  /* Podemos usar el método catch para mostrar cualquier error en la consola */
    .catch(e => console.log(e.message));
});

/* Evento Sign Up */
btnSignUp.addEventListener('click', e => {
  /* Obtener email y password */
  console.log('Listen to the click');
  const email = txtEmail.value;
  const pass = txtPassword.value;
  console.log(email, pass);

  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

/* Evento para cerrar sesión */
btnLogoUt.addEventListener('click', e => {
  firebase.auth().signOut();
});

/* Evento en tiempo real para ver el status del usuario */
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogoUt.classList.remove('hide');
  } else {
    console.log('No logueado');
    btnLogoUt.classList.add('hide');
  }
});
