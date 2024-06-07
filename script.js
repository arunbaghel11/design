document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;
    
    const mailtoLink = `mailto:arunbaghe192004@gmail.com?subject=New%20Query%20from%20${phone}&body=${encodeURIComponent(query)}`;
    
    window.location.href = mailtoLink;
});
