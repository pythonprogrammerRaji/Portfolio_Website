// ================================================
//   DARK / LIGHT THEME TOGGLE
// ================================================

function toggleTheme() {
    var html = document.documentElement;
    var btn  = document.getElementById('themeBtn');

    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light';
    } else {
        html.setAttribute('data-theme', 'light');
        btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';
    }
}


// ================================================
//   TYPEWRITER EFFECT
// ================================================

var roles = [
    { text: "Junior Full Stack Developer", color: "#2563eb" },
    // { text: "Frontend Developer",   color: "#e96443" },
    { text: "MCA Graduates",          color: "#16a34a" },
    { text: "Freelancer Web Developer",         color: "#9333ea" }
];

var roleIndex = 0;
var charIndex = 0;
var typeSpan  = document.querySelector(".typewriter_text");

function typeText() {
    var current = roles[roleIndex];

    if (charIndex <= current.text.length) {
        typeSpan.innerHTML = '<span style="color:' + current.color + '">'
                           + current.text.slice(0, charIndex)
                           + '</span>';
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        // Wait then start erasing
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    var current = roles[roleIndex];

    if (charIndex >= 0) {
        typeSpan.innerHTML = '<span style="color:' + current.color + '">'
                           + current.text.slice(0, charIndex)
                           + '</span>';
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        // Move to next role
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, 500);
    }
}

// Start typewriter on page load
document.addEventListener("DOMContentLoaded", function () {
    if (typeSpan && roles.length > 0) {
        setTimeout(typeText, 600);
    }
});

function sendMessage() {

    emailjs.init({ publicKey: '9C1FKuzmDc49CH88T' });

    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    var params = {
        from_name : name,
        reply_to  : email,
        message   : message
    };

    emailjs.send('service_tk2cjt8', 'template_i7kd7il', params)
    .then(function () {
        alert("Message sent successfully! ✅ I will get back to you soon.");
        document.getElementById('name').value    = '';
        document.getElementById('email').value   = '';
        document.getElementById('message').value = '';
    })
    .catch(function () {
        alert("Message not sent. Please try again 🙄");
    });
}