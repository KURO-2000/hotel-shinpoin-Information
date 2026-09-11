const MAP = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const MAP_LINK = item => {
  const direct = (item?.mapUrl || '').trim();
  if (direct) return direct;
  return MAP(item?.mapQuery || item?.name || '');
};

let state = { lang:null, page:"home", category:null };

function esc(s){
  return String(s).replace(/[&<>"']/g,m=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}

function T(){
  return SITE_DATA.text[state.lang];
}

function go(page, category=null){
  state.page=page;
  state.category=category;
  render();
  window.scrollTo(0,0);
}

function setLang(lang){
  state.lang=lang;
  state.page="home";
  state.category=null;
  localStorage.setItem("hotelGuideLang",lang);
  render();
}

function resetLang(){
  state.lang=null;
  state.page="home";
  state.category=null;
  localStorage.removeItem("hotelGuideLang");
  render();
}

function topbar(){
  return `<div class="topbar">
    <div class="brand">${esc(SITE_DATA.hotelName)}</div>
    <div class="top-actions">
      <button class="lang-btn ${state.lang==="ja"?"active":""}" onclick="setLang('ja')">日本語</button>
      <button class="lang-btn ${state.lang==="en"?"active":""}" onclick="setLang('en')">English</button>
    </div>
  </div>`;
}

function footer(){
  return `<div class="footer">${esc(SITE_DATA.hotelName)} · Information Guide</div>`;
}

function languageScreen(){
  const ja = SITE_DATA.text.ja;
  return `<div class="language-screen">
    <div class="language-box">
      <div class="hotel">${esc(SITE_DATA.hotelName)}</div>
      <h1>${esc(ja.welcomeTitle)}</h1>
      <p>${esc(ja.languagePrompt1)}<br>${esc(ja.languagePrompt2)}</p>
      <button class="language-choice" onclick="setLang('ja')">日本語</button>
      <button class="language-choice" onclick="setLang('en')">English</button>
    </div>
  </div>`;
}

function home(){
  const L=T();
  const menus=[
    ["stations","🚉",L.stations,L.menuDescriptions.stations],
    ["convenience","🏪",L.convenience,L.menuDescriptions.convenience],
    ["restaurants","🍽️",L.restaurants,L.menuDescriptions.restaurants],
    ["parking","🚗",L.parking,L.menuDescriptions.parking],
    ["baggage","📦",L.baggage,L.menuDescriptions.baggage],
    ["airport","🚌",L.airport,L.menuDescriptions.airport],
];

if(state.lang === "en"){
  menus.push(["remote","🎛️",L.remote,L.menuDescriptions.remote]);
}

  return `${topbar()}
  <div class="hero"><h1>${esc(L.title)}</h1><p>${esc(L.subtitle)}</p></div>
  <div class="grid">
    ${menus.map(m=>`<button class="menu-card" onclick="go('${m[0]}')">
      <div class="emoji">${m[1]}</div>
      <div><strong>${esc(m[2])}</strong><br><span>${esc(m[3])}</span></div>
    </button>`).join("")}
  </div>${footer()}`;
}

function pageWrap(title,body,subtitle=""){
  const L=T();
  return `${topbar()}<main class="content">
    <button class="back" onclick="go('home')">← ${esc(L.back)}</button>
    <div class="page-head"><h2>${esc(title)}</h2>${subtitle?`<p>${esc(subtitle)}</p>`:""}</div>
    ${body}
  </main>${footer()}`;
}

function placesPage(title, list, emoji){
  const L=T();
  return pageWrap(title,`
    <div class="notice">${esc(L.mapNote)}</div>
    <div class="cards">
      ${list.map(x=>`<div class="place-card">
        <h3>${emoji} ${esc(x.name)}</h3>
        <div class="actions">
          <a class="primary" href="${MAP_LINK(x)}" target="_blank" rel="noopener">${esc(L.maps)}</a>
        </div>
      </div>`).join("")}
    </div>
  `);
}

function stations(){
  return placesPage(T().stations, SITE_DATA.stations[state.lang], "🚉");
}

function convenience(){
  return placesPage(T().convenience, SITE_DATA.convenience[state.lang], "🏪");
}

function restaurantMenu(){
  const L=T();
  return pageWrap(L.restaurants,`
    <div class="category-list">
      ${Object.entries(L.categories).map(([k,v])=>`
        <button class="category-card" onclick="go('restaurantCategory','${k}')">
          <b>${esc(v)}</b><span class="arrow">›</span>
        </button>
      `).join("")}
    </div>
  `);
}

function restaurantCategory(){
  const L=T();
  const key=state.category;
  const name=L.categories[key] || L.restaurants;
  const list=SITE_DATA.restaurants[state.lang][key] || [];

  return `${topbar()}<main class="content">
    <button class="back" onclick="go('restaurants')">← ${esc(L.back)}</button>
    <div class="page-head"><h2>${esc(name)}</h2><p>${esc(L.mapNote)}</p></div>
    <div class="cards">
      ${list.map(x=>`<div class="place-card">
        <h3>🍽️ ${esc(x.name)}</h3>
        <div class="actions">
          <a class="primary" href="${MAP_LINK(x)}" target="_blank" rel="noopener">${esc(L.maps)}</a>
        </div>
      </div>`).join("")}
    </div>
  </main>${footer()}`;
}

function parking(){
  const L=T();
  const cards=SITE_DATA.parking[state.lang];

  return pageWrap(L.parking,`
    <div class="notice">${esc(SITE_DATA.parkingNotice[state.lang])}</div>
    <div class="cards">
      ${cards.map(c=>`
        <div class="info-card">
          <h3>${esc(c.name)}</h3>
          ${c.sections.map(s=>`
            <p><b>${esc(s.title)}</b></p>
            <ul class="detail-list">${s.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
          `).join("")}
          <div class="actions">
            <a class="primary" href="${MAP_LINK(c)}" target="_blank" rel="noopener">${esc(L.maps)}</a>
          </div>
        </div>
      `).join("")}
    </div>
  `);
}

function baggage(){
  const L=T();
  const B=SITE_DATA.baggage[state.lang];

  const intro = B.intro.length ? `
    <div class="info-card">
      ${B.intro.map(p=>`<p>${esc(p)}</p>`).join("")}
    </div>` : "";

  const cards = B.cards.map(c=>`
    <div class="info-card">
      <h3>${esc(c.title)}</h3>
      ${c.note ? `<p>${esc(c.note)}</p>` : ""}
      <div class="actions">
        <a class="primary" href="${SITE_DATA.externalLinks[c.linkKey]}" target="_blank" rel="noopener">${esc(c.button)}</a>
      </div>
    </div>
  `).join("");

  return pageWrap(L.baggage,`${intro}<div class="cards" style="margin-top:12px">${cards}</div>`);
}

function airport(){
  const L=T();
  const A=SITE_DATA.airport[state.lang];

  return pageWrap(L.airport,`
    <div class="info-card">
      <h3>${esc(A.title)}</h3>
      <p>${esc(A.description)}</p>
      <div class="actions">
        <a class="primary" href="${SITE_DATA.externalLinks.airportBusStop}" target="_blank" rel="noopener">${esc(A.stopButton)}</a>
        <a class="secondary" href="${SITE_DATA.externalLinks.airportBusTimetable}" target="_blank" rel="noopener">${esc(A.timetableButton)}</a>
      </div>
    </div>
  `);
}

function remote(){
  const L=T();
  const R=SITE_DATA.remote[state.lang];

  return pageWrap(L.remote,`
    <div class="cards">
      ${R.items.map(item=>`
        <div class="info-card">
          <h3>${esc(item.title)}</h3>

          <div class="remote-image">
            <img
              src="${esc(item.image)}"
              alt="${esc(item.title)}"
              style="width:100%; height:auto; display:block; border-radius:12px;"
            >
          </div>

        </div>
      `).join("")}
    </div>
  `);
}

function render(){
  const app=document.getElementById("app");

  if(!state.lang){
    app.innerHTML=languageScreen();
    return;
  }

  const pages={
    home,
    stations,
    convenience,
    restaurants:restaurantMenu,
    restaurantCategory,
    parking,
    baggage,
    airport,
    remote
  };

  app.innerHTML=(pages[state.page]||home)();
}

render();
