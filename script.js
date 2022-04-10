const accordion = document.getElementsByClassName("accordion-detail");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// LOGIN Authentification:
let loginB = document.getElementById("login")