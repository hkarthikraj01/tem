// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyC19nHyu3_0wWSzG1nGypNQRoj0-WS-FFw",
    authDomain: "quote-96580.firebaseapp.com",
    databaseURL: "https://quote-96580.firebaseio.com",
    projectId: "quote-96580",
    storageBucket: "quote-96580.appspot.com",
    messagingSenderId: "44597524034",
    appId: "1:44597524034:web:0610132491fd3e9cae1fdb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('quote');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var need = getInputVal('need');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var q1 = getInputVal('q1');
   
    var q3 = getInputVal('q3');
   
    var q5 = getInputVal('q5');
   
    var q7 = getInputVal('q7');
    var q8 = getInputVal('q8');
    
  
    // Save message
    saveMessage(name, need, email, phone,  q1, q3, q5, q7, q8);
  
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
  function saveMessage(name, need, email, phone, q1, q3, q5, q7, q8){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      need:need,
      email:email,
      phone:phone,
      q1:q1,
      q3:q3,
      q5:q5,
      q7:q7,
      q8:q8
    });
  }