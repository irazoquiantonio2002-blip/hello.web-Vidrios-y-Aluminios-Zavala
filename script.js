const ZAVALA_WHATSAPP_NUMBER = "";

const loaderStartedAt = performance.now();
document.body.classList.add("is-loading");

window.addEventListener("load", () => {
  const elapsed = performance.now() - loaderStartedAt;
  const delay = Math.max(0, 2300 - elapsed);
  window.setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.classList.remove("is-loading");
  }, delay);
});

const nav = document.getElementById("nav");
const ham = document.getElementById("ham");
const mob = document.getElementById("mob");

const setNavState = () => {
  nav.classList.toggle("scrolled", window.scrollY > 18);
};

window.addEventListener("scroll", setNavState, { passive: true });
setNavState();

ham?.addEventListener("click", () => {
  const open = !mob.classList.contains("open");
  mob.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  ham.setAttribute("aria-expanded", String(open));
});

mob?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mob.classList.remove("open");
    document.body.classList.remove("nav-open");
    ham?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".rev").forEach((el) => revealObserver.observe(el));

const typeTarget = document.getElementById("twText");
const words = [
  "puertas de aluminio",
  "ventanas corredizas",
  "canceles templados",
  "domos y tragaluces",
  "fachadas de vidrio"
];
let wordIndex = 0;
let charIndex = words[0].length;
let deleting = false;

function typeLoop() {
  if (!typeTarget) return;
  const word = words[wordIndex];
  typeTarget.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) {
    charIndex += 1;
    setTimeout(typeLoop, 72);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1200);
  } else if (charIndex > 1) {
    charIndex -= 1;
    setTimeout(typeLoop, 34);
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 1;
    setTimeout(typeLoop, 320);
  }
}
typeLoop();

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count || 0);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.45 });

document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

const whatsappMessages = {
  general: "Hola, quiero recibir información de Vidrios y Aluminios Zavala.",
  quote: "Hola, quiero solicitar una cotización para un proyecto de vidrio y aluminio.",
  portfolio: "Hola, vi el portafolio de Vidrios y Aluminios Zavala y quiero cotizar un trabajo similar."
};

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  if (ZAVALA_WHATSAPP_NUMBER.trim()) {
    return `https://wa.me/${ZAVALA_WHATSAPP_NUMBER.trim()}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const intent = link.dataset.waIntent || "general";
  const msg = whatsappMessages[intent] || `Hola, quiero cotizar: ${intent}.`;
  link.setAttribute("href", buildWhatsAppUrl(msg));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const form = document.getElementById("cForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("[required]")];
  let valid = true;
  fields.forEach((field) => {
    const ok = Boolean(field.value.trim());
    field.classList.toggle("is-invalid", !ok);
    valid = valid && ok;
  });
  if (!valid) return;

  const data = new FormData(form);
  const message = [
    "Hola, quiero solicitar una cotización con Vidrios y Aluminios Zavala.",
    `Nombre: ${data.get("nombre")}`,
    `Teléfono: ${data.get("telefono")}`,
    `Servicio: ${data.get("tipo")}`,
    `Detalles: ${data.get("mensaje") || "Sin detalles adicionales"}`
  ].join("\n");
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});

const parallaxEls = document.querySelectorAll(".parallax-bg");
function updateParallax() {
  const y = window.scrollY;
  parallaxEls.forEach((el, index) => {
    const speed = index % 2 === 0 ? 0.055 : -0.035;
    el.style.transform = `translate3d(0, ${y * speed}px, 0) scale(1.04)`;
  });
}
window.addEventListener("scroll", updateParallax, { passive: true });
updateParallax();

function createParticles(canvasId, color = "123,147,160") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = 0;
  let height = 0;
  let raf = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * ratio));
    canvas.height = Math.max(1, Math.floor(height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(28, Math.min(72, Math.floor(width / 18)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.6 + .5
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, .62)`;
      ctx.fill();
      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 118) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${color}, ${0.16 * (1 - distance / 118)})`;
          ctx.stroke();
        }
      }
    });
    raf = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
}

createParticles("pcanvas", "255,255,255");
createParticles("pcanvasWhy", "123,147,160");
createParticles("pcanvasGaleria", "156,163,175");
