const download = document.getElementById('download');

var storageRef = firebase.storage().ref('assignments/NOTES Unit-1 OOSD BY SKK.pdf');

// Get the download URL
storageRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  download.href = url;
  console.log(url);
  
}).catch(function(error) {
   console.log(error)
});