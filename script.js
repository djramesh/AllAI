window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


function search(){
    let filter = document.getElementById('find').value.toUpperCase();

    let item = document.querySelectorAll('.grid');

    let l= document.getElementsByTagName('p');
    
    let matchFound = false;

    for( var i=0;i<l.length;i++){
        let a= item[i].getElementsByTagName('p')[0];

        let value = a.innerHTML || a.textContent;

        if( value.toUpperCase().indexOf(filter)>-1){
            item[i].style.display="";
            matchFound = true;
        }
        else{
            item[i].style.display= "none";
            
        }
        // if( value.toUpperCase().indexOf(filter)>1){
        //     alert("Please select");
        //     }
      
    }
    // if (!matchFound) {
    //     // alert("No items found!");
    //     displayNoItemsFound();
    // }
    // if (matchFound) {
    //     removeNoItemsFound();
    // } else {
    //     displayNoItemsFound();
    // }
      
  if (!matchFound) {
    document.getElementById('no-items-found').style.display = "block";
  } 
  else {
    document.getElementById('no-items-found').style.display = "none";
  }
    
}


// let messageElement;

// function displayNoItemsFound() {
//     if (messageElement) {
//         messageElement.remove();
//     }

//     messageElement = document.createElement('div');
//     messageElement.textContent = 'No items found.';
//     messageElement.style.color = 'red';

//     document.body.appendChild(messageElement);
// }

// function removeNoItemsFound() {
//     if (messageElement) {
//         messageElement.remove();
//         messageElement = null;
//     }
// }


//for category

// const categorySelect = document.getElementById("category-select");
// const products = document.querySelectorAll(".product");

// categorySelect.addEventListener("change", function() {
//   const selectedCategory = this.value;
  
//   products.forEach(function(product) {
//     if (selectedCategory === "all" || selectedCategory === product.dataset.category) {
//       product.style.display = "block";
//     } else {
//       product.style.display = "none";
//     }
//   });
// });
 
//  const searchButton = document.getElementById('search');
//  const categoryDivs = document.querySelectorAll('.category-writing');
 
//  searchButton.addEventListener('click', () => {
//    categoryDivs.forEach(div => {
//      div.style.display = 'none';
//    });
//  });
 
const searchButton = document.getElementById('find');
const categoryDivs = document.querySelectorAll('.category-writing');
const searchInput = document.getElementById('find');

searchButton.addEventListener('click', () => {
  categoryDivs.forEach(div => {
    div.style.display = 'none';
  });
});

searchInput.addEventListener('blur', () => {
  categoryDivs.forEach(div => {
    div.style.display = 'block'; // Or whatever the original display value was
  });
});

const firebaseConfig = { 
    apiKey: "AIzaSyAQ1D78U9nOvvetlIxuZJtatXcnm-qzwjg",
    authDomain: "all-ai-a98e2.firebaseapp.com",
    databaseURL: "https://all-ai-a98e2-default-rtdb.firebaseio.com",
    projectId: "all-ai-a98e2",
    storageBucket: "all-ai-a98e2.appspot.com",
    messagingSenderId: "376790693097",
    appId: "1:376790693097:web:c938404a8c8362eb396c78"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

var loader= document.getElementById('preloader');

window.addEventListener('load', function(){
  loader.style.display='none';
});

