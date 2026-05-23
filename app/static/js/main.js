/* ══════════════════════════════════════════
   FC BARCELONA 2015 — MAIN.JS
   ══════════════════════════════════════════ */

/* ── PLAYERS DATA ── */
const PLAYERS = [
  {
    num: 1,
    name: "Marc-André ter Stegen",
    pos: "Goleiro",
    age: 23,
    birth: "Mönchengladbach, Alemanha",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ter_Stegen_2019.jpg/440px-Ter_Stegen_2019.jpg"
  },
  {
    num: 2,
    name: "Dani Alves",
    pos: "Lateral Direito",
    age: 32,
    birth: "Juazeiro, Brasil",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dani_Alves_%28cropped%29.jpg/440px-Dani_Alves_%28cropped%29.jpg"
  },
  {
    num: 3,
    name: "Gerard Piqué",
    pos: "Zagueiro",
    age: 28,
    birth: "Barcelona, Espanha",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gerard_Piqu%C3%A9_2018.jpg/440px-Gerard_Piqu%C3%A9_2018.jpg"
  },
  {
    num: 14,
    name: "Javier Mascherano",
    pos: "Zagueiro / Volante",
    age: 31,
    birth: "San Lorenzo, Argentina",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mascherano_%28cropped%29.jpg/440px-Mascherano_%28cropped%29.jpg"
  },
  {
    num: 18,
    name: "Jordi Alba",
    pos: "Lateral Esquerdo",
    age: 26,
    birth: "L'Hospitalet, Espanha",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jordi_Alba_%28cropped%29.jpg/440px-Jordi_Alba_%28cropped%29.jpg"
  },
  {
    num: 4,
    name: "Ivan Rakitić",
    pos: "Meia Central",
    age: 27,
    birth: "Möhlin, Suíça",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rakiti%C4%87_2018.jpg/440px-Rakiti%C4%87_2018.jpg"
  },
  {
    num: 5,
    name: "Sergio Busquets",
    pos: "Volante",
    age: 26,
    birth: "Sabadell, Espanha",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sergio_Busquets_2018.jpg/440px-Sergio_Busquets_2018.jpg"
  },
  {
    num: 6,
    name: "Andrés Iniesta",
    pos: "Meia Armador",
    age: 31,
    birth: "Fuentealbilla, Espanha",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Andres_iniesta_2012.jpg/440px-Andres_iniesta_2012.jpg"
  },
  {
    num: 11,
    name: "Neymar Jr.",
    pos: "Ponta Esquerda",
    age: 23,
    birth: "Mogi das Cruzes, Brasil",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Neymar_-_2014_FIFA_World_Cup_%28cropped%29.jpg/440px-Neymar_-_2014_FIFA_World_Cup_%28cropped%29.jpg"
  },
  {
    num: 10,
    name: "Lionel Messi",
    pos: "Meia-Atacante",
    age: 27,
    birth: "Rosário, Argentina",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/440px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
  },
  {
    num: 9,
    name: "Luis Suárez",
    pos: "Centroavante",
    age: 28,
    birth: "Salto, Uruguai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Luis_Su%C3%A1rez_2018.jpg/440px-Luis_Su%C3%A1rez_2018.jpg"
  }
];

/* ── RENDER PLAYERS ── */
function renderPlayers() {
  const grid = document.getElementById('playersGrid');
  if (!grid) return;

  grid.innerHTML = PLAYERS.map(p => `
    <article class="player-card reveal">
      <div class="player-img-wrap">
        <img
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg,#004d98,#a50044)'"
        />
        <div class="player-img-overlay"></div>
        <div class="player-num-badge">${p.num}</div>
      </div>
      <div class="player-body">
        <span class="player-pos-tag">${p.pos}</span>
        <h2 class="player-name">${p.name}</h2>
        <div class="player-details">
          <div class="pd-row">
            <span class="pd-label">Idade (2015)</span>
            <span class="pd-val">${p.age} anos</span>
          </div>
          <div class="pd-row">
            <span class="pd-label">Nascimento</span>
            <span class="pd-val">${p.birth}</span>
          </div>
          <div class="pd-row">
            <span class="pd-label">Número</span>
            <span class="pd-val">#${p.num}</span>
          </div>
        </div>
      </div>
      <div class="player-accent-bar"></div>
    </article>
  `).join('');

  // Trigger reveal after paint
  requestAnimationFrame(() => observeReveal());
}

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const dot    = document.getElementById('cursorDot');
  if (!cursor || !dot) return;

  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animCursor() {
    cx += (mx - cx) * 0.14;
    cy += (my - cy) * 0.14;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .chip, .player-card, .autor-card, .tl-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1.7)';
      cursor.style.borderColor = 'rgba(165,0,68,0.7)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.borderColor = 'rgba(237,187,0,0.6)';
    });
  });
}

/* ── NAVBAR SCROLL ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  const btn = document.getElementById('menuBtn');
  const mob = document.getElementById('navMobile');
  if (btn && mob) {
    btn.addEventListener('click', () => mob.classList.toggle('open'));
  }
}

/* ── SCROLL REVEAL ── */
function observeReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
}

/* ── JANGLE CHAT ── */
const JANGLE_SYSTEM = `Você é o Jangle, um assistente especialista apaixonado pelo FC Barcelona da temporada 2014-2015. 
Responda sempre em português do Brasil de forma natural e entusiasmada. 
Seja informativo e preciso. Conheça profundamente: o elenco completo, estatísticas, os três títulos conquistados 
(La Liga com 94 pontos, Copa del Rey contra o Athletic Bilbao, Champions League contra a Juventus em Berlim), 
o trio MSN (Messi 58 gols, Suárez 25 La Liga, Neymar — 122 gols juntos), o técnico Luis Enrique, 
jogadores como Xavi, Iniesta, Busquets, Rakitić, Jordi Alba, Dani Alves, Piqué, Ter Stegen, Mascherano. 
Mantenha respostas concisas (máximo 3 parágrafos curtos).`;

let chatHistory = [];

function appendMsg(role, text) {
  const box = document.getElementById('chatMessages');
  if (!box) return null;
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  if (role === 'ai') {
    div.innerHTML = `<div class="msg-label">Jangle</div><div class="msg-bubble">${text}</div>`;
  } else {
    div.innerHTML = `<div class="msg-bubble">${text}</div>`;
  }
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  return div;
}

function showTyping() {
  const box = document.getElementById('chatMessages');
  if (!box) return null;
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = `<div class="msg-label">Jangle</div><div class="msg-bubble typing-dots"><span></span><span></span><span></span></div>`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  return div;
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const btn   = document.getElementById('sendBtn');
  if (!input || !btn) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  btn.disabled = true;

  // Hide chips after first message
  const chips = document.getElementById('chatChips');
  if (chips) chips.style.display = 'none';

  appendMsg('user', text);
  chatHistory.push({ role: 'user', content: text });

  const typing = showTyping();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: JANGLE_SYSTEM,
        messages: chatHistory
      })
    });
    const data = await res.json();
    const reply = (data.content || []).map(b => b.text || '').join('') || 'Não consegui responder agora. Tente novamente!';

    if (typing) typing.remove();
    appendMsg('ai', reply);
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (e) {
    if (typing) typing.remove();
    appendMsg('ai', 'Ops! Houve um erro ao conectar ao Jangle. Verifique sua conexão e tente novamente.');
  }

  btn.disabled = false;
  input.focus();
}

function quickSend(q) {
  const input = document.getElementById('chatInput');
  if (!input) return;
  input.value = q;
  sendMessage();
}

function initChat() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initChat();
  renderPlayers();
  observeReveal();

  // Mark reveal on existing elements
  document.querySelectorAll(
    '.historia-text, .historia-aside, .quote-block, .mini-stats, .tl-card, .tb-item, .autor-card, .ic-rows'
  ).forEach(el => el.classList.add('reveal'));

  setTimeout(observeReveal, 100);
});
