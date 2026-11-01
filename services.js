const services = [
  {
    "title": "Web Application Development",
    "tag": "WEB DEVELOPMENT",
    "description": "Build responsive websites, portals and web applications designed around real business needs.",
    "features": [
      "Responsive websites",
      "Business portals",
      "User-friendly interfaces"
    ],
    "image": "assets/images/web-development.jpg"
  },
  {
    "title": "Database Design & Engineering",
    "tag": "DATABASES",
    "description": "Organize information with reliable database structures, queries, backups and secure data handling.",
    "features": [
      "Database design",
      "SQL development",
      "Data management"
    ],
    "image": "assets/images/database.jpg"
  },
  {
    "title": "Cybersecurity & Ethical Hacking",
    "tag": "CYBERSECURITY",
    "description": "Improve digital safety through authorized security reviews, vulnerability awareness and practical protection guidance.",
    "features": [
      "Security assessments",
      "Risk awareness",
      "Defensive security"
    ],
    "image": "assets/images/cybersecurity.jpg"
  },
  {
    "title": "Network Engineering",
    "tag": "NETWORKING",
    "description": "Plan, configure and troubleshoot wired and wireless networks for dependable connectivity.",
    "features": [
      "Network setup",
      "Router and switch configuration",
      "Troubleshooting"
    ],
    "image": "assets/images/networking.jpg"
  },
  {
    "title": "Hospital Management Systems",
    "tag": "HEALTHCARE SYSTEMS",
    "description": "Support healthcare workflows with organized patient, appointment and records-management software.",
    "features": [
      "Patient records",
      "Appointments",
      "Workflow management"
    ],
    "image": "assets/images/hospital.jpg"
  },
  {
    "title": "Hotel & Business Systems",
    "tag": "BUSINESS SYSTEMS",
    "description": "Create practical digital tools for bookings, operations, customer records and everyday business processes.",
    "features": [
      "Booking workflows",
      "Business records",
      "Operations tools"
    ],
    "image": "assets/images/hotel.jpg"
  },
  {
    "title": "IT Support & System Maintenance",
    "tag": "IT SUPPORT",
    "description": "Diagnose computer issues, maintain systems and help keep devices performing reliably.",
    "features": [
      "Computer troubleshooting",
      "System maintenance",
      "Software installation"
    ],
    "image": "assets/images/itsupport.jpg"
  },
  {
    "title": "Programming & Software Development",
    "tag": "SOFTWARE",
    "description": "Develop useful software solutions, automate tasks and turn ideas into working applications.",
    "features": [
      "Custom software",
      "Python programming",
      "Automation"
    ],
    "image": "assets/images/programming.jpg"
  },
  {
    "title": "System Security Testing",
    "tag": "SECURITY TESTING",
    "description": "Test systems with permission, document weaknesses and recommend steps to strengthen defenses.",
    "features": [
      "Authorized testing",
      "Findings and reports",
      "Security improvements"
    ],
    "image": "assets/images/security-testing.jpg"
  }
];

function serviceCard(service) {
  const features = service.features.map(item => `<li>${item}</li>`).join("");
  return `<article class="service-card">
    <div class="service-media">
      <img class="service-image" src="${service.image}" alt="${service.title} in action" loading="lazy"
           onerror="this.style.display='none';this.parentElement.classList.add('image-fallback')">
    </div>
    <div class="service-copy">
      <span class="service-icon">${service.tag}</span><h3>${service.title}</h3>
      <p>${service.description}</p><ul class="service-features">${features}</ul>
      <a class="service-link" href="contact.html?service=${encodeURIComponent(service.title)}">Enquire about this service →</a>
    </div></article>`;
}
const serviceContainer = document.getElementById("services-container");
if (serviceContainer) {
  const fullPage = document.body.classList.contains("all-services");
  serviceContainer.innerHTML = (fullPage ? services : services.slice(0,3)).map(serviceCard).join("");
}
