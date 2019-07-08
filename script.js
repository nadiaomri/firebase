var firebaseConfig = {
    apiKey: "AIzaSyCR4DeGFLJN2AhP9-4yK7tfgibzKtzgAg8",
    authDomain: "gomycode-32bbe.firebaseapp.com",
    databaseURL: "https://gomycode-32bbe.firebaseio.com",
    projectId: "gomycode-32bbe",
    storageBucket: "",
    messagingSenderId: "638242314043",
    appId: "1:638242314043:web:21c9b540de0c0394"
  };
  firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref('myDatabase');

function submitForm(e){
  e.preventDefault();
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  //var message=document.getElementById('message').value;
  console.log(name)
  console.log(email)
  saveMessage(name,email,phone);
}
document.getElementById('contactForm').addEventListener('submit',submitForm);

function saveMessage(name,email,phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone
    //message:message
  });
}
