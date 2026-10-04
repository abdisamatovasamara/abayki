/* SAMARA DUBAI v2 — HTML5 + CSS3 + vanilla JS. Settings (WhatsApp number, photo URLs) are in the SETTINGS block below. */
/* translations: [RU, KG, EN] */
const T={
sub:["Люксовая коллекция абай","Люкс абая коллекциясы","Luxury Abaya Collection"],
n1:["Главная","Башкы бет","Home"],n2:["Коллекция","Коллекция","Collection"],n3:["О бренде","Бренд жөнүндө","About"],n4:["Контакты","Байланыш","Contact"],
h1:["Эксклюзивные абайи из Дубая","Дубайдан эксклюзивдүү абайлар","Exclusive Abayas from Dubai"],
h2:["«Элегантность, которая не требует объяснений.»","«Түшүндүрмөнү талап кылбаган назиктик.»","“Elegance that needs no explanation.”"],
cta:["Смотреть коллекцию","Коллекцияны көрүү","View collection"],
col:["Наша коллекция","Биздин коллекция","Our Collection"],cat:["Категория","Категория","Category"],
c_all:["Все","Баары","All"],c_cls:["Классические","Классикалык","Classic"],c_dub:["Dubai Collection","Dubai Collection","Dubai Collection"],c_emb:["Вышивка","Саймалоо","Embroidery"],c_lux:["Luxury","Luxury","Luxury"],
color:["Цвет","Түсү","Color"],size:["Размер","Өлчөмү","Size"],qty:["Количество","Саны","Quantity"],
k_all:["Все цвета","Бардык түстөр","All colors"],k_black:["Чёрный","Кара","Black"],k_beige:["Бежевый","Беж","Beige"],k_brown:["Коричневый","Күрөң","Brown"],k_green:["Зелёный","Жашыл","Green"],
z_all:["Все размеры","Бардык өлчөмдөр","All sizes"],
s_new:["Новинки","Жаңылар","Newest"],s_asc:["Цена: по возрастанию","Баасы: өсүү боюнча","Price: low to high"],s_desc:["Цена: по убыванию","Баасы: кемүү боюнча","Price: high to low"],
add:["В корзину","Себетке кошуу","Add to Cart"],pick:["Сначала выберите размер","Адегенде өлчөмдү тандаңыз","Please select a size first"],added:["Добавлено в корзину","Себетке кошулду","Added to cart"],
cart:["Корзина","Себет","Your Cart"],wish:["Избранное","Тандалгандар","Wishlist"],
sub_t:["Сумма","Сумма","Subtotal"],tot:["Итого","Жалпы","Total"],clear:["Очистить корзину","Себетти тазалоо","Clear cart"],cont:["Продолжить покупки","Сатып алууну улантуу","Continue shopping"],chk:["Оформить заказ","Буйрутма берүү","Checkout"],
e_cart:["Корзина пуста","Себет бош","Your cart is empty"],e_wish:["Пока ничего нет","Азырынча бош","Nothing saved yet"],rm:["Удалить","Өчүрүү","Remove"],
s_ph:["Поиск по названию, цвету…","Аты, түсү боюнча издөө…","Search by name, category, color…"],nores:["Ничего не найдено","Эч нерсе табылган жок","No results found"],
lim_p:["Создано не для всех.","Баары үчүн эмес.","Not made for everyone."],lim_b:["Смотреть Limited","Limited коллекциясын көрүү","Explore Limited Collection"],
ab_t:["Искусство скромной роскоши","Токтоо люкстун өнөрү","The Art of Modest Luxury"],
ab_p:["SAMARA DUBAI — это элегантность, скромность и премиальное качество, вдохновлённые арабской эстетикой и роскошью Дубая. Каждая модель создана с вниманием к деталям, чтобы подчеркнуть женственность и эксклюзивность.","SAMARA DUBAI — араб эстетикасынан жана Дубай люксунан шыктанган назиктик, токтоолук жана премиум сапат. Ар бир модель майда-чүйдөсүнө чейин ойлонулуп, аялдын назиктигин жана эксклюзивдүүлүгүн баса белгилейт.","SAMARA DUBAI stands for elegance, modesty and premium quality, inspired by Arabic aesthetics and Dubai luxury. Every piece is made with attention to detail to honor femininity and exclusivity."],
w1:["Премиальное качество","Премиум сапат","Premium Quality"],w2:["Эксклюзивные модели","Эксклюзивдүү моделдер","Exclusive Designs"],w3:["Стиль Дубая","Дубай стили","Dubai Style"],w4:["Доставка по миру","Дүйнө жүзү боюнча жеткирүү","Worldwide Delivery"],
rev_t:["Отзывы клиенток","Кардарлардын пикирлери","Client Reviews"],
r1:["«Невероятно красиво. Качество и детали потрясающие.»","«Абдан кооз. Сапаты жана детальдары укмуш.»","“Absolutely beautiful. The quality and details are incredible.”"],
r2:["«Ткань падает так мягко. Как в бутике в Дубае.»","«Кездеме жумшак түшөт. Дубайдагы бутик сыяктуу.»","“The fabric falls so softly. Just like a Dubai boutique.”"],
r3:["«Идеально сидит, доставка быстрая. Закажу ещё.»","«Так эле шайкеш, жеткирүү тез. Дагы заказ берем.»","“Perfect fit and fast delivery. I will order again.”"],
ig_t:["Следите за элегантностью","Назиктикти аңдыңыз","Follow the elegance"],follow:["Подписаться","Жазылуу","Follow Us"],
ship:["Доставка","Жеткирүү","Shipping"],ret:["Возврат","Кайтаруу","Returns"],priv:["Политика конфиденциальности","Купуялуулук саясаты","Privacy Policy"],
info:["Подробности сообщим при подтверждении заказа.","Толук маалыматты буйрутма ырасталганда беребиз.","We will share details when confirming your order."],
news_t:["Join the world of Samara Dubai","Samara Dubai дүйнөсүнө кошулуңуз","Join the world of Samara Dubai"],subs:["Подписаться","Жазылуу","Subscribe"],subok:["Спасибо за подписку","Жазылганыңыз үчүн рахмат","Thank you for subscribing"],
f_name:["Имя","Аты-жөнү","Name"],f_phone:["Телефон","Телефон","Phone"],f_city:["Город","Шаар","City"],f_addr:["Адрес","Дарек","Address"],f_note:["Комментарий","Комментарий","Comment"],f_btn:["Оформить заказ","Буйрутма берүү","Place order"],
thanks:["Спасибо за заказ в SAMARA DUBAI. Мы свяжемся с вами для подтверждения.","SAMARA DUBAI'ден буйрутма бергениңиз үчүн рахмат. Буйрутмаңызды ырастоо үчүн сиз менен байланышабыз.","Thank you for your order from SAMARA DUBAI. We will contact you to confirm your order."],
wa:["Здравствуйте! Хочу заказать абайю SAMARA DUBAI.","Саламатсызбы! SAMARA DUBAI абаясына заказ бергим келет.","Hello! I would like to order a SAMARA DUBAI abaya."]
};
const LANGS=["ru","kg","en"];
Object.assign(T,{
n5:["Лукбук","Лукбук","Lookbook"],
h_tag2:["Элегантность в каждой детали.","Ар бир деталда назиктик.","Elegance in every detail."],
cta:["Смотреть коллекцию","Коллекцияны көрүү","Explore collection"],
intro_t:["ИСКУССТВО СКРОМНОЙ ЭЛЕГАНТНОСТИ","ТОКТООЛУК НАЗИКТИКТИН ӨНӨРҮ","THE ART OF MODEST ELEGANCE"],
intro_p:["Абайи, созданные для женщины, которая выбирает утончённость: мягкая ткань, безупречный крой и внимание к каждой детали.","Назиктикти тандаган аял үчүн жаралган абайлар: жумшак кездеме, так тигилиш жана ар бир деталга көңүл.","Abayas made for the woman who chooses refinement: soft fabric, impeccable cut and attention to every detail."],
edit_t:["ЭДИТ ДУБАЯ","ДУБАЙ ЭДИТИ","THE DUBAI EDIT"],
edit_p:["Изумруд, золото и свет Дубая.","Зумурут, алтын жана Дубайдын жарыгы.","Emerald, gold and the light of Dubai."],
lim_p2:["Создано для моментов, которые стоит запомнить.","Эстеп калууга татыктуу учурлар үчүн жаратылган.","Created for moments that deserve to be remembered."],
nores:["Ничего не найдено","Эч нерсе табылган жок","No pieces found"],
look_v:["Смотреть","Көрүү","View"],qv:["Быстрый просмотр","Тез көрүү","Quick view"],
price:["Цена","Баасы","Price"],p_all:["Любая цена","Каалаган баа","Any price"],s_feat:["Рекомендуемые","Тандалмалар","Featured"],
k_cream:["Кремовый","Крем","Cream"],k_champagne:["Шампань","Шампань","Champagne"],
cb_black:["Чёрные","Кара","Black"],cb_neutral:["Нейтральные","Нейтралдуу","Neutral"],cb_emb:["Вышивка","Саймалоо","Embroidered"],cb_crystal:["Кристаллы","Кристалл","Crystal"],cb_evening:["Вечерние","Кечки","Evening"],cb_new:["Новинки","Жаңылар","New arrivals"],
f_size:["Подтверждение размера","Өлчөмдү ырастоо","Size confirmation"],
d_gold:["Классическая абайя с тонкой золотой окантовкой.","Ичке алтын кайма менен классикалык абая.","Classic abaya finished with a fine gold trim."],
d_batwing:["Свободный силуэт с широкими рукавами.","Кең жеңдүү эркин силуэт.","Flowing silhouette with wide batwing sleeves."],
d_emb:["Тонкая вышивка ручной работы.","Кол менен жасалган назик саймалоо.","Delicate hand-finished embroidery."],
d_crystal:["Мерцающие кристаллы на мягкой ткани.","Жумшак кездемедеги жалтыраган кристаллдар.","Shimmering crystals on soft fabric."],
d_pearl:["Жемчужные детали на воротнике и манжетах.","Жака менен жеңдеги бермет детальдары.","Pearl details at the collar and cuffs."],
d_velvet:["Глубокий бархат с мягким блеском.","Жумшак жаркыраган терең бархат.","Deep velvet with a soft sheen."],
d_evening:["Расклешённая вечерняя абайя для особых случаев.","Өзгөчө учурлар үчүн кеңейген кечки абая.","Flared evening abaya for special occasions."],
d_min:["Минималистичная абайя Дубая в чистых линиях.","Таза сызыктуу минималисттик Дубай абаясы.","Minimalist Dubai abaya in clean lines."]
});

/* ====== SETTINGS: edit these ====== */
const whatsappNumber = "996XXXXXXXXX";   // your number, international format
const HERO_IMAGE = "", DUBAI_EDIT_IMAGE = "", LIMITED_IMAGE = "";  // optional real photo URLs

/* Each product: image / hoverImage = optional photo URLs. Empty = built-in illustrated abaya (never a blank box).
   A photo that fails to load falls back to the illustration automatically. */
const products = [
 {id:1,name:"Noor Abaya",price:189,currency:"$",color:"black",sizes:["XS","S","M","L","XL"],style:{sil:"straight",trim:1,deco:"none"},d:"gold",badge:"LIMITED",isNew:false,date:3,image:"",hoverImage:""},
 {id:2,name:"Dubai Black",price:219,currency:"$",color:"black",sizes:["S","M","L","XL","XXL"],style:{sil:"batwing",trim:0,deco:"none",open:1},d:"batwing",badge:"NEW",isNew:true,date:11,image:"",hoverImage:""},
 {id:3,name:"Royal Gold",price:329,currency:"$",color:"black",sizes:["S","M","L"],style:{sil:"straight",trim:1,deco:"emb",open:1},d:"emb",badge:"LIMITED",isNew:false,date:5,image:"",hoverImage:""},
 {id:4,name:"Layla Abaya",price:249,currency:"$",color:"cream",sizes:["XS","S","M","L","XL"],style:{sil:"straight",trim:0,deco:"emb"},d:"emb",badge:"",isNew:false,date:4,image:"",hoverImage:""},
 {id:5,name:"Almas",price:359,currency:"$",color:"champagne",sizes:["S","M","L"],style:{sil:"straight",trim:0,deco:"crystal"},d:"crystal",badge:"LIMITED",isNew:false,date:6,image:"",hoverImage:""},
 {id:6,name:"Emirati Elegance",price:239,currency:"$",color:"brown",sizes:["M","L","XL","XXL"],style:{sil:"straight",trim:1,deco:"none",open:1},d:"gold",badge:"",isNew:false,date:2,image:"",hoverImage:""},
 {id:7,name:"Sahara",price:179,currency:"$",color:"beige",sizes:["XS","S","M","L","XL","XXL"],style:{sil:"batwing",trim:0,deco:"none"},d:"min",badge:"",isNew:false,date:1,image:"",hoverImage:""},
 {id:8,name:"Queen Abaya",price:299,currency:"$",color:"green",sizes:["S","M","L"],style:{sil:"flare",trim:1,deco:"none",open:1},d:"evening",badge:"",isNew:false,date:7,image:"",hoverImage:""},
 {id:9,name:"Noir Crystal",price:349,currency:"$",color:"black",sizes:["S","M","L","XL"],style:{sil:"flare",trim:0,deco:"crystal"},d:"crystal",badge:"NEW",isNew:true,date:12,image:"",hoverImage:""},
 {id:10,name:"Champagne Pearl",price:319,currency:"$",color:"champagne",sizes:["XS","S","M","L"],style:{sil:"batwing",trim:1,deco:"pearl"},d:"pearl",badge:"NEW",isNew:true,date:10,image:"",hoverImage:""},
 {id:11,name:"Emerald Majesty",price:339,currency:"$",color:"green",sizes:["S","M","L","XL"],style:{sil:"batwing",trim:1,deco:"emb"},d:"emb",badge:"LIMITED",isNew:false,date:8,image:"",hoverImage:""},
 {id:12,name:"Dubai Velvet",price:289,currency:"$",color:"brown",sizes:["S","M","L","XL"],style:{sil:"flare",trim:0,deco:"velvet"},d:"velvet",badge:"NEW",isNew:true,date:9,image:"",hoverImage:""}
];
const extra={
 101:{id:101,name:"SAMARA DUBAI",color:"champagne",style:{sil:"batwing",trim:1,deco:"pearl"},image:HERO_IMAGE,hoverImage:""},
 102:{id:102,name:"The Dubai Edit",color:"green",style:{sil:"flare",trim:1,deco:"emb",open:1},image:DUBAI_EDIT_IMAGE,hoverImage:""},
 103:{id:103,name:"Limited Collection",color:"black",style:{sil:"flare",trim:1,deco:"crystal"},image:LIMITED_IMAGE,hoverImage:""}
};
const CATS=["all","black","neutral","emb","crystal","evening","new"];

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const rd=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}};
const wr=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let L=Number.isInteger(rd("sd_lang"))?rd("sd_lang"):0, cart=rd("sd_cart")||[], wish=rd("sd_wish")||[], cat="all";
const t=k=>(T[k]||[k,k,k])[L], byId=id=>products.find(p=>p.id===id)||extra[id], isW=id=>wish.includes(id), money=n=>"$"+n;
const persist=()=>{wr("sd_cart",cart);wr("sd_wish",wish)};
const NEUTRAL=["cream","champagne","beige"];
const hasCat=(p,c)=>c==="all"||(c==="black"&&p.color==="black")||(c==="neutral"&&NEUTRAL.includes(p.color))||(c==="emb"&&p.style.deco==="emb")||(c==="crystal"&&p.style.deco==="crystal")||(c==="evening"&&p.style.sil==="flare")||(c==="new"&&p.isNew);
const catOf=p=>p.style.deco==="emb"?"emb":p.style.deco==="crystal"?"crystal":p.style.sil==="flare"?"evening":NEUTRAL.includes(p.color)?"neutral":"black";

/* ===== illustrated abaya engine ===== */
let uid=0;const GOLD="#c9a45c";
const PAL={black:["#403935","#0b0908"],cream:["#f4ead8","#cdbb9a"],champagne:["#ecd9b5","#b99a68"],beige:["#dcc7a6","#a5865f"],brown:["#6d4c3a","#22160f"],green:["#22755a","#082b20"]};
const SIL={
 straight:{r:"M116 124C98 140 92 190 86 270L74 432H226L214 270C208 190 202 140 184 124C170 134 130 134 116 124Z",s:"M118 130C98 165 88 250 84 342L106 346C108 268 120 196 134 150Z",l:74,rr:226,cu:"M84 341L106 345"},
 batwing:{r:"M116 124C100 145 96 200 92 290L84 432H216L208 290C204 200 200 145 184 124C170 134 130 134 116 124Z",s:"M118 128C70 160 34 250 22 340C58 356 92 334 104 300C110 250 120 200 136 150Z",l:84,rr:216,cu:"M22 340C58 356 92 334 104 300"},
 flare:{r:"M116 124C100 140 96 200 90 280L36 432H264L210 280C204 200 200 140 184 124C170 134 130 134 116 124Z",s:"M118 130C98 165 88 250 84 342L106 346C108 268 120 196 134 150Z",l:36,rr:264,cu:"M84 341L106 345"}
};
function rnd(seed){let s=seed*9301+49297;return()=>((s=(s*9301+49297)%233280)/233280)}
function flower(x,y,r){let s=`<circle cx="${x}" cy="${y}" r="${r}"/>`;for(let a=0;a<360;a+=72){s+=`<circle cx="${(x+Math.cos(a*Math.PI/180)*r*2.1).toFixed(1)}" cy="${(y+Math.sin(a*Math.PI/180)*r*2.1).toFixed(1)}" r="${(r*.7).toFixed(1)}"/>`}return s}
function abaya(p,v,o){
  v=v||0;o=o||{};
  const id="a"+(++uid),[c1,c2]=PAL[p.color],st=p.style,S=SIL[st.sil],light=NEUTRAL.includes(p.color),R=rnd(p.id*13+v*7);
  let trim="",deco="";
  if(st.trim){trim+=`<g stroke="${GOLD}" fill="none" stroke-width="1.6"><path d="M${S.l+4} 424H${S.rr-4}"/><path d="${S.cu}"/><path d="M150 132V432" stroke-width="1.1" opacity=".8"/></g>`}
  if(st.open){trim=`<path d="M144 130L156 130L166 432L134 432Z" fill="${c2}" opacity=".55"/>`+trim}
  if(st.deco==="emb"){deco+=`<g fill="${GOLD}">`;for(let x=S.l+14;x<S.rr-8;x+=20)deco+=flower(x,410,2.2);for(let y=150;y<400;y+=26)deco+=flower(150,y,1.6);for(let i=0;i<4;i++)deco+=flower(40+i*20+(st.sil==="straight"?48:0),330-i*2,1.8);deco+="</g>"}
  if(st.deco==="crystal"){for(let i=0;i<80;i++){const y=124+Math.pow(R(),1.5)*300,hw=Math.min(34+(y-124)*.3,S.rr-152),x=150+(R()*2-1)*hw,r=.7+R()*1.6;deco+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r*2.4).toFixed(1)}" fill="#fff" opacity=".16"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#fff" opacity=".92"/>`}}
  if(st.deco==="pearl"){const pr=(x,y,r)=>`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#f8f1e3" stroke="#bfa984" stroke-width=".5"/>`;for(let i=0;i<11;i++)deco+=pr(118+i*6.4,128+Math.sin(i/10*Math.PI)*8,3.2);for(let x=S.l+10;x<S.rr-6;x+=16)deco+=pr(x,414,2.8);for(let y=150;y<410;y+=16)deco+=pr(150,y,2.6)}
  if(st.deco==="velvet")deco+=`<path d="${S.r}" fill="url(#${id}s)"/>`;
  const bgc=light?["#4a382c","#120d0a"]:v?["#e8d9be","#b79f78"]:["#f1e6d2","#cdb894"];
  const bg=o.bare?"":`<rect x="-200" y="-200" width="700" height="900" fill="url(#${id}b)"/>`;
  const sl=`<path d="${S.s}" fill="url(#${id})" stroke="rgba(0,0,0,.28)"/>`;
  return `<svg viewBox="${o.vb||(v?"52 96 196 294":"0 24 300 408")}" preserveAspectRatio="${o.par||"xMidYMid slice"}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name}"><defs>
<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
<linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bgc[0]}"/><stop offset="1" stop-color="${bgc[1]}"/></linearGradient>
<linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".35" stop-color="#fff" stop-opacity=".24"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient></defs>${bg}
<path d="M56 440V190C56 128 100 76 150 44C200 76 244 128 244 190V440" fill="none" stroke="${GOLD}" stroke-opacity=".3" stroke-width="1.2"/>
<ellipse cx="150" cy="436" rx="${S.rr/2-10}" ry="8" fill="#000" opacity=".3"/>
<path d="${S.r}" fill="url(#${id})"/>${sl}<g transform="translate(300 0) scale(-1 1)">${sl}</g>
<path d="M150 44C128 44 118 62 118 84C118 104 108 118 100 134C126 150 174 150 200 134C192 118 182 104 182 84C182 62 172 44 150 44Z" fill="url(#${id})" stroke="rgba(0,0,0,.25)"/>
<ellipse cx="150" cy="88" rx="13" ry="17" fill="#d8b493"/><path d="M137 88C137 74 163 74 163 88" fill="none" stroke="rgba(0,0,0,.18)"/>${trim}${deco}</svg>`;
}
/* image (photo if URL set) or illustration */
function art(p,v,o){
  const url=v?(p.hoverImage||p.image):p.image;
  if(url)return `<div class="art"><img data-p="${p.id}" data-v="${v||0}" src="${url}" alt="${p.name}" ${o&&o.eager?"":'loading="lazy"'}></div>`;
  return `<div class="art">${abaya(p,v,o)}</div>`;
}
document.addEventListener("error",e=>{const im=e.target;if(im.tagName==="IMG"&&im.dataset.p){const p=byId(+im.dataset.p);if(p){const a=im.closest(".art");if(a)a.innerHTML=abaya(p,+im.dataset.v,a.closest(".bg,.h-img")?{bare:1,par:"xMaxYMid meet"}:{})}}},true);

/* ===== catalog ===== */
function card(p){
  return `<article class="card rv" tabindex="0" data-id="${p.id}" aria-label="${p.name}"><div class="img">${p.badge?`<span class="tag">${p.badge}</span>`:""}
  <button class="heart ${isW(p.id)?"on":""}" data-heart="${p.id}" aria-pressed="${isW(p.id)}" aria-label="${t("wish")}">${isW(p.id)?"♥":"♡"}</button>${art(p,0)}${art(p,1)}
  <div class="ov2"><button class="qv" data-open="${p.id}">${t("qv")}</button><button class="add" data-open="${p.id}">${t("add")}</button></div></div>
  <div class="info"><h3>${p.name}</h3><p class="d">${t("cb_"+catOf(p))} · ${t("k_"+p.color)}</p><p class="m">${p.sizes.join(" ")}</p><p class="pr">${p.currency}${p.price}</p></div></article>`;
}
function renderCats(){$("#cats").innerHTML=CATS.map(c=>`<button data-cat="${c}" class="${c===cat?"on":""}">${c==="all"?t("c_all"):t("cb_"+c)}</button>`).join("")}
function renderGrid(){
  const c=$("#fColor").value,s=$("#fSize").value,pr=$("#fPrice").value,so=$("#sort").value;
  let list=products.filter(p=>hasCat(p,cat)&&(!c||p.color===c)&&(!s||p.sizes.includes(s)));
  if(pr){const[a,b]=pr.split("-").map(Number);list=list.filter(p=>p.price>=a&&p.price<b)}
  if(so==="asc")list.sort((a,b)=>a.price-b.price);else if(so==="desc")list.sort((a,b)=>b.price-a.price);else if(so==="new")list.sort((a,b)=>b.date-a.date);
  $("#grid").innerHTML=list.length?list.map(card).join(""):`<p class="empty">${t("nores")}</p>`;
  observe();
}
["fColor","fSize","fPrice","sort"].forEach(id=>$("#"+id).addEventListener("change",renderGrid));

/* ===== cart / wishlist ===== */
function addToCart(id,size,qty){const it=cart.find(i=>i.id===id&&i.size===size);it?it.qty+=qty:cart.push({id,size,qty});persist();renderCart();toast(t("added"))}
const cartTotal=()=>cart.reduce((s,i)=>s+byId(i.id).price*i.qty,0);
function renderCart(){
  $("#cc").textContent=cart.reduce((n,i)=>n+i.qty,0);
  $("#cartB").innerHTML=cart.length?cart.map((i,k)=>{const p=byId(i.id);return `<div class="row"><div class="th">${art(p,0)}</div><div><strong>${p.name}</strong><br>${t("size")}: ${i.size} — ${money(p.price)}<br><span class="qty"><button data-q="${k}" data-d="-1" aria-label="−">−</button><span>${i.qty}</span><button data-q="${k}" data-d="1" aria-label="+">+</button></span></div><button class="rm" data-rm="${k}">${t("rm")}</button></div>`}).join(""):`<p style="padding:2rem 0">${t("e_cart")}</p>`;
  $("#cartF").innerHTML=cart.length?`<div class="sum"><span>${t("sub_t")}</span><span>${money(cartTotal())}</span></div><div class="sum tot"><span>${t("tot")}</span><span>${money(cartTotal())}</span></div><button class="btn dk" id="goCk">${t("chk")}</button><button class="btn o" id="goCont">${t("cont")}</button><button class="rm" id="clr">${t("clear")}</button>`:`<button class="btn o" id="goCont">${t("cont")}</button>`;
}
function renderWish(){
  $("#wc").textContent=wish.length;
  $("#wishB").innerHTML=wish.length?wish.map(id=>{const p=byId(id);return `<div class="row"><div class="th">${art(p,0)}</div><div><strong>${p.name}</strong><br>${money(p.price)}<br><button class="rm" data-open="${id}">${t("add")}</button></div><button class="rm" data-heart="${id}">${t("rm")}</button></div>`}).join(""):`<p style="padding:2rem 0">${t("e_wish")}</p>`;
}
function toggleWish(id){
  wish=isW(id)?wish.filter(w=>w!==id):[...wish,id];persist();renderWish();
  $$(`.heart[data-heart="${id}"]`).forEach(b=>{b.classList.remove("on");void b.offsetWidth;b.classList.toggle("on",isW(id));b.textContent=isW(id)?"♥":"♡";b.setAttribute("aria-pressed",isW(id))});
  const pw=$("#pdWish");if(pw)pw.textContent=(isW(id)?"♥ ":"♡ ")+t("wish");
}

/* ===== panels ===== */
let lastFocus=null;const ovl=$("#ovl");
function openP(el){closeP(true);lastFocus=document.activeElement;el.classList.add("on");if(el.classList.contains("drawer"))ovl.classList.add("on");else document.body.style.overflow="hidden";const f=$("[data-close],input,button",el);f&&setTimeout(()=>f.focus(),60)}
function closeP(silent){$$(".drawer,.search,.modal").forEach(e=>e.classList.remove("on"));ovl.classList.remove("on");document.body.style.overflow="";if(!silent&&lastFocus&&lastFocus.focus)lastFocus.focus()}
ovl.onclick=()=>closeP();
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeP();if(e.key==="Enter"&&e.target.classList&&e.target.classList.contains("card"))detail(+e.target.dataset.id)});
$("#bCart").onclick=()=>openP($("#cartD"));$("#bWish").onclick=()=>openP($("#wishD"));$("#bSearch").onclick=()=>openP($("#searchO"));

$("#q").addEventListener("input",e=>{
  const s=e.target.value.trim().toLowerCase();
  const r=s?products.filter(p=>[p.name,p.color,t("k_"+p.color),t("cb_"+catOf(p)),catOf(p)].join(" ").toLowerCase().includes(s)):[];
  $("#sRes").innerHTML=r.length?r.map(p=>`<div class="card" tabindex="0" data-id="${p.id}"><div class="img">${art(p,0)}</div><div class="info"><h3>${p.name}</h3><p class="pr">${money(p.price)}</p></div></div>`).join(""):s?`<p>${t("nores")}</p>`:"";
});

/* product modal: gallery, required size, quantity */
function detail(id){
  const p=byId(id);let size=null,qty=1,gi=0;const m=$("#modal");
  m.innerHTML=`<button class="x" data-close aria-label="Close">×</button><div class="pd"><div><div class="main" id="pdMain">${art(p,0,{eager:1})}</div><div class="thumbs"><button class="on" data-g="0" aria-label="1">${art(p,0)}</button><button data-g="1" aria-label="2">${art(p,1)}</button></div></div>
  <div class="pd-i"><p class="sub">${p.badge||"SAMARA DUBAI"}</p><h2>${p.name}</h2><div class="price">${p.currency}${p.price}</div><p>${t("d_"+p.d)}</p>
  <h4>${t("color")}</h4><p><span class="dot" style="background:${PAL[p.color][0]}"></span>${t("k_"+p.color)}</p>
  <h4>${t("size")}</h4><div class="sizes" role="group">${p.sizes.map(s=>`<button data-s="${s}" aria-pressed="false">${s}</button>`).join("")}</div>
  <h4>${t("qty")}</h4><span class="qty"><button id="qm" aria-label="−">−</button><span id="qv">1</span><button id="qp" aria-label="+">+</button></span>
  <button class="btn" id="pdAdd">${t("add")}</button><button class="btn o" id="pdWish">${isW(id)?"♥ ":"♡ "}${t("wish")}</button></div></div>`;
  openP(m);
  const show=i=>{gi=(i+2)%2;$("#pdMain").innerHTML=art(p,gi,{eager:1});$$("[data-g]",m).forEach(b=>b.classList.toggle("on",+b.dataset.g===gi))};
  $$("[data-g]",m).forEach(b=>b.onclick=()=>show(+b.dataset.g));
  let sx=0;const mn=$("#pdMain");mn.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});mn.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)show(gi+(d<0?1:-1))});
  $$("[data-s]",m).forEach(b=>b.onclick=()=>{$$("[data-s]",m).forEach(x=>{x.classList.remove("on");x.setAttribute("aria-pressed","false")});b.classList.add("on");b.setAttribute("aria-pressed","true");size=b.dataset.s});
  $("#qm").onclick=()=>{qty=Math.max(1,qty-1);$("#qv").textContent=qty};$("#qp").onclick=()=>{qty++;$("#qv").textContent=qty};
  $("#pdAdd").onclick=()=>{if(!size){toast(t("pick"));return}addToCart(id,size,qty);closeP(true);openP($("#cartD"))};
  $("#pdWish").onclick=()=>toggleWish(id);
}

/* checkout */
function openCheckout(){$("#ckTot").textContent=money(cartTotal());$("#ckSize").value=cart.map(i=>`${byId(i.id).name} — ${i.size} ×${i.qty}`).join("; ");$("#ckF").hidden=false;$(".ck h2").hidden=false;$("#thanks").hidden=true;openP($("#ckM"))}
$("#ckF").onsubmit=e=>{e.preventDefault();cart=[];persist();renderCart();e.target.reset();$("#ckF").hidden=true;$(".ck h2").hidden=true;$("#thanks").hidden=false;$("#thanks").textContent=t("thanks")};

/* clicks */
document.addEventListener("click",e=>{
  const x=e.target;
  if(x.closest("[data-close]"))return closeP();
  const h=x.closest("[data-heart]");if(h){e.stopPropagation();return toggleWish(+h.dataset.heart)}
  const o=x.closest("[data-open]");if(o){e.stopPropagation();return detail(+o.dataset.open)}
  const ct=x.closest("[data-cat]");if(ct){cat=ct.dataset.cat;renderCats();return renderGrid()}
  const q=x.closest("[data-q]");if(q){const i=cart[+q.dataset.q];i.qty+=+q.dataset.d;if(i.qty<1)cart.splice(+q.dataset.q,1);persist();return renderCart()}
  const r=x.closest("[data-rm]");if(r){cart.splice(+r.dataset.rm,1);persist();return renderCart()}
  if(x.closest("#clr")){cart=[];persist();return renderCart()}
  if(x.closest("#goCont"))return closeP();
  if(x.closest("#goCk"))return openCheckout();
  const l=x.closest("[data-l]");if(l)return setLang(+l.dataset.l);
  const mm=x.closest("[data-mm]");if(mm){toggleMenu(false);return openP($(mm.dataset.mm==="cart"?"#cartD":"#wishD"))}
  if(x.closest(".mm a")||x.closest("nav a"))toggleMenu(false);
  const inf=x.closest("[data-info]");if(inf){e.preventDefault();return toast(t("info"))}
  const c=x.closest(".card[data-id],.look figure[data-id]");if(c)detail(+c.dataset.id);
});
$("#limBtn").onclick=()=>{cat="all";$("#fColor").value="";$("#fSize").value="";$("#fPrice").value="";renderCats();renderGrid();$("#collection").scrollIntoView({behavior:"smooth"})};

/* language */
function setLang(i){L=i;wr("sd_lang",i);apply();renderCats();renderGrid();renderCart();renderWish();renderLook()}
function apply(){document.documentElement.lang=LANGS[L];$$("[data-t]").forEach(e=>e.textContent=t(e.dataset.t));$$("[data-p]").forEach(e=>e.placeholder=t(e.dataset.p));$$("[data-l]").forEach(b=>b.classList.toggle("on",+b.dataset.l===L))}

/* lookbook: asymmetrical editorial grid */
function renderLook(){
  const set=[[8,0],[2,1],[5,0],[11,1],[10,0],[3,1]];
  $("#look").innerHTML=set.map(([id,v],i)=>{const p=byId(id);return `<figure class="t${i+1} rv" data-id="${id}" tabindex="0">${art(p,v)}<figcaption><b>${p.name}</b><span>${t("look_v")}</span></figcaption></figure>`}).join("");observe();
}

/* whatsapp / toast / header / menu */
const waLink=()=>`https://wa.me/${whatsappNumber.replace(/\D/g,"")}?text=${encodeURIComponent(t("wa"))}`;
$("#waBtn").onclick=()=>window.open(waLink(),"_blank","noopener");$("#fWa").onclick=e=>{e.preventDefault();window.open(waLink(),"_blank","noopener")};
function toast(m){const el=$("#toast");el.textContent=m;el.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("on"),2400)}
const hdr=$("#hdr");
function solid(){hdr.classList.toggle("solid",scrollY>60&&!$("#mm").classList.contains("on"))}
function toggleMenu(on){$("#mm").classList.toggle("on",on);$("#burger").setAttribute("aria-expanded",on);$("#burger").textContent=on?"×":"☰";document.body.style.overflow=on?"hidden":"";solid()}
$("#burger").onclick=()=>toggleMenu(!$("#mm").classList.contains("on"));

/* hero, editorial, about */
const big={bare:1,par:"xMaxYMid meet"};
$("#hImg").innerHTML=art(extra[101],0,{...big,eager:1});
$("#editBg").innerHTML=art(extra[102],0,{...big,par:"xMaxYMid meet"});
$("#limBg").innerHTML=art(extra[103],0,{...big,par:"xMinYMid meet"});
$("#aboutArt").innerHTML=art({id:104,name:"SAMARA DUBAI",color:"champagne",style:{sil:"straight",trim:1,deco:"pearl"},image:""},1);

/* dust */
(()=>{const d=$("#dust");for(let i=0;i<26;i++){const s=document.createElement("span"),z=1+Math.random()*3;s.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${14+Math.random()*16}s;animation-delay:${-Math.random()*20}s`;d.appendChild(s)}})();

/* scroll parallax (editorial) + header */
const pars=$$("[data-par]");let tick=false;
function onScroll(){solid();if(tick)return;tick=true;requestAnimationFrame(()=>{pars.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)el.style.transform=`translateY(${(r.top+r.height/2-innerHeight/2)*+el.dataset.par}px)`});tick=false})}
addEventListener("scroll",onScroll,{passive:true});

/* desktop only: hero parallax + cursor */
if(matchMedia("(hover:hover) and (pointer:fine)").matches){
  const hero=$("#home");
  hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    $$(".px1").forEach(el=>el.style.transform=`translate(${x*12}px,${y*12}px)`);$$(".px2").forEach(el=>el.style.translate=`${x*6}px ${y*6}px`);$$(".px3").forEach(el=>el.style.transform=`translate(${x*3}px,${y*3}px)`)});
  const cur=$("#cur");let cx=0,cy=0,tx=0,ty=0;document.body.classList.add("cursor-on");
  addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;cur.classList.add("show");cur.classList.toggle("big",!!e.target.closest("a,button,.card,figure,select,input"))});
  document.addEventListener("mouseleave",()=>cur.classList.remove("show"));
  (function loop(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop)})();
}

/* reveal */
let io;function observe(){io=io||new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});$$(".rv:not(.in)").forEach(el=>io.observe(el))}

/* loader */
const t0=performance.now();
addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("off"),Math.max(0,1900-(performance.now()-t0))));
setTimeout(()=>$("#loader").classList.add("off"),4000);

apply();renderCats();renderGrid();renderCart();renderWish();renderLook();observe();onScroll();
