const studentReference = firebase.firestore().collection('students');
const title = document.getElementById('title');
var uniqueId;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     uniqueId = user.uid
    } 
  });

studentReference.onSnapshot(snapshot => {
    
    snapshot.forEach(doc => {
        if(doc.id === uniqueId){
        console.log(doc.data().name)
        renderName(doc.data().name);
        }
    })
})

function renderName(lname){
    let name = "Welcome " + lname+ "!"
    title.innerText = name;
}



//signout
function signOut(){
    firebase.auth().signOut()
        .then(() => {
          console.log('signed out')
          window.location.href = "index.html";
        });
  }