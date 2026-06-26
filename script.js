// Data
const diseases = ["Blood Pressure","Diabetes","Thyroid","Migraine","Obesity","Cervical","Headache","Asthma","Joint Pain","Back Pain","Sciatica","Paralysis","Constipation","Nerve Weakness","PCOD","Insomnia","Hairfall","Psoriasis","Parkinson's","Leucorrhoea","Physical Weakness"];

const services = [
  {icon:"🌬",title:"Yoga & Pranayam",desc:"Guided asana and breathwork sessions for body, mind and prana."},
  {icon:"💧",title:"Naturopathy Treatments",desc:"Mud therapy, enema, steam bath, hot & cold bath and spinal bath."},
  {icon:"🌸",title:"Panchkarma",desc:"Classical detox therapies to cleanse and rejuvenate the body."},
  {icon:"🌱",title:"Natural Diet & Sprouts",desc:"Living food, fresh sprouts and personalised diet plans."},
];

const testimonials = [
  {name:"Sunita Sharma",role:"Sonipat",quote:"Dr. Sindhu की देखरेख में मेरा thyroid पूरी तरह control में आ गया। योग और diet से नई ज़िंदगी मिली है।"},
  {name:"Rajesh Kumar",role:"Model Town",quote:"Years of back pain and sciatica gone after 6 weeks of naturopathy and yoga. Truly life-changing centre."},
  {name:"Meena Verma",role:"Delhi",quote:"PCOD और insomnia दोनों में बहुत राहत मिली। Panchkarma और pranayam का असर अद्भुत है।"},
  {name:"Anil Yadav",role:"Rohtak",quote:"Diabetes का sugar level कम हुआ और 8 kg weight कम किया। Doctor साहिबा का मार्गदर्शन बेहतरीन है।"},
];

const gallery = [
  "yoga-sunset.jpg","IMG-20260604-WA0023.jpg","acupressure-mat.webp","IMG-20260604-WA0024.jpg",
  "meditation-park.webp","IMG-20260604-WA0022.jpg","foot-massager.jpg","IMG-20260604-WA0025.jpg",
  "IMG-20260604-WA0021.jpg","digital-ultrasonic.jpg","IMG-20260604-WA0020.jpg","multi-health-device.jpg",
  "IMG-20260604-WA0026.jpg","tens-life.jpg","IMG-20260604-WA0027.jpg","IMG-20260604-WA0028.jpg","IMG-20260604-WA0029.jpg"
];

// Render
document.getElementById("diseaseChips").innerHTML =
  diseases.map(d => `<div class="pill">${d}</div>`).join("");

document.getElementById("servicesGrid").innerHTML =
  services.map(s => `<div class="card svc"><div class="svc-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join("");

document.getElementById("reviews").innerHTML =
  testimonials.map(t => `<div class="card review"><p>&ldquo;${t.quote}&rdquo;</p><div class="who"><div class="avatar">${t.name[0]}</div><div><div><strong>${t.name}</strong></div><div class="sm muted">${t.role}</div></div></div></div>`).join("");

document.getElementById("gallery").innerHTML =
  gallery.map((g,i) => `<img src="images/${g}" alt="Centre gallery ${i+1}" loading="lazy"/>`).join("");

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Form
const toast = document.getElementById("toast");
function showToast(msg){ toast.textContent = msg; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 3500); }
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = `New enquiry from website%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AEmail: ${data.get("email")}%0AInterested in: ${data.get("interest")}%0AMessage: ${data.get("message")}`;
  // Open WhatsApp with prefilled message
  window.open(`https://wa.me/918295625192?text=${body}`, "_blank");
  showToast("Thank you! Opening WhatsApp to send your enquiry…");
  e.target.reset();
});

document.getElementById("yr").textContent = new Date().getFullYear();
