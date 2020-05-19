// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyCs942o5j1RaeMeWNZdMA_EoKEWSL_H6Ao",
  authDomain: "contactform-4160c.firebaseapp.com",
  databaseURL: "https://contactform-4160c.firebaseio.com",
  projectId: "contactform-4160c",
  storageBucket: "contactform-4160c.appspot.com",
  messagingSenderId: "289550506731",
  appId: "1:289550506731:web:bcc61b5679046f28237cae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}