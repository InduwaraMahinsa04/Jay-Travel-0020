window.alert("Welcome Jay Tours")

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event){
      event.preventDefault(); 
      
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("thankYou").style.display = "block";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    
    var contactIcon = document.querySelector('.contact-icon');
    var contactForm = document.getElementById('contactForm');
    contactIcon.addEventListener('click', function() {
        
        contactForm.scrollIntoView({ behavior: 'smooth' });
    });
});