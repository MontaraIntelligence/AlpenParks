(function(){

if(document.getElementById("montara-concierge")) return;


/* CSS */
const style=document.createElement("style");

style.innerHTML=`

#montara-concierge {
  position: fixed !important;
  right: 24px !important;
  bottom: 24px !important;
  z-index: 999999 !important;
  font-family: Inter, Arial, sans-serif;
}


/* SMALL POPUP */

#montara-nudge {
  position: absolute;
  right: 0;
  bottom: 76px;

  background: white;
  color: #2F3A34;

  padding: 12px 16px;
  border-radius: 18px;

  box-shadow: 0 12px 35px rgba(47,58,52,.18);

  font-size: 14px;

  opacity: 0;
  visibility: hidden;

  transform: translateY(10px);

  transition: .25s ease;

  pointer-events: none;
  white-space: nowrap;
}


#montara-nudge.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}


/* OPEN BUTTON */


#montara-open-button {
  display: flex;

  align-items: center;

  gap: 12px;


  border: none;


  background: linear-gradient(
    135deg,
    #2F3A34,
    #4F6B5A
  );


  color:white;


  padding:17px 24px;

  border-radius:999px;


  cursor:pointer;


  font-size:16px;


  box-shadow:
  0 20px 55px
  rgba(47,58,52,.35);


  animation:
  montaraFloat
  4s ease-in-out infinite;


  transition:.22s ease;
}



@keyframes montaraFloat {

0%,100% {
transform:translateY(0);
}

50% {
transform:translateY(-3px);
}

}



#montara-open-button:hover {
transform:translateY(-2px);
}


#montara-open-button:active {
transform:scale(.96);
}


#montara-open-button.is-hidden {
display:none;
}



.montara-open-icon {

width:28px;

height:28px;


border-radius:50%;


border:
2px solid #B18A5A;


display:flex;

align-items:center;

justify-content:center;

}



/* CHAT PANEL */


#montara-chat-panel {

position:absolute;

right:0;

bottom:0;


width:450px;

height:690px;


max-height:
calc(100vh - 48px);


background:#F6F1EA;


border-radius:26px;


overflow:hidden;


box-shadow:
0 28px 90px
rgba(0,0,0,.28);


border:
1px solid
rgba(47,58,52,.15);



display:flex;

flex-direction:column;



opacity:0;

visibility:hidden;

pointer-events:none;



transform:
translateY(18px)
scale(.96);


transform-origin:
bottom right;


transition:.28s ease;

}



#montara-chat-panel.is-open {

opacity:1;

visibility:visible;

pointer-events:auto;


transform:
translateY(0)
scale(1);

}



/* HEADER */


.montara-chat-top {

background:
linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


padding:
18px 20px;


display:flex;

align-items:center;

gap:12px;


color:white;

}



.montara-brand {

display:flex;

align-items:center;

gap:14px;

flex:1;

}



.montara-logo {

width:52px;

height:52px;

min-width:52px;


border-radius:50%;


background:white;


overflow:hidden;


border:
2px solid #B18A5A;

}



.montara-logo img,
.montara-avatar img,
.montara-bot-avatar img {

width:100%;

height:100%;

object-fit:cover;

}



.montara-brand h3 {

margin:0;

font-size:20px;

font-weight:800;

color:white;

}



.montara-status {

display:flex;

gap:6px;

align-items:center;


margin:
4px 0 0;


font-size:12px;

}



.montara-status-dot {

width:8px;

height:8px;


background:#3ED17A;


border-radius:50%;


animation:
pulse
1.8s infinite;

}


@keyframes pulse {

0% {

box-shadow:
0 0 0 0
rgba(62,209,122,.7);

}

70% {

box-shadow:
0 0 0 8px
rgba(62,209,122,0);

}

100% {

box-shadow:
0 0 0 0
rgba(62,209,122,0);

}

}/* LANGUAGE */

.montara-lang-switch {

display:flex;

background:
rgba(255,255,255,.15);

padding:3px;

border-radius:999px;

}


.montara-lang-switch button {

border:none;

background:transparent;

color:white;


padding:
6px 8px;


border-radius:999px;


font-size:11px;


cursor:pointer;

}


.montara-lang-switch .active {

background:white;

color:#2F3A34;

}


/* CLOSE */


#montara-close-button {

width:42px;

height:42px;


border:none;

border-radius:50%;


background:
rgba(255,255,255,.15);


color:white;


font-size:30px;


cursor:pointer;

}


/* BODY */


.montara-chat-body {

flex:1;


padding:22px;


overflow-y:auto;


background:#F6F1EA;

}



.montara-welcome-row {

display:flex;


gap:10px;


margin-bottom:18px;


animation:
welcomeIn
.45s ease;

}



@keyframes welcomeIn {

from {

opacity:0;

transform:
translateY(10px);

}

to {

opacity:1;

transform:
translateY(0);

}

}



.montara-avatar {

width:68px;

height:68px;

min-width:68px;


border-radius:50%;


overflow:hidden;


background:white;


border:
3px solid white;

}



.montara-welcome-card {

background:
linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


color:white;


padding:14px;


border-radius:14px;


max-width:260px;


box-shadow:
0 10px 24px
rgba(47,58,52,.22);

}



.montara-welcome-card strong {

font-size:15px;

display:block;

margin-bottom:6px;

}


.montara-welcome-card p {

font-size:12px;

line-height:1.4;

margin:0;

}



/* TRUST BADGE */

.montara-trust {

margin-top:12px;

padding-top:10px;


border-top:
1px solid
rgba(177,138,90,.25);


font-size:10px;

line-height:1.6;


color:#D7C3A5;


font-weight:400;


letter-spacing:.2px;


opacity:.85;

}



/* CARDS */


.montara-quick-buttons {

display:grid;

grid-template-columns:
1fr 1fr;


gap:10px;

}



.montara-card {

background:white;


border-radius:14px;


padding:
11px 12px;


display:flex;

align-items:center;


gap:10px;


cursor:pointer;


box-shadow:
0 5px 14px
rgba(47,58,52,.1);


transition:.18s ease;

}



.montara-card:hover {

background:#EFE6DB;

transform:
translateY(-2px);

}



.montara-card:active {

transform:
scale(.96);

}



.montara-card-icon {

font-size:22px;

}



.montara-card-title {

font-size:13px;


font-weight:800;


color:#2F3A34;

}



.montara-card-subtitle {

font-size:11px;


color:#7A6F66;

}



/* MESSAGES */


.montara-message {

display:flex;


margin:
12px 0;


animation:
welcomeIn
.25s ease;

}



.montara-message.user {

justify-content:flex-end;

}



.montara-message.bot {

gap:10px;

}



.montara-bot-avatar {

width:32px;

height:32px;

min-width:32px;


border-radius:50%;


overflow:hidden;


background:white;

}



.montara-bubble {

max-width:82%;


padding:
13px 15px;


border-radius:16px;


font-size:14px;


line-height:1.45;


white-space:pre-wrap;

}



.user .montara-bubble {

background:#4F6B5A;


color:white;

}



.bot .montara-bubble {

background:white;


color:#222;

}



.montara-time {

display:block;


font-size:10px;


opacity:.55;


margin-top:6px;


text-align:right;

}



/* TYPING */


.montara-typing {

display:inline-flex;


align-items:center;


gap:5px;


background:white;


padding:
12px 14px;


border-radius:16px;

}


.montara-typing span {

width:7px;

height:7px;


background:#7A6F66;


border-radius:50%;


animation:
typingBounce
1.1s infinite;

}


.montara-typing span:nth-child(2){

animation-delay:.15s;

}


.montara-typing span:nth-child(3){

animation-delay:.3s;

}


@keyframes typingBounce {

0%,80%,100%{

transform:
translateY(0);

opacity:.35;

}


40%{

transform:
translateY(-5px);

opacity:1;

}

}



/* FOOTER */


.montara-chat-footer {

display:flex;


gap:10px;


padding:
16px 18px 12px;


background:#E8DED2;

}



#montara-reset-button {

width:42px;

height:42px;


border:none;


border-radius:50%;


background:white;


cursor:pointer;

}



#montara-chat-input {

flex:1;


border:none;


outline:none;


padding:
13px 16px;


border-radius:999px;


font-size:14px;

}



#montara-send-button {

width:46px;

height:46px;


border:none;


border-radius:50%;


background:#B18A5A;


color:white;


cursor:pointer;


font-size:20px;

}



#montara-send-button:active,
#montara-reset-button:active {

transform:
scale(.96);

}



.montara-powered {

background:#E8DED2;


text-align:center;


font-size:12px;


color:#7A6F66;


padding-bottom:12px;

}



/* MOBILE */

@media screen and (max-width: 991.98px) {

  #montara-concierge {
    right: 14px !important;
    bottom: 70px !important;

    width: auto !important;
    margin-left: auto;

    left: auto !important;
  }

  #montara-chat-panel {
    right: 0;
    bottom: 0;

    width: calc(100vw - 30px);
    max-width: calc(100vw - 30px);

    height: 82vh;
    max-height: calc(100vh - 100px);
  }

  #montara-chat-panel.is-open {
    width: calc(100vw - 30px);
  }

  #montara-open-button {
    width: auto;
    min-width: 58px;
    min-height: 58px;

    padding: 14px;

    justify-content: center;
  }

  #montara-open-button strong:not(.montara-open-icon) {
    display: none;
  }

  .montara-open-icon {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }

  .montara-quick-buttons {
    grid-template-columns: 1fr;
  }
}

`;

document.head.appendChild(style);



/* HTML */
const wrapper=document.createElement("div");

wrapper.innerHTML=`

<div id="montara-concierge">


  <!-- SMART POPUP -->

  <div id="montara-nudge" data-i18n="nudge">
    👋 Haben Sie Fragen zu Ihrem Aufenthalt?
  </div>



  <!-- CLOSED BUTTON -->

  <button id="montara-open-button">

    <span class="montara-open-icon">
      💬
    </span>

    <strong data-i18n="openButton">
      AlpenParks Digital Concierge
    </strong>

  </button>





  <!-- CHAT WINDOW -->


  <div id="montara-chat-panel">



    <!-- HEADER -->


    <div class="montara-chat-top">



      <div class="montara-brand">



        <div class="montara-logo">

          <img src="https://res.cloudinary.com/seekda/image/upload/w_375,h_210,c_limit,f_auto,fl_lossy,q_auto/production/S005886/app-icon_310x310.png">

        </div>




        <div>


          <h3 data-i18n="headerTitle">
            AlpenParks Concierge
          </h3>



          <p class="montara-status">

            <span class="montara-status-dot"></span>


            <span data-i18n="status">
              24/7 verfügbar · Antwortet sofort
            </span>


          </p>


        </div>



      </div>





      <!-- LANGUAGE SWITCH -->


      <div class="montara-lang-switch">

        <button 
        class="active"
        data-lang="de">

          DEU

        </button>


        <button data-lang="en">

          ENG

        </button>


      </div>





      <button id="montara-close-button">

        ×

      </button>



    </div>








    <!-- BODY -->



    <div 
    class="montara-chat-body"
    id="montara-chat-body">





      <!-- WELCOME -->



      <div class="montara-welcome-row">



        <div class="montara-avatar">


          <img src="https://images.squarespace-cdn.com/content/6a23f2747f909d53b11bcf1f/ef01d550-b6b2-4fc6-82e5-3eb769d23824/ChatGPT+Image+18+%D0%B8%D1%8E%D0%BD.+2026+%D0%B3.%2C+18_37_33.png?content-type=image%2Fpng">


        </div>





        <div>



          <div class="montara-welcome-card">



            <strong id="montara-dynamic-greeting">

              🏔️ Guten Tag 👋

            </strong>



            <p data-i18n="welcomeText">

              Ich helfe Ihnen gerne bei Unterkünften,
              Buchungen, Frühstück, Wellness und
              allgemeinen Hotelinformationen.


            </p>






            <div
            class="montara-trust"
            data-i18n="trust">


              ✓ Geprüfte Hotelinformationen<br>
              ✓ Mehrsprachiger AI Concierge


            </div>




          </div>



        </div>



      </div>









      <!-- QUICK BUTTONS -->



      <div class="montara-quick-buttons">





        <div
        class="montara-card"
        data-key="accommodation"
        data-message="Welche Unterkunftsarten bieten Sie an?">



          <div class="montara-card-icon">

            🛏️

          </div>



          <div>


            <div 
            class="montara-card-title"
            data-i18n="cardAccommodationTitle">


              Unterkunft


            </div>



            <div 
            class="montara-card-subtitle"
            data-i18n="cardAccommodationSub">


              Zimmer & Apartments


            </div>


          </div>



        </div>










        <div
        class="montara-card"
        data-key="booking"
        data-message="Ich möchte eine Buchungsanfrage stellen.">



          <div class="montara-card-icon">

            📅

          </div>



          <div>


            <div
            class="montara-card-title"
            data-i18n="cardBookingTitle">

              Reservierung

            </div>



            <div
            class="montara-card-subtitle"
            data-i18n="cardBookingSub">

              Aufenthalt anfragen

            </div>


          </div>



        </div>









        <div
        class="montara-card"
        data-key="breakfast"
        data-message="Wie viel kostet das Frühstück?">


          <div class="montara-card-icon">

            ☕

          </div>



          <div>


            <div
            class="montara-card-title"
            data-i18n="cardBreakfastTitle">

              Frühstück

            </div>


            <div
            class="montara-card-subtitle"
            data-i18n="cardBreakfastSub">

              Preise & Informationen

            </div>



          </div>



        </div>











        <div
        class="montara-card"
        data-key="wellness"
        data-message="Wie sind die Öffnungszeiten des Spa- und Wellnessbereichs?">


          <div class="montara-card-icon">

            🪷

          </div>



          <div>


            <div
            class="montara-card-title"
            data-i18n="cardWellnessTitle">

              Wellness & Spa

            </div>



            <div
            class="montara-card-subtitle"
            data-i18n="cardWellnessSub">

              Pool, Sauna & Fitness

            </div>


          </div>



        </div>









        <div
        class="montara-card"
        data-key="parking"
        data-message="Sind Parkplätze vorhanden?">


          <div class="montara-card-icon">

            🚗

          </div>


          <div>


            <div
            class="montara-card-title"
            data-i18n="cardParkingTitle">

              Parken

            </div>



            <div
            class="montara-card-subtitle"
            data-i18n="cardParkingSub">

              Parken & E-Laden

            </div>



          </div>



        </div>









        <div
        class="montara-card"
        data-key="reception"
        data-message="Wie kann ich die Rezeption kontaktieren?">


          <div class="montara-card-icon">

            📞

          </div>



          <div>



            <div
            class="montara-card-title"
            data-i18n="cardReceptionTitle">

              Rezeption

            </div>



            <div
            class="montara-card-subtitle"
            data-i18n="cardReceptionSub">

              Kontakt aufnehmen

            </div>



          </div>




        </div>






      </div>




    </div>










    <!-- FOOTER -->



    <div class="montara-chat-footer">



      <button id="montara-reset-button">

        ↺

      </button>




      <input
      id="montara-chat-input"
      placeholder="Nachricht schreiben...">





      <button id="montara-send-button">

        ➤

      </button>




    </div>








    <!-- POWERED -->



    <div class="montara-powered">

      AlpenParks Intelligence

    </div>





  </div>




</div>

`;

document.body.appendChild(wrapper);



/* JS */
const MONTARA_WEBHOOK_URL =
"https://alpenparkstaxacher.app.n8n.cloud/webhook/hotel-chat"";


const MONTARA_AVATAR_URL =
"https://images.squarespace-cdn.com/content/6a23f2747f909d53b11bcf1f/ef01d550-b6b2-4fc6-82e5-3eb769d23824/ChatGPT+Image+18+%D0%B8%D1%8E%D0%BD.+2026+%D0%B3.%2C+18_37_33.png?content-type=image%2Fpng";



const openButton =
document.getElementById("montara-open-button");

const closeButton =
document.getElementById("montara-close-button");

const panel =
document.getElementById("montara-chat-panel");

const body =
document.getElementById("montara-chat-body");

const input =
document.getElementById("montara-chat-input");

const sendButton =
document.getElementById("montara-send-button");

const resetButton =
document.getElementById("montara-reset-button");

const nudge =
document.getElementById("montara-nudge");

const greeting =
document.getElementById("montara-dynamic-greeting");



let currentLang = "de";


let sessionId =
localStorage.getItem("montara_session_id")
||
crypto.randomUUID();


localStorage.setItem(
"montara_session_id",
sessionId
);




const translations = {


de: {


nudge:
"👋 Haben Sie Fragen zu Ihrem Aufenthalt?",


openButton:
"AlpenParks Digital Concierge",


headerTitle:
"AlpenParks Concierge",


status:
"24/7 verfügbar · Antwortet sofort",


welcomeText:
"Ich helfe Ihnen gerne bei Unterkünften, Buchungen, Frühstück, Wellness und allgemeinen Hotelinformationen.",


trust:
"✓ Geprüfte Hotelinformationen<br>✓ Mehrsprachiger AI Concierge",


placeholder:
"Nachricht schreiben...",


fallback:
"Vielen Dank. Die Rezeption hilft Ihnen gerne weiter.",


error:
"Entschuldigung, etwas ist schiefgelaufen. Bitte kontaktieren Sie die Rezeption.",



cardMessages:{


accommodation:
"Welche Unterkunftsarten bieten Sie an?",


booking:
"Ich möchte eine Buchungsanfrage stellen.",


breakfast:
"Wie viel kostet das Frühstück?",


wellness:
"Wie sind die Öffnungszeiten des Spa- und Wellnessbereichs?",


parking:
"Sind Parkplätze vorhanden?",


reception:
"Wie kann ich die Rezeption kontaktieren?"

},



cardAccommodationTitle:
"Unterkunft",

cardAccommodationSub:
"Zimmer & Apartments",


cardBookingTitle:
"Reservierung",

cardBookingSub:
"Aufenthalt anfragen",


cardBreakfastTitle:
"Frühstück",

cardBreakfastSub:
"Preise & Informationen",


cardWellnessTitle:
"Wellness & Spa",

cardWellnessSub:
"Pool, Sauna & Fitness",


cardParkingTitle:
"Parken",

cardParkingSub:
"Parken & E-Laden",


cardReceptionTitle:
"Rezeption",

cardReceptionSub:
"Kontakt aufnehmen"

},





en:{


nudge:
"👋 Do you have questions about your stay?",


openButton:
"AlpenParks Digital Concierge",


headerTitle:
"AlpenParks Concierge",


status:
"Available 24/7 · Replies instantly",


welcomeText:
"I can assist you with accommodation, bookings, breakfast, wellness and general hotel information.",


trust:
"✓ Verified hotel information<br>✓ Multilingual AI Concierge",


placeholder:
"Type your message...",


fallback:
"Thank you. Reception will be happy to assist you further.",


error:
"Sorry, something went wrong. Please contact reception.",



cardMessages:{


accommodation:
"What accommodation types do you offer?",


booking:
"I would like to make a booking inquiry.",


breakfast:
"How much is breakfast?",


wellness:
"What are the spa and wellness opening hours?",


parking:
"Is parking available?",


reception:
"How can I contact reception?"

},



cardAccommodationTitle:
"Accommodation",

cardAccommodationSub:
"Rooms & apartments",


cardBookingTitle:
"Booking Inquiry",

cardBookingSub:
"Request a stay",


cardBreakfastTitle:
"Breakfast",

cardBreakfastSub:
"Prices & information",


cardWellnessTitle:
"Wellness & Spa",

cardWellnessSub:
"Pool, sauna & fitness",


cardParkingTitle:
"Parking",

cardParkingSub:
"Parking & EV charging",


cardReceptionTitle:
"Reception",

cardReceptionSub:
"Contact hotel team"

}

};





function applyLanguage(lang){

currentLang = lang;


document
.querySelectorAll("[data-i18n]")
.forEach(el=>{


const key =
el.getAttribute("data-i18n");


if(translations[lang][key]){

el.innerHTML =
translations[lang][key];

}

});



document
.querySelectorAll(".montara-card")
.forEach(card=>{


const key =
card.dataset.key;


card.dataset.message =
translations[lang]
.cardMessages[key];


});



input.placeholder =
translations[lang].placeholder;



document
.querySelectorAll(".montara-lang-switch button")
.forEach(btn=>{

btn.classList.toggle(
"active",
btn.dataset.lang === lang
);

});


setGreeting();

}






function setGreeting(){


const hour =
new Date().getHours();



if(currentLang==="de"){


greeting.textContent =
hour < 12
? "☀️ Guten Morgen 👋"
:
hour < 18
? "🏔️ Guten Tag 👋"
:
"🌙 Guten Abend 👋";


}


else{


greeting.textContent =
hour < 12
? "☀️ Good morning 👋"
:
hour < 18
? "🏔️ Good afternoon 👋"
:
"🌙 Good evening 👋";

}

}





function addMessage(type,text){


const msg =
document.createElement("div");


msg.className =
`montara-message ${type}`;




if(type==="bot"){


const avatar =
document.createElement("div");


avatar.className =
"montara-bot-avatar";


avatar.innerHTML =
`<img src="${MONTARA_AVATAR_URL}">`;


msg.appendChild(avatar);


}




const bubble =
document.createElement("div");


bubble.className =
"montara-bubble";


bubble.textContent =
text;



const time =
document.createElement("span");


time.className =
"montara-time";


time.textContent =
new Date()
.toLocaleTimeString(
[],
{
hour:"2-digit",
minute:"2-digit"
}
);



bubble.appendChild(time);


msg.appendChild(bubble);


body.appendChild(msg);


body.scrollTop =
body.scrollHeight;


}





function addTyping(){


const typing =
document.createElement("div");


typing.id =
"montara-typing";


typing.className =
"montara-message bot";


typing.innerHTML =

`
<div class="montara-bot-avatar">
<img src="${MONTARA_AVATAR_URL}">
</div>

<div class="montara-typing">
<span></span>
<span></span>
<span></span>
</div>
`;


body.appendChild(typing);


}





function removeTyping(){


const t =
document.getElementById("montara-typing");


if(t) t.remove();


}





async function sendMessage(){


const text =
input.value.trim();


if(!text) return;



addMessage(
"user",
text
);



document.querySelector(
".montara-quick-buttons"
).style.display="none";



input.value="";


addTyping();




try{


const response =
await fetch(
MONTARA_WEBHOOK_URL,
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

action:"sendMessage",

sessionId,

chatInput:text,

language:currentLang

})

});



const data = await response.json();

removeTyping();

let reply =
  data.output ||
  data.text ||
  data.reply ||
  data.message ||
  translations[currentLang].fallback;


// если n8n случайно прислал объект
if (typeof reply === "object") {

  reply =
    reply.reply ||
    reply.output ||
    reply.text ||
    reply.message ||
    JSON.stringify(reply);

}


// если n8n прислал JSON как текст
if (typeof reply === "string") {

  const trimmed = reply.trim();

  if (
    trimmed.startsWith("{") &&
    trimmed.endsWith("}")
  ) {

    try {

      const parsed = JSON.parse(trimmed);

      reply =
        parsed.reply ||
        parsed.output ||
        parsed.text ||
        parsed.message ||
        reply;

    } catch(error) {}

  }

}


addMessage(
  "bot",
  reply
);


}



catch(e){


removeTyping();


addMessage(
"bot",
translations[currentLang].error
);


}


}







openButton.onclick = ()=>{


nudge.classList.remove("show");


panel.classList.add("is-open");


openButton.classList.add("is-hidden");


};




closeButton.onclick = ()=>{


panel.classList.remove("is-open");


openButton.classList.remove("is-hidden");


};





sendButton.onclick =
sendMessage;



input.addEventListener(
"keydown",
e=>{

if(e.key==="Enter")
sendMessage();

}
);





document
.querySelectorAll(".montara-card")
.forEach(card=>{


card.onclick=()=>{


input.value =
card.dataset.message;


sendMessage();


};

});






document
.querySelectorAll(".montara-lang-switch button")
.forEach(btn=>{


btn.onclick=()=>{

applyLanguage(
btn.dataset.lang
);

};


});






resetButton.onclick=()=>{


sessionId =
crypto.randomUUID();


localStorage.setItem(
"montara_session_id",
sessionId
);



document
.querySelectorAll(".montara-message")
.forEach(m=>m.remove());



document.querySelector(
".montara-quick-buttons"
).style.display="grid";


};





setTimeout(()=>{


if(
!panel.classList.contains("is-open")
){

nudge.classList.add("show");

}


},5000);





applyLanguage("de");


})();
