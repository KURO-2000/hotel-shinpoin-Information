const MAP = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const MAP_LINK = item => {
  const direct = (item?.mapUrl || '').trim();
  if (direct) return direct;
  return MAP(item?.mapQuery || item?.name || '');
};

let state = { lang:null, page:"home", category:null };

// Hidden admin entrance. This is only a shortcut; authentication is enforced by the Worker.
const ADMIN_URL = "https://hotel-shinpoin-admin.hotelshinpoin0701.workers.dev/entry-start";
const ADMIN_SEQUENCE = ["hotel","back","hotel","back","hotel","back","restaurants","korean"];
let adminSequenceIndex = 0;
let adminSequenceTimer = null;

// Fallback only for admins: eight quick taps on the existing hotel brand.
// The Worker still requires Supabase authentication for any editing API.
let adminBrandTapCount=0;
let adminBrandTapTimer=null;
function adminBrandTap(){
  clearTimeout(adminBrandTapTimer);
  adminBrandTapCount++;
  if(adminBrandTapCount>=8){
    adminBrandTapCount=0;
    window.location.href=ADMIN_URL;
    return;
  }
  adminBrandTapTimer=setTimeout(()=>{adminBrandTapCount=0;},20000);
}


function adminTrack(action){
  if(action === ADMIN_SEQUENCE[adminSequenceIndex]){
    adminSequenceIndex += 1;
    clearTimeout(adminSequenceTimer);
    adminSequenceTimer = setTimeout(()=>{ adminSequenceIndex = 0; }, 120000);
    if(adminSequenceIndex === ADMIN_SEQUENCE.length){
      adminSequenceIndex = 0;
      clearTimeout(adminSequenceTimer);
      window.location.href = ADMIN_URL;
      return true;
    }
  }else{
    adminSequenceIndex = action === ADMIN_SEQUENCE[0] ? 1 : 0;
  }
  return false;
}

function adminBack(){
  adminTrack("back");
  history.back();
}

function esc(s){
  return String(s).replace(/[&<>"']/g,m=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}

function T(){
  return SITE_DATA.text[state.lang];
}

function go(page, category=null){
  if(page === "hotelInfo") adminTrack("hotel");
  else if(page === "restaurants") adminTrack("restaurants");
  else if(page === "restaurantCategory" && category === "korean"){
    if(adminTrack("korean")) return;
  }
  state.page=page;
  state.category=category;

  history.pushState(
    {
      lang: state.lang,
      page: state.page,
      category: state.category
    },
    "",
    ""
  );

  render();
  window.scrollTo(0,0);
}

function setLang(lang){
  state.lang=lang;
  state.page="home";
  state.category=null;

  localStorage.setItem("hotelGuideLang",lang);

  history.pushState(
    {
      lang: state.lang,
      page: state.page,
      category: state.category
    },
    "",
    ""
  );

  render();
  window.scrollTo(0,0);
}

function resetLang(){
  state.lang=null;
  state.page="home";
  state.category=null;

  localStorage.removeItem("hotelGuideLang");

  history.pushState(
    {
      lang: null,
      page: "home",
      category: null
    },
    "",
    ""
  );

  render();
  window.scrollTo(0,0);
}

window.addEventListener("popstate", (event)=>{
  if(event.state){
    state.lang=event.state.lang;
    state.page=event.state.page || "home";
    state.category=event.state.category || null;

    if(state.lang){
      localStorage.setItem("hotelGuideLang",state.lang);
    }else{
      localStorage.removeItem("hotelGuideLang");
    }

    render();
    window.scrollTo(0,0);
  }
});

function topbar(){
  return `<div class="topbar">
    <div class="brand" onclick="adminBrandTap()">${esc(SITE_DATA.hotelName)}</div>
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
    ["hotelInfo","🏨",L.hotelInfo,L.menuDescriptions.hotelInfo],
    ["stations","🚉",L.stations,L.menuDescriptions.stations],
    ["convenience","🏪",L.convenience,L.menuDescriptions.convenience],
    ["restaurants","🍽️",L.restaurants,L.menuDescriptions.restaurants],
    ["parking","🚗",L.parking,L.menuDescriptions.parking],
    ["baggage","📦",L.baggage,L.menuDescriptions.baggage],
    ["airport","🚌",L.airport,L.menuDescriptions.airport],
    ["taxi","🚕",L.taxi,L.menuDescriptions.taxi]
];

if(state.lang === "en"){
  menus.push(["remote","🎛️",L.remote,L.menuDescriptions.remote]);
}

  return `${topbar()}
  <div class="hero"><h1>${esc(L.title)}</h1><p>${esc(L.subtitle)}</p></div>
  <div class="grid">
    ${menus.filter(m=>SITE_DATA.menuVisibility?.[m[0]] !== false).map(m=>`<button class="menu-card" onclick="go('${m[0]}')">
      <div class="emoji">${m[1]}</div>
      <div><strong>${esc(m[2])}</strong><br><span>${esc(m[3])}</span></div>
    </button>`).join("")}
  </div>${footer()}`;
}

function pageWrap(title,body,subtitle=""){
  const L=T();
  return `${topbar()}<main class="content">
    <button class="back" onclick="${state.page==='baggage'&&deliveryState.step!=='select'?'deliveryTopBack()':'adminBack()'}">← ${esc(L.back)}</button>
    <div class="page-head"><h2>${esc(title)}</h2>${subtitle?`<p>${esc(subtitle)}</p>`:""}</div>
    ${body}
  </main>${footer()}`;
}

function hotelInfo(){
  const L=T();
  const H=SITE_DATA.hotelInfo[state.lang];

  return pageWrap(L.hotelInfo,`
    <div class="cards">
      ${H.sections.map(section=>`
        <div class="info-card">
          <h3>${esc(section.icon)} ${esc(section.title)}</h3>
          <ul class="detail-list">
            ${section.items.map(item=>`<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `);
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

  const photoText = state.lang === "ja" ? "写真を見る" : "View Photo";

  return `${topbar()}<main class="content">
    <button class="back" onclick="adminBack()">← ${esc(L.back)}</button>

    <div class="page-head">
      <h2>${esc(name)}</h2>
      <p>${esc(L.mapNote)}</p>
    </div>

    <div class="cards">
      ${list.map((x,index)=>`
        <div class="place-card">
          <h3>🍽️ ${esc(x.name)}</h3>

          <div class="actions">
            <a
              class="primary"
              href="${MAP_LINK(x)}"
              target="_blank"
              rel="noopener"
            >
              ${esc(L.maps)}
            </a>

            ${x.image ? `
              <button
                class="secondary"
                id="restaurant-photo-btn-${index}"
                onclick="toggleRestaurantPhoto(${index})"
              >
                📷 ${photoText}
              </button>
            ` : ""}
          </div>

          ${x.image ? `
            <div
              id="restaurant-photo-${index}"
              style="
                display:none;
                margin-top:15px;
              "
            >
              <img
                src="${esc(x.image)}"
                alt="${esc(x.name)}"
                style="
                  width:100%;
                  height:auto;
                  display:block;
                  border-radius:12px;
                "
              >
            </div>
          ` : ""}
        </div>
      `).join("")}
    </div>
  </main>${footer()}`;
}

function toggleRestaurantPhoto(index){
  const photo = document.getElementById(`restaurant-photo-${index}`);
  const button = document.getElementById(`restaurant-photo-btn-${index}`);

  if(!photo || !button) return;

  const isOpen = photo.style.display !== "none";

  if(isOpen){
    photo.style.display = "none";

    button.textContent =
      state.lang === "ja"
        ? "📷 写真を見る"
        : "📷 View Photo";
  }else{
    photo.style.display = "block";

    button.textContent =
      state.lang === "ja"
        ? "✕ 写真を閉じる"
        : "✕ Close Photo";
  }
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

// Separate guest delivery workflow. The public site never stores names/addresses in GitHub.
const DELIVERY_API_URL = 'https://hotel-shinpoin-delivery.hotelshinpoin0701.workers.dev';
// Optional: register a Cloudflare Turnstile widget for your GitHub Pages host and place the PUBLIC sitekey here.
const DELIVERY_TURNSTILE_SITEKEY = '0x4AAAAAAFwUBMgZJgCVG1n2';
const deliveryState = {kind:null,step:'select',basic:{},details:{},error:'',requestId:null,editToken:null,isEditing:false,busy:false};
const DELIVERY_COPY={
  ja:{
    choose:'配送先をお選びください', form:'配送申込フォーム', basic:'', bookingName:'ご予約名',
    room:'お部屋番号',name:'お宛名',checkout:'チェックアウト日',phone:'お電話番号',quantity:'お荷物の点数',
    pre:'元払い（ホテルにてお支払い / 現金のみ）',cod:'着払い（お荷物お受取り時にお支払い）',payment:'発送方法',
    postal:'郵便番号',address:'ご住所',destinationHotel:'送り先のホテル名',hotelPhone:'送り先ホテルの電話番号',
    hotelPhoneHelp:'（送り先ホテルへの確認を円滑に行うため、入力にご協力ください。）',
    reservation:'送り先ホテルでのご予約名',checkin:'送り先ホテルのチェックイン日',out:'送り先ホテルのチェックアウト日',
    airport:'空港名',terminal:'空港ターミナル名',flight:'搭乗便名',boarding:'搭乗日',departure:'出発時刻',
    deskTime:'フロントにお越しになる予定時刻',deskHelp:'任意入力（事前準備に役立ちます）',
    optional:'任意',next:'次へ進む',back:'前へ戻る',send:'配送を申し込む',sending:'送信中...',
    dateHelp:'年・月・日に数字のみを入力、またはカレンダーから選択',
    incorrectDate:'日付を正しく入力してください。',
    deadline:'ご自宅・別ホテル宛てのオンライン申込は、チェックアウト日の前日まで受け付けます。チェックアウト当日以降は1階フロントでお申し込みください。',
    airportDeadline:'空港宛てのお荷物は搭乗日の3日前までのお申し込みが必要です。この日程ではご希望の期日に到着できません。3日後以降の到着でもよろしければ、1階フロントにて直接お申し込みください。',
    dateMismatch:'送り先ホテルのチェックアウト日はチェックイン日以降を選択してください。',
    privacy:'入力内容をお荷物の配送受付・対応のために利用することに同意します。',
    error:'送信できませんでした。もう一度お試しいただくか、1階フロントにお申し出ください。',
    completed:'お申し込みを受け付けました',
    completedMessage:'ご協力ありがとうございました。\nお荷物の大きさ測定・配送料の精算を行います。\nお手数ではございますが、１階フロントまでお越しください。\nその際、配送をご希望するお荷物をご持参くださいませ。\nお客様のお越しをお待ちしております。',
    home:'ご自宅へ配送',hotel:'別ホテル様へ配送',airportName:'空港へ配送',
    deadlineHome:'チェックアウトの前日までのお申し込み',deadlineAirport:'搭乗日の3日前までのお申し込み',
    blocking:'申込期限をご確認ください',toFront:'１階フロントにて直接ご相談ください。',
    noApp:'送信エラーが発生しました。申込は完了していません。',
    calendar:'カレンダー',custom:'ご入力いただいた情報はフロントスタッフが確認します。',edit:'入力内容を修正',saveEdit:'修正内容を保存',editExpired:'修正可能な時間（30分）を過ぎました。1階フロントまでお申し出ください。'
  },
  en:{
    choose:'Choose a delivery destination',form:'Baggage Delivery Application',basic:'',bookingName:'Reservation name',
    room:'Room number',name:'Recipient name',checkout:'Check-out date',phone:'Phone number',quantity:'Number of pieces',
    pre:'Prepaid (pay at the hotel / cash only)',cod:'Cash on delivery (pay when receiving your baggage)',payment:'Payment method',
    postal:'Postal code',address:'Delivery address',destinationHotel:'Destination hotel name',hotelPhone:'Destination hotel phone number',
    hotelPhoneHelp:'(Optional; helps us confirm details with the destination hotel.)',
    reservation:'Reservation name at destination hotel',checkin:'Destination hotel check-in date',out:'Destination hotel check-out date',
    airport:'Airport name',terminal:'Airport terminal',flight:'Flight number',boarding:'Flight date',departure:'Departure time',
    deskTime:'Expected time to visit the front desk',deskHelp:'Optional (helps us prepare in advance)',
    optional:'Optional',next:'Continue',back:'Back',send:'Submit application',sending:'Submitting...',
    dateHelp:'Enter numbers in the year, month and day fields, or choose from the calendar',incorrectDate:'Enter a valid date.',
    deadline:'Home and hotel deliveries can be requested online up to the day before check-out. On or after check-out day, please apply at the first-floor front desk.',
    airportDeadline:'Airport deliveries must be requested at least 3 days before your flight. We cannot deliver in time for this schedule. If delivery after 3 days is acceptable, please ask at the first-floor front desk.',
    dateMismatch:'The destination check-out date must be on or after its check-in date.',
    privacy:'I agree that my submitted information will be used for baggage-delivery service.',
    error:'Your application could not be submitted. Please retry or contact the first-floor front desk.',
    completed:'Application received',
    completedMessage:'Thank you for your cooperation.\nWe will measure your baggage and calculate the shipping fee.\nPlease come to the first-floor front desk and bring the baggage you wish to send.\nWe look forward to assisting you.',
    home:'Delivery to your home',hotel:'Delivery to another hotel',airportName:'Delivery to the airport',
    deadlineHome:'Apply by the day before check-out',deadlineAirport:'Apply at least 3 days before your flight',
    blocking:'Please check the application deadline',toFront:'Please speak with the first-floor front desk.',
    noApp:'The application was not completed.',calendar:'Calendar',custom:'Our front desk staff will review your application.',edit:'Edit application details',saveEdit:'Save changes',editExpired:'Editing is available for 30 minutes after submission. Please contact the front desk.'
  }
};
function dlvText(){const lang=state.lang==='en'?'en':'ja';return {...DELIVERY_COPY[lang],...((SITE_DATA.deliveryCopy&&SITE_DATA.deliveryCopy[lang])||{})};}
function dlvDate(s){
  const digits=String(s||'').replace(/\D/g,'');
  if(!/^\d{8}$/.test(digits))return '';
  const iso=`${digits.slice(0,4)}-${digits.slice(4,6)}-${digits.slice(6,8)}`;
  const d=new Date(iso+'T00:00:00Z');
  return !Number.isNaN(d.getTime())&&d.toISOString().slice(0,10)===iso?iso:'';
}
function dlvDateDigits(s){return String(s||'').replace(/\D/g,'').slice(0,8);}
function dlvToday(){
  const p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const get=k=>p.find(x=>x.type===k).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
function dlvDays(a,b){return (Date.parse(a+'T00:00:00Z')-Date.parse(b+'T00:00:00Z'))/86400000;}
function deliveryDateTyping(input,key,part){
  // Year/month/day are separate number-only boxes; fixed 年・月・日 units remain visible.
  const root=input.closest('.dlv-date-entry');if(!root)return;
  const y=root.querySelector('[data-part="year"]'),m=root.querySelector('[data-part="month"]'),d=root.querySelector('[data-part="day"]');
  const parts={year:y,month:m,day:d};
  const raw=String(input.value||'').replace(/\D/g,'');
  const limit=part==='year'?4:2;
  input.value=raw.slice(0,limit);
  // Pasting YYYYMMDD into the year box fills all three boxes.
  if(part==='year'&&raw.length>4){
    y.value=raw.slice(0,4);m.value=raw.slice(4,6);d.value=raw.slice(6,8);
  }else if(part==='month'&&raw.length>2){
    m.value=raw.slice(0,2);d.value=raw.slice(2,4);
  }
  const hidden=document.getElementById('dlv-'+key);
  if(hidden)hidden.value=y.value+m.value+d.value;
  const picker=document.getElementById('dlv-picker-'+key);
  if(picker&&hidden&&dlvDate(hidden.value))picker.value=dlvDate(hidden.value);
  if(raw.length>=limit&&parts[part]===document.activeElement){
    const next=part==='year'?m:part==='month'?d:null;
    if(next)next.focus();
  }
}
function dlvDateField(key,label,value='',required=true){
  const C=dlvText(),digits=dlvDateDigits(value),iso=dlvDate(value);
  const yy=digits.slice(0,4),mm=digits.slice(4,6),dd=digits.slice(6,8);
  const unitY=state.lang==='en'?'Y':'年',unitM=state.lang==='en'?'M':'月',unitD=state.lang==='en'?'D':'日';
  const part=(name,val,length,ph,unit)=>`<label class="dlv-date-part dlv-date-part-${name}">
      <input data-part="${name}" type="text" inputmode="numeric" autocomplete="off" aria-label="${esc(label)} ${unit}" placeholder="${ph}" pattern="[0-9]{${length}}" maxlength="${length}" value="${esc(val)}" oninput="deliveryDateTyping(this,'${key}','${name}')" ${required?'required':''}><span>${unit}</span>
    </label>`;
  return `<div class="dlv-field"><div class="dlv-date-heading">${esc(label)}${required?' <span class="dlv-star">*</span>':''}</div>
    <div class="dlv-date-row"><div class="dlv-date-entry" role="group" aria-label="${esc(label)}">
      ${part('year',yy,4,'YYYY',unitY)}${part('month',mm,2,'MM',unitM)}${part('day',dd,2,'DD',unitD)}
      <input type="hidden" id="dlv-${key}" name="${key}" value="${esc(digits)}">
    </div><div class="dlv-calendar-wrap">
      <button type="button" class="dlv-calendar-button" onclick="deliveryOpenCalendar('${key}')">📅 ${esc(C.calendar)}</button>
      <input class="dlv-picker-native" id="dlv-picker-${key}" type="date" value="${esc(iso)}" aria-label="${esc(label)} ${esc(C.calendar)}" onchange="deliveryDateCalendar(this,'${key}')" tabindex="-1">
    </div></div><small>${esc(C.dateHelp)}</small></div>`;
}
function deliveryOpenCalendar(key){
  const picker=document.getElementById('dlv-picker-'+key),hidden=document.getElementById('dlv-'+key);
  if(!picker)return;
  const selected=hidden?dlvDate(hidden.value):'';
  if(selected)picker.value=selected;
  // Direct, synchronous user-gesture invocation is needed by showPicker().
  if(typeof picker.showPicker==='function'){
    try{picker.showPicker();return;}catch(e){console.warn('Native date picker fallback:',e);}
  }
  // Fallback: show a usable native calendar input on browsers without showPicker.
  picker.classList.add('dlv-picker-visible');picker.removeAttribute('tabindex');picker.focus();picker.click();
}

function dlvField(key,label,value='',type='text',required=true,hint='',attrs=''){
  return `<div class="dlv-field"><label for="dlv-${key}">${esc(label)}${required?' <span class="dlv-star">*</span>':''}</label>
  <input id="dlv-${key}" name="${key}" type="${type}" value="${esc(value)}" ${required?'required':''} ${attrs}>
  ${hint?`<small>${esc(hint)}</small>`:''}</div>`;
}
function dlvError(){return `<p class="dlv-error" id="dlv-error" role="alert" ${deliveryState.error?'':'hidden'}>${esc(deliveryState.error)}</p>`;}
function dlvShowError(message){deliveryState.error=message;const el=document.getElementById('dlv-error');if(el){el.textContent=message;el.hidden=!message;el.scrollIntoView({block:'nearest'});}}
function deliveryDateCalendar(input,key){
  if(!input.value)return;
  const digits=dlvDateDigits(input.value),root=input.closest('.dlv-date-row');
  if(!root)return;
  root.querySelector('[data-part="year"]').value=digits.slice(0,4);
  root.querySelector('[data-part="month"]').value=digits.slice(4,6);
  root.querySelector('[data-part="day"]').value=digits.slice(6,8);
  const hidden=document.getElementById('dlv-'+key);
  if(hidden)hidden.value=digits;
  input.classList.remove('dlv-picker-visible');input.setAttribute('tabindex','-1');
}
function deliverySelect(kind){deliveryState.kind=kind;deliveryState.step='basic';deliveryState.error='';deliveryState.basic={};deliveryState.details={};deliveryState.requestId=null;deliveryState.editToken=null;deliveryState.isEditing=false;render();window.scrollTo(0,0);}
function deliverySaveBasicDraft(){
  const form=document.getElementById('delivery-basic');if(!form)return;
  const fd=new FormData(form);
  deliveryState.basic={...deliveryState.basic,room:String(fd.get('room')||''),name:String(fd.get('name')||''),
    checkoutDate:fd.get('checkoutDate')||'',...(deliveryState.kind==='airport'?{boardingDate:fd.get('boardingDate')||''}:{})};
}
function deliveryBack(){
  if(deliveryState.step==='details')return deliveryDetailsBack();
  if(deliveryState.step==='success')return deliveryEdit();
  if(deliveryState.step==='basic')deliverySaveBasicDraft();
  deliveryState.step='select';deliveryState.error='';render();window.scrollTo(0,0);
}
function deliveryTopBack(){
  if(deliveryState.step==='details')return deliveryDetailsBack();
  if(deliveryState.step==='success')return deliveryEdit();
  return deliveryBack();
}
function deliveryBasicContinue(event){
  event.preventDefault();
  const C=dlvText(),form=event.currentTarget,fd=new FormData(form);
  const basic={room:String(fd.get('room')||'').trim(),name:String(fd.get('name')||'').trim(),checkoutDate:dlvDate(fd.get('checkoutDate'))};
  if(!basic.checkoutDate){dlvShowError(C.incorrectDate);return false;}
  if(deliveryState.kind==='airport'){
    basic.boardingDate=dlvDate(fd.get('boardingDate'));
    if(!basic.boardingDate){deliveryState.basic=basic;dlvShowError(C.incorrectDate);return false;}
    if(dlvDays(basic.boardingDate,dlvToday())<3){deliveryState.basic=basic;dlvShowError(C.airportDeadline);return false;}
  }else if(dlvDays(basic.checkoutDate,dlvToday())<1){
    deliveryState.basic=basic;dlvShowError(C.deadline);return false;
  }
  deliveryState.basic=basic;
  deliveryState.details={...deliveryState.details,room:basic.room,name:basic.name};
  if(deliveryState.kind==='airport')deliveryState.details.boardingDate=basic.boardingDate;
  deliveryState.error='';deliveryState.step='details';render();window.scrollTo(0,0);return false;
}
function dlvIntro(){const C=dlvText(),B=SITE_DATA.baggage[state.lang];const note=deliveryState.step==='select'?'':deliveryState.kind==='airport'?C.deadlineAirport:C.deadlineHome;return `<div class="info-card">${B.intro.map(p=>`<p>${esc(p)}</p>`).join('')}${note?`<p class="dlv-intro-notice">${esc(note)}</p>`:''}</div>`;}
function deliveryChooseView(){
  const C=dlvText(),B=SITE_DATA.baggage[state.lang];
  return `<div class="dlv-panel"><h3>${esc(C.choose)}</h3><div class="dlv-cards">${B.cards.filter(card=>card.enabled!==false).map(card=>{
    const kind=['home','hotel','airport'].includes(card.kind)?card.kind:/airport/i.test(card.linkKey||'')?'airport':/home/i.test(card.linkKey||'')?'home':'hotel';
    const note=(card.description||'').trim()||(kind==='airport'?C.deadlineAirport:C.deadlineHome);
    return `<div class="info-card"><h3>${esc(card.title)}</h3><p>${esc(note)}</p><button type="button" class="primary dlv-action" onclick="deliverySelect('${kind}')">${esc(C.next)}</button></div>`;
  }).join('')}</div></div>`;
}
function deliveryBasicView(){
  const C=dlvText(),x=deliveryState.basic;
  return `<div class="info-card dlv-panel"><button type="button" class="dlv-back" onclick="deliveryBack()">← ${esc(C.back)}</button><h3>${esc(C.form)}</h3>
    <p>${esc(deliveryState.kind==='airport'?C.deadlineAirport:C.deadlineHome)}</p>
    <form id="delivery-basic" onsubmit="return deliveryBasicContinue(event)">
      <div class="dlv-grid">${dlvField('room',C.room,x.room||'','text',true,'','maxlength="20"')}${dlvField('name',C.bookingName,x.name||'','text',true,'','maxlength="100"')}</div>
      ${dlvDateField('checkoutDate',C.checkout,x.checkoutDate||'')}${deliveryState.kind==='airport'?dlvDateField('boardingDate',C.boarding,x.boardingDate||deliveryState.details.boardingDate||''):''}${dlvError()}
      <button type="submit" class="primary dlv-action">${esc(C.next)}</button>
    </form></div>`;
}
function dlvPayment(kind,C){
  if(kind==='home')return `<fieldset class="dlv-payment"><legend>${esc(C.payment)} <span class="dlv-star">*</span></legend>
    <label><input type="radio" name="payment" value="prepaid" ${deliveryState.details.payment==='prepaid'?'checked':''} required> ${esc(C.pre)}</label>
    <label><input type="radio" name="payment" value="cod" ${deliveryState.details.payment==='cod'?'checked':''} required> ${esc(C.cod)}</label></fieldset>`;
  return `<fieldset class="dlv-payment"><legend>${esc(C.payment)} <span class="dlv-star">*</span></legend>
  <label><input type="radio" name="payment" value="prepaid" checked required> ${esc(C.pre)}</label></fieldset>`;
}
function deliveryDetailsView(){
  const C=dlvText(),x=deliveryState.details,kind=deliveryState.kind;
  const basic=`<div class="dlv-grid">${dlvField('room',C.room,x.room||'','text',true,'','maxlength="20"')}${dlvField('name',C.name,x.name||'','text',true,'','maxlength="100"')}</div>
    ${dlvField('phone',C.phone,x.phone||'','tel',true,'','maxlength="50" autocomplete="tel"')}`;
  let additional='',homeAddress='';
  if(kind==='home'){
    homeAddress=`${dlvField('postalCode',C.postal,x.postalCode||'','text',true,'','maxlength="24" autocomplete="postal-code"')}
      ${dlvField('address',C.address,x.address||'','text',true,'','maxlength="500" autocomplete="street-address"')}`;
  }else if(kind==='hotel'){
    additional=`${dlvField('destinationHotel',C.destinationHotel,x.destinationHotel||'','text',true,'','maxlength="150"')}
      ${dlvField('destinationHotelPhone',C.hotelPhone,x.destinationHotelPhone||'','tel',false,C.hotelPhoneHelp,'maxlength="50"')}
      ${dlvField('destinationReservationName',C.reservation,x.destinationReservationName||'','text',true,'','maxlength="100"')}
      <div class="dlv-grid">${dlvDateField('destinationCheckin',C.checkin,x.destinationCheckin||'')}${dlvDateField('destinationCheckout',C.out,x.destinationCheckout||'')}</div>`;
  }else{
    additional=`${dlvField('airportName',C.airport,x.airportName||'','text',true,'','maxlength="100"')}
      ${dlvField('airportTerminal',C.terminal,x.airportTerminal||'','text',true,'','maxlength="100"')}
      ${dlvField('flightNumber',C.flight,x.flightNumber||'','text',true,'','maxlength="30"')}
      <div class="dlv-grid">${dlvDateField('boardingDate',C.boarding,x.boardingDate||'')}${dlvField('departureTime',C.departure,x.departureTime||'','time',true,'','step="60"')}</div>`;
  }
  const quantity=dlvField('quantity',C.quantity,x.quantity||'','number',true,'','min="1" max="30" step="1"');
  const deskTime=dlvField('frontDeskTime',C.deskTime,x.frontDeskTime||'','time',false,C.deskHelp,'step="60"');
  return `<div class="info-card dlv-panel"><button type="button" class="dlv-back" onclick="deliveryDetailsBack()">← ${esc(C.back)}</button>
    <h3>${esc(C.form)} — ${esc(kind==='home'?C.home:kind==='hotel'?C.hotel:C.airportName)}</h3>
    <form id="delivery-details" onsubmit="return deliverySubmit(event)">
      ${basic}${additional}${quantity}${deskTime}${dlvPayment(kind,C)}${homeAddress}
      <div class="dlv-honeypot" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      ${dlvError()}<p class="dlv-muted">${esc(C.custom)}</p>
      <button type="submit" class="primary dlv-action" id="delivery-submit" ${deliveryState.busy?'disabled':''}>${esc(deliveryState.busy?C.sending:deliveryState.isEditing?C.saveEdit:C.send)}</button>
    </form></div>`;
}
function deliveryDetailsBack(){
  const form=document.getElementById('delivery-details');if(form)deliveryState.details=Object.fromEntries(new FormData(form));
  deliveryState.basic.room=deliveryState.details.room||deliveryState.basic.room;
  if(deliveryState.kind==='airport'&&deliveryState.details.boardingDate)deliveryState.basic.boardingDate=dlvDate(deliveryState.details.boardingDate);
  deliveryState.step='basic';deliveryState.error='';render();window.scrollTo(0,0);
}
function dlvTime(s){return /^\d{2}:\d{2}$/.test(String(s||''))?s:'';}
async function deliverySubmit(event){
  event.preventDefault();if(deliveryState.busy)return false;
  const C=dlvText(),form=event.currentTarget,fd=new FormData(form),o=Object.fromEntries(fd.entries());
  const dateKeys=['destinationCheckin','destinationCheckout','boardingDate'];
  for(const k of dateKeys)if(k in o){o[k]=dlvDate(o[k]);if(!o[k]){dlvShowError(C.incorrectDate);return false;}}
  if(deliveryState.kind==='hotel'&&dlvDays(o.destinationCheckout,o.destinationCheckin)<0){dlvShowError(C.dateMismatch);return false;}
  if(deliveryState.kind==='airport'&&dlvDays(o.boardingDate,dlvToday())<3){dlvShowError(C.airportDeadline);return false;}
  if(deliveryState.kind!=='airport'&&dlvDays(deliveryState.basic.checkoutDate,dlvToday())<1){dlvShowError(C.deadline);return false;}
  const p={...o,kind:deliveryState.kind,checkoutDate:deliveryState.basic.checkoutDate,bookingName:deliveryState.basic.name,
    quantity:Number(o.quantity),privacyConsent:fd.has('privacyConsent'),frontDeskTime:dlvTime(o.frontDeskTime)};
  delete p.website;
  if(deliveryState.kind!=='home')p.payment='prepaid';
  deliveryState.details={...o,privacyConsent:p.privacyConsent};deliveryState.error='';deliveryState.busy=true;
  if(!deliveryState.requestId)deliveryState.requestId=crypto.randomUUID();
  const button=document.getElementById('delivery-submit');if(button){button.disabled=true;button.textContent=C.sending;}
  try{
    const token='';
    const endpoint=deliveryState.isEditing?'/api/deliveries/update':'/api/deliveries';
    const res=await fetch(DELIVERY_API_URL+endpoint,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({requestId:deliveryState.requestId,editToken:deliveryState.editToken,application:p,website:o.website||'',turnstileToken:token})
    });
    let result;try{result=await res.json();}catch{result={};}
    if(!res.ok||result.ok!==true)throw new Error(result.error||C.error);
    deliveryState.editToken=result.editToken||deliveryState.editToken;
    deliveryState.isEditing=false;deliveryState.step='success';deliveryState.error='';render();window.scrollTo(0,0);
  }catch(e){
    console.warn('Delivery application failure:',e);
    dlvShowError(`${C.noApp} ${e.message||C.error}`);
    if(DELIVERY_TURNSTILE_SITEKEY&&window.turnstile)window.turnstile.reset();
  }finally{
    deliveryState.busy=false;
    if(button){button.disabled=false;button.textContent=C.send;}
  }
  return false;
}
function deliveryEdit(){if(!deliveryState.editToken)return;deliveryState.isEditing=true;deliveryState.step='details';deliveryState.error='';render();window.scrollTo(0,0);}
function deliverySuccessView(){const C=dlvText();return `<div class="info-card dlv-panel dlv-success"><h3>✓ ${esc(C.completed)}</h3><p>${esc(C.completedMessage).replace(/\n/g,'<br>')}</p><p class="dlv-muted">${esc(C.custom)}</p>${deliveryState.editToken?`<button type="button" class="secondary dlv-action" onclick="deliveryEdit()">✎ ${esc(C.edit)}</button>`:''}</div>`;}
function dlvInstallStyle(){
  if(document.getElementById('hotel-delivery-style'))return;
  const css=`
    .dlv-panel{margin-top:14px}.dlv-panel h3{margin:8px 0 18px}.dlv-panel form{max-width:940px}
    .dlv-field{display:flex;flex-direction:column;gap:7px;margin:14px 0}.dlv-field label,.dlv-payment legend{font-weight:700;color:#202734}
    .dlv-star{color:#c32929}.dlv-field input{min-width:0;width:100%;box-sizing:border-box;padding:13px 12px;border:1px solid #ccd0d8;border-radius:9px;background:#fff;font:inherit;font-size:16px;color:#152033}
    .dlv-field small,.dlv-muted{color:#626c7e;font-size:13px}.dlv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .dlv-date-heading{font-weight:700;color:#202734}
    .dlv-date-row{display:flex;align-items:center;gap:10px;min-width:0;flex-wrap:wrap}
    .dlv-date-entry{display:flex;align-items:center;gap:7px;flex:1 1 280px;min-width:0;border:1px solid #ccd0d8;border-radius:9px;background:white;padding:4px 8px;box-sizing:border-box;min-height:49px}
    .dlv-date-part{display:flex!important;align-items:center;justify-content:center;gap:3px;min-width:0;flex:1 1 0;font-weight:500!important;white-space:nowrap;cursor:text}
    .dlv-date-part-year{flex:1.65 1 0}.dlv-date-part input{font-size:16px!important;min-width:0!important;width:100%!important;padding:7px 2px!important;border:0!important;border-radius:0!important;background:transparent!important;text-align:center!important;box-shadow:none!important;outline-offset:2px}
    .dlv-date-part span{font-size:13px;color:#465164;flex:0 0 auto}
    .dlv-calendar-wrap{position:relative;flex:0 0 auto}
    .dlv-calendar-button{display:inline-flex;justify-content:center;align-items:center;min-height:49px;min-width:145px;padding:9px 13px;border:0;border-radius:9px;background:#f1f3f6;color:#1b2635;font-size:14px;font-weight:700;white-space:nowrap;cursor:pointer}
    .dlv-calendar-button:focus-visible{outline:3px solid #3565cf;outline-offset:2px}
    .dlv-picker-native{position:absolute;right:0;top:100%;width:1px;height:1px;opacity:0;pointer-events:none;z-index:2}
    .dlv-picker-native.dlv-picker-visible{position:static;width:180px;height:42px;opacity:1;pointer-events:auto;display:block;margin-top:6px}

    .dlv-action{margin-top:14px;display:inline-block;padding:13px 20px;cursor:pointer;border:none;border-radius:10px;font-size:15px;font-weight:700}
    .dlv-back{border:none;background:transparent;color:#2952c5;cursor:pointer;padding:4px 0 15px;font:inherit;font-weight:700}
    .dlv-cards{display:grid;gap:12px}.dlv-cards>.info-card{margin:0}.dlv-payment{border:1px solid #d4d8e0;border-radius:10px;padding:14px;margin:17px 0}
    .dlv-payment label{display:flex;align-items:center;gap:8px;margin:12px 0;cursor:pointer}.dlv-payment input{accent-color:#2756dc;width:18px;height:18px}
    .dlv-consent{display:flex;align-items:flex-start;gap:9px;margin:18px 0;font-size:14px}.dlv-consent input{margin-top:4px}
    .dlv-error{padding:14px;border-radius:9px;background:#fff0f0;border:1px solid #c94d4d;color:#a52525;line-height:1.65}.dlv-error[hidden]{display:none}
    .dlv-honeypot{position:absolute!important;left:-10000px!important;width:1px;height:1px;overflow:hidden}
    .dlv-success{line-height:2}.dlv-success h3{color:#136c43}.dlv-success p{margin:12px 0}.dlv-intro-notice{font-weight:700}
    @media(max-width:650px){.dlv-grid{grid-template-columns:1fr}.dlv-date-row{flex-wrap:wrap}.dlv-calendar-wrap{width:100%}.dlv-calendar-button{width:100%}.dlv-field input{font-size:16px}}
  `;
  const s=document.createElement('style');s.id='hotel-delivery-style';s.textContent=css;document.head.appendChild(s);
}
function dlvTurnstileInit(){
  if(!DELIVERY_TURNSTILE_SITEKEY||deliveryState.step!=='details'||!document.getElementById('delivery-turnstile'))return;
  const mount=()=>{if(!document.getElementById('delivery-turnstile'))return;try{window.turnstile.render('#delivery-turnstile',{sitekey:DELIVERY_TURNSTILE_SITEKEY});}catch(e){console.warn(e)}};
  if(window.turnstile){mount();return;}
  if(!document.getElementById('hotel-turnstile-script')){
    const s=document.createElement('script');s.id='hotel-turnstile-script';s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';s.async=true;s.onload=mount;document.head.appendChild(s);
  }
}

function baggage(){
  const C=dlvText();
  let inner=dlvIntro();
  if(deliveryState.step==='select')inner+=deliveryChooseView();
  else if(deliveryState.step==='basic')inner+=deliveryBasicView();
  else if(deliveryState.step==='details')inner+=deliveryDetailsView();
  else if(deliveryState.step==='success')inner+=deliverySuccessView();
  return pageWrap(T().baggage,inner);
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

function taxi(){
  const L=T();
  const X=SITE_DATA.taxi[state.lang];

  return pageWrap(L.taxi,`
    <div class="cards">

      <div class="info-card">
        <h3>🚕 ${esc(X.fareTitle)}</h3>

        <p>${esc(X.fareDescription)}</p>

        ${state.lang === "en" ? `
          <p>
            <strong>⚠️ ${esc(X.fareNotice)}</strong>
          </p>

          <div style="margin: 15px 0;">
            <p style="margin-bottom: 8px;">
              <strong>Hotel name:</strong> ${esc(X.hotelName)}
            </p>

            <button
              class="secondary"
              id="copy-hotel-button"
              onclick="copyHotelName()"
            >
              📋 ${esc(X.copyHotelButton)}
            </button>
          </div>
        ` : ""}

        <div class="actions">
          <a
            class="primary"
            href="${SITE_DATA.externalLinks.taxiFare}"
            target="_blank"
            rel="noopener"
          >
            ${esc(X.fareButton)}
          </a>
        </div>
      </div>

      <div class="info-card">
        <h3>📱 ${esc(X.appTitle)}</h3>

        <p>${esc(X.appDescription)}</p>

        <div class="actions">
          <a
            class="primary"
            href="${SITE_DATA.externalLinks.taxiAndroid}"
            target="_blank"
            rel="noopener"
          >
            ${esc(X.androidButton)}
          </a>

          <a
            class="secondary"
            href="${SITE_DATA.externalLinks.taxiIos}"
            target="_blank"
            rel="noopener"
          >
            ${esc(X.iosButton)}
          </a>

          ${state.lang === "en" ? `
            <a
              class="secondary"
              href="${SITE_DATA.externalLinks.taxiAppGuide}"
              target="_blank"
              rel="noopener"
            >
              ${esc(X.appGuideButton)}
            </a>
          ` : ""}
        </div>
      </div>

    </div>
  `);
}

function copyHotelName(){
  const X=SITE_DATA.taxi.en;

  navigator.clipboard.writeText(X.hotelName).then(()=>{
    const button=document.getElementById("copy-hotel-button");

    if(button){
      button.textContent="✓ " + X.copiedHotelButton;

      setTimeout(()=>{
        button.textContent="📋 " + X.copyHotelButton;
      },2000);
    }
  });
}

function remote(){
  const L=T();
  const R=SITE_DATA.remote[state.lang];

  return pageWrap(L.remote,`
    <div class="cards">
      ${R.items.map((item,index)=>`
        <div class="info-card">
          <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px;
          ">
            <h3 style="margin:0;">${esc(item.title)}</h3>

            <button
              class="secondary"
              onclick="toggleRemoteImage(${index})"
              id="remote-btn-${index}"
            >
              View
            </button>
          </div>

          <div
            id="remote-image-${index}"
            style="
              display:none;
              margin-top:15px;
            "
          >
            <img
              src="${esc(item.image)}"
              alt="${esc(item.title)}"
              style="
                width:100%;
                height:auto;
                display:block;
                border-radius:12px;
              "
            >
          </div>
        </div>
      `).join("")}
    </div>
  `);
}

function toggleRemoteImage(index){
  const image = document.getElementById(`remote-image-${index}`);
  const button = document.getElementById(`remote-btn-${index}`);

  if(!image || !button) return;

  const isOpen = image.style.display !== "none";

  if(isOpen){
    image.style.display = "none";
    button.textContent = "View";
  }else{
    image.style.display = "block";
    button.textContent = "Close";
  }
}



function render(){
  const app=document.getElementById("app");

  if(!state.lang){
    app.innerHTML=languageScreen();
    return;
  }

  const pages={
    home,
    hotelInfo,
    stations,
    convenience,
    restaurants:restaurantMenu,
    restaurantCategory,
    parking,
    baggage,
    airport,
    taxi,
    remote
  };

  app.innerHTML=(pages[state.page]||home)();
  if(state.page==='baggage'){
    dlvInstallStyle();
    // The form has no interactive Turnstile checkbox.
  }
}

history.replaceState(
  {
    lang: state.lang,
    page: state.page,
    category: state.category
  },
  "",
  ""
);

async function loadLatestSiteData(){
  try{
    const r=await fetch("data.js?v="+Date.now(),{cache:"no-store"});
    if(!r.ok)throw new Error("data.js "+r.status);
    const src=await r.text();
    const a=src.indexOf("{"), b=src.lastIndexOf("};");
    if(a<0||b<0)throw new Error("SITE_DATA parse error");
    const latest=JSON.parse(src.slice(a,b+1));
    Object.keys(SITE_DATA).forEach(k=>delete SITE_DATA[k]);
    Object.assign(SITE_DATA,latest);
  }catch(e){
    console.warn("Latest data load failed; using current SITE_DATA.",e);
  }
  render();
}
loadLatestSiteData();
