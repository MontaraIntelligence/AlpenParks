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


width:470px;

height:730px;


max-height:
calc(100vh - 48px);


background:#FBF8F2;


border-radius:28px;


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

background:linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


padding:18px 20px;


display:flex;

align-items:center;

gap:10px;


color:white;

}



.montara-brand {

display:flex;

align-items:center;

gap:12px;

flex:1;

}



.montara-logo {

width:58px;

height:58px;

min-width:58px;


border-radius:50%;


background:white;


overflow:hidden;


border:1px solid rgba(255,255,255,.65);

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

font-size:17px;

font-weight:700;

color:white;

}



.montara-status {

display:flex;

gap:6px;

align-items:center;


margin:
4px 0 0;


font-size:12px;

color:rgba(255,255,255,.9);

}



.montara-status-dot {

width:7px;

height:7px;


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

background:transparent;

padding:0;

border:1px solid rgba(255,255,255,.55);

border-radius:18px;

overflow:hidden;

}


.montara-lang-switch button {

border:none;

background:transparent;

color:white;


padding:8px 10px;


border-radius:0;


font-size:12px;


cursor:pointer;

}


.montara-lang-switch .active {

background:rgba(255,255,255,.16);

color:white;

}

.montara-lang-switch button + button {
  border-left:1px solid rgba(255,255,255,.55);
}

.montara-header-actions {
  display:flex;
  align-items:center;
  gap:8px;
}


/* CLOSE */


#montara-close-button {

width:28px;

height:28px;


border:none;

border-radius:50%;


background:transparent;


color:white;


font-size:26px;

line-height:1;


cursor:pointer;

}


/* BODY */


.montara-chat-body {

flex:1;


padding:14px 20px 18px;


overflow-y:auto;


background:#FBF8F2;

}



.montara-welcome-row {

display:flex;


gap:14px;


margin-bottom:16px;

padding:14px;

background:#EDF3EC;

border:1px solid #D7E0D6;

border-radius:12px;

align-items:center;


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

width:54px;

height:54px;

min-width:54px;


border-radius:50%;


overflow:hidden;


background:white;


border:2px solid white;

}



.montara-welcome-card {

background:transparent;

color:#25322B;

padding:0;

border-radius:0;

max-width:none;

box-shadow:none;

}



.montara-welcome-card strong {

font-size:15px;

display:block;

margin-bottom:7px;

}


.montara-welcome-card p {

font-size:13px;

line-height:1.4;

margin:0;

}



/* TRUST BADGE */

.montara-trust {
display:none;

}



/* CARDS */


.montara-quick-buttons {

display:grid;

grid-template-columns:
1fr 1fr;


gap:8px;

}



.montara-card {

background:linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


border-radius:12px;


padding:10px 12px;


display:flex;

align-items:center;


gap:8px;


cursor:pointer;


box-shadow:none;

border:1px solid #2F3A34;

min-height:58px;

justify-content:center;

flex-direction:column;

text-align:center;


transition:.18s ease;

}



.montara-card:hover {

background:linear-gradient(
135deg,
#27312C,
#425A4C
);

transform:
translateY(-2px);

}



.montara-card:active {

transform:
scale(.96);

}



.montara-card-icon {
width:24px;
height:24px;
color:white;
display:flex;
align-items:center;
justify-content:center;

}

.montara-card-icon svg {
  width:24px;
  height:24px;
  display:block;
  stroke:currentColor;
}



.montara-card-title {

font-size:12px;


font-weight:500;


color:white;

}



.montara-card-subtitle {
display:none;

}

/* MESSAGES */


.montara-message {

display:flex;


margin:10px 0;


animation:
welcomeIn
.25s ease;

}



.montara-message.user {

justify-content:flex-end;

}



.montara-message.bot {

gap:8px;

}



.montara-bot-avatar {

width:28px;

height:28px;

min-width:28px;


border-radius:50%;


overflow:hidden;


background:white;

}



.montara-bubble {

max-width:78%;


padding:11px 14px;


border-radius:12px;


font-size:14px;


line-height:1.45;


white-space:pre-wrap;

}

.montara-bubble-with-images {
  max-width: 94%;
  width: 94%;
}

.montara-message.bot:has(.montara-image-gallery)
.montara-bubble {
  max-width: 94%;
  width: 94%;
}



.user .montara-bubble {

background:linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


color:white;

}



.bot .montara-bubble {

background:#FFFEFB;


color:#222;

border:1px solid #E7E1D9;

}


/* ROOM IMAGE GALLERY */
.montara-image-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 12px;
  width: 100%;
}

.montara-image-link {
  display: block;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #eee;
  text-decoration: none;
}

/*
 * Первая фотография занимает всю ширину.
 */
.montara-image-link:first-child {
  grid-column: 1 / -1;
}

.montara-room-image {
  display: block;
  width: 100%;
  height: 125px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

/*
 * Первая фотография крупнее остальных.
 */
.montara-image-link:first-child
.montara-room-image {
  height: 210px;
}

.montara-room-image:hover {
  transform: scale(1.02);
  opacity: 0.96;
}

@media screen and (max-width: 991.98px) {
  .montara-room-image {
    height: 105px;
  }

  .montara-image-link:first-child
  .montara-room-image {
    height: 180px;
  }
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


gap:0;


padding:10px 20px 6px;


background:#F4EFE7;

position:relative;

}



#montara-reset-button {

width:30px;

height:30px;


border:none;


border-radius:50%;


background:transparent;

color:white;

font-size:20px;


cursor:pointer;

}



#montara-chat-input {

flex:1;


border:1px solid #E0D9D0;


outline:none;


padding:12px 54px 12px 16px;


border-radius:999px;


font-size:13px;

min-height:44px;

background:#FFFEFB;

}



#montara-send-button {

width:38px;

height:38px;


border:none;


border-radius:50%;


background:linear-gradient(
135deg,
#2F3A34,
#4F6B5A
);


color:white;


cursor:pointer;


font-size:18px;

position:absolute;

right:24px;

top:13px;

}

#montara-send-button:disabled,
#montara-chat-input:disabled,
.montara-card[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: .6;
}

#montara-open-button:focus-visible,
#montara-close-button:focus-visible,
#montara-reset-button:focus-visible,
#montara-send-button:focus-visible,
.montara-lang-switch button:focus-visible,
.montara-card:focus-visible,
#montara-chat-input:focus-visible {
  outline: 3px solid #B18A5A;
  outline-offset: 2px;
}



#montara-send-button:active,
#montara-reset-button:active {

transform:
scale(.96);

}



.montara-powered {

background:#F4EFE7;


text-align:center;


font-size:11px;


color:#7A6F66;


padding:0 0 9px;

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
    grid-template-columns: 1fr 1fr;
  }

  .montara-chat-top {
    padding:14px;
  }

  .montara-logo {
    width:48px;
    height:48px;
    min-width:48px;
  }

  .montara-brand h3 {
    font-size:15px;
  }

  .montara-status {
    font-size:10px;
  }

  .montara-lang-switch button {
    padding:7px 8px;
  }

  .montara-header-actions {
    gap:4px;
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

  <button id="montara-open-button" type="button" aria-label="Open AlpenParks Concierge" aria-controls="montara-chat-panel" aria-expanded="false">

    <span class="montara-open-icon">
      💬
    </span>

    <strong data-i18n="openButton">
      AlpenParks Digital Concierge
    </strong>

  </button>





  <!-- CHAT WINDOW -->


  <div id="montara-chat-panel" role="dialog" aria-modal="true" aria-labelledby="montara-chat-title" aria-hidden="true">



    <!-- HEADER -->


    <div class="montara-chat-top">



      <div class="montara-brand">



        <div class="montara-logo">

          <img src="https://res.cloudinary.com/seekda/image/upload/w_375,h_210,c_limit,f_auto,fl_lossy,q_auto/production/S005886/app-icon_310x310.png" alt="AlpenParks">

        </div>




        <div>


          <h3 id="montara-chat-title" data-i18n="headerTitle">
            AlpenParks Concierge
          </h3>



          <p class="montara-status">

            <span class="montara-status-dot"></span>


            <span data-i18n="status">
              Online · AI Concierge
            </span>


          </p>


        </div>



      </div>





      <div class="montara-header-actions">

        <!-- LANGUAGE SWITCH -->
        <div class="montara-lang-switch">

          <button type="button" aria-label="Deutsch"
          class="active"
          data-lang="de">DE</button>

          <button type="button" aria-label="English" data-lang="en">EN</button>

        </div>

        <button id="montara-reset-button" type="button" aria-label="Start a new conversation">↻</button>

        <button id="montara-close-button" type="button" aria-label="Close AlpenParks Concierge">×</button>

      </div>



    </div>








    <!-- BODY -->



    <div 
    class="montara-chat-body"
    id="montara-chat-body">





      <!-- WELCOME -->



      <div class="montara-welcome-row">



        <div class="montara-avatar">


          <img src="https://images.squarespace-cdn.com/content/6a23f2747f909d53b11bcf1f/ef01d550-b6b2-4fc6-82e5-3eb769d23824/ChatGPT+Image+18+%D0%B8%D1%8E%D0%BD.+2026+%D0%B3.%2C+18_37_33.png?content-type=image%2Fpng" alt="AlpenParks Concierge">


        </div>





        <div>



          <div class="montara-welcome-card">



            <strong id="montara-dynamic-greeting">

              Willkommen im AlpenParks Taxacher 👋

            </strong>



            <p data-i18n="welcomeText">
              Ich bin Ihr digitaler Concierge. Schreiben Sie mir einfach in Ihrer bevorzugten Sprache.<br><br>Ich helfe Ihnen gerne bei Fragen zu Zimmern, Verfügbarkeit, Frühstück, Wellness, Parken und Ihrem Aufenthalt.


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
        class="montara-card" role="button" tabindex="0"
        data-key="accommodation"
        data-message="Welche Unterkunftsarten bieten Sie an?">



          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19v-8m18 8v-8M3 16h18M5 11V7h6a3 3 0 0 1 3 3v1m0 0h4a3 3 0 0 1 3 3v2M5 7V5h4a2 2 0 0 1 2 2"/></svg>
          </div>



          <div>


            <div 
            class="montara-card-title"
            data-i18n="cardAccommodationTitle">


              Zimmer & Apartments


            </div>



            <div 
            class="montara-card-subtitle"
            data-i18n="cardAccommodationSub">


              Zimmer & Apartments


            </div>


          </div>



        </div>










        <div
        class="montara-card" role="button" tabindex="0"
        data-key="booking"
        data-message="Ich möchte eine Buchungsanfrage stellen.">



          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="m9 15 2 2 4-4"/></svg>
          </div>



          <div>


            <div
            class="montara-card-title"
            data-i18n="cardBookingTitle">

              Verfügbarkeit prüfen

            </div>



            <div
            class="montara-card-subtitle"
            data-i18n="cardBookingSub">

              Aufenthalt anfragen

            </div>


          </div>



        </div>









        <div
        class="montara-card" role="button" tabindex="0"
        data-key="breakfast"
        data-message="Wie viel kostet das Frühstück?">


          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9Z"/><path d="M17 11h1a3 3 0 0 1 0 6h-2M7 22h10M9 2v3m4-3v3"/></svg>
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
        class="montara-card" role="button" tabindex="0"
        data-key="wellness"
        data-message="Wie sind die Öffnungszeiten des Spa- und Wellnessbereichs?">


          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-4.5 0-8-2.7-8-6.5 3.2-.3 6.2 1 8 3.5 1.8-2.5 4.8-3.8 8-3.5 0 3.8-3.5 6.5-8 6.5Z"/><path d="M12 18c-2.7-2.3-3.8-5.6 0-10 3.8 4.4 2.7 7.7 0 10Z"/><path d="M8.4 15.2C6 13.8 5.1 11.5 6 8.5c2.2.6 4 1.9 5 3.8m4.6 2.9c2.4-1.4 3.3-3.7 2.4-6.7-2.2.6-4 1.9-5 3.8M12 8V3"/></svg>
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
        class="montara-card" role="button" tabindex="0"
        data-key="parking"
        data-message="Sind Parkplätze vorhanden?">


          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m5 11 2-5h10l2 5M4 11h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z"/><path d="M5 18v2m14-2v2M6 14h.01M18 14h.01"/></svg>
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
        class="montara-card" role="button" tabindex="0"
        data-key="reception"
        data-message="Wie kann ich die Rezeption kontaktieren?">


          <div class="montara-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM9.7 21h4.6"/><path d="M12 3V1"/></svg>
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



      <input
      id="montara-chat-input"
      aria-label="Chat message"
      autocomplete="off"
      placeholder="Nachricht schreiben...">





      <button id="montara-send-button" type="button" aria-label="Send message">

        ➤

      </button>




    </div>








    <!-- POWERED -->



    <div class="montara-powered">

      Powered by AlpenParks Intelligence

    </div>





  </div>




</div>

`;

document.body.appendChild(wrapper);



/* JS */
const MONTARA_WEBHOOK_URL =
"https://alpenparkstaxacher.app.n8n.cloud/webhook/hotel-chat";

const MONTARA_REQUEST_TIMEOUT_MS = 40000;


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

let requestInFlight = false;
let activeRequestController = null;



let currentLang =
  localStorage.getItem(
    "montara_widget_language"
  ) === "en"
    ? "en"
    : "de";


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
"Online · AI Concierge",


welcomeText:
"Ich bin Ihr digitaler Concierge. Schreiben Sie mir einfach in Ihrer bevorzugten Sprache.<br><br>Ich helfe Ihnen gerne bei Fragen zu Zimmern, Verfügbarkeit, Frühstück, Wellness, Parken und Ihrem Aufenthalt.",


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
"Zimmer & Apartments",

cardAccommodationSub:
"Zimmer & Apartments",


cardBookingTitle:
"Verfügbarkeit prüfen",

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
"Online · AI Concierge",


welcomeText:
"I’m your digital concierge. Feel free to message me in your preferred language.<br><br>I can help with rooms, availability, breakfast, wellness, parking and anything related to your stay.",


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
"Rooms & Apartments",

cardAccommodationSub:
"Rooms & apartments",


cardBookingTitle:
"Check availability",

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
  localStorage.setItem(
  "montara_widget_language",
  currentLang
);


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

greeting.textContent =
currentLang === "de"
? "Willkommen im AlpenParks Taxacher 👋"
: "Welcome to AlpenParks Taxacher 👋";

}





function addMessage(
  type,
  text,
  images = []
) {
  const msg =
    document.createElement("div");

  msg.className =
    `montara-message ${type}`;

  if (type === "bot") {
    const avatar =
      document.createElement("div");

    avatar.className =
      "montara-bot-avatar";

    avatar.innerHTML =
      `<img src="${MONTARA_AVATAR_URL}" alt="AlpenParks Concierge">`;

    msg.appendChild(avatar);
  }

  const bubble =
    document.createElement("div");

  bubble.className =
    "montara-bubble";

  /*
   * Текст ответа.
   *
   * Не используем innerHTML с ответом AI,
   * чтобы текст от модели не мог вставить
   * произвольный HTML.
   */
  const textElement =
    document.createElement("div");

  textElement.className =
    "montara-message-text";

  textElement.textContent =
    String(text || "");

  bubble.appendChild(textElement);

  /*
   * Фотографии номера или апартамента.
   */
  if (
    type === "bot" &&
    Array.isArray(images) &&
    images.length > 0
  ) { 
    bubble.classList.add(
  "montara-bubble-with-images"
);
    const gallery =
      document.createElement("div");

    gallery.className =
      "montara-image-gallery";

    images.forEach((image, index) => {
      /*
       * Workflow возвращает объекты:
       *
       * {
       *   url: "...",
       *   alt: "..."
       * }
       *
       * На всякий случай также поддерживаем
       * простой массив URL-строк.
       */
      const imageUrl =
        typeof image === "string"
          ? image
          : image?.url;

      const imageAlt =
        typeof image === "object"
          ? image?.alt
          : "";

      if (
        !imageUrl ||
        typeof imageUrl !== "string"
      ) {
        return;
      }

      const link =
        document.createElement("a");

      link.className =
        "montara-image-link";

      link.href =
        imageUrl;

      link.target =
        "_blank";

      link.rel =
        "noopener noreferrer";

      link.setAttribute(
        "aria-label",
        imageAlt ||
        `Hotel accommodation image ${index + 1}`
      );

      const img =
        document.createElement("img");

      img.className =
        "montara-room-image";

      img.src =
        imageUrl;

      img.alt =
        imageAlt ||
        "Hotel room or apartment";

      img.loading =
        index === 0
          ? "eager"
          : "lazy";

      img.decoding =
        "async";

      /*
       * Если одна ссылка не загрузилась,
       * скрываем только сломанную фотографию,
       * а не всё сообщение.
       */
      img.addEventListener(
        "error",
        () => {
          console.warn(
            "Could not load room image:",
            imageUrl
          );

          link.remove();

          if (
            gallery.children.length === 0
          ) {
            gallery.remove();
          }
        }
      );

      link.appendChild(img);
      gallery.appendChild(link);
    });

    if (
      gallery.children.length > 0
    ) {
      bubble.appendChild(gallery);
    }
  }

  const time =
    document.createElement("span");

  time.className =
    "montara-time";

  time.textContent =
    new Date().toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit"
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
<img src="${MONTARA_AVATAR_URL}" alt="">
</div>

<div class="montara-typing" role="status" aria-label="Concierge is typing">
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

function setRequestState(isLoading) {
  requestInFlight = isLoading;
  input.disabled = isLoading;
  sendButton.disabled = isLoading;
  sendButton.setAttribute("aria-busy", String(isLoading));

  document
    .querySelectorAll(".montara-card")
    .forEach(card => {
      card.setAttribute("aria-disabled", String(isLoading));
      card.tabIndex = isLoading ? -1 : 0;
    });
}





async function sendMessage(
  textOverride = "",
  messageSource = "typed"
) {
  if (requestInFlight) {
    return;
  }

  const typedText =
    input.value.trim();

  const text =
    String(textOverride || typedText).trim();

  if (!text) {
    return;
  }

  addMessage(
    "user",
    text
  );

  const quickButtons =
    document.querySelector(
      ".montara-quick-buttons"
    );

  if (quickButtons) {
    quickButtons.style.display = "none";
  }

  input.value = "";

  addTyping();

  setRequestState(true);
  const controller = new AbortController();
  activeRequestController = controller;
  const timeoutId = setTimeout(
    () => controller.abort(),
    MONTARA_REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(
      MONTARA_WEBHOOK_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        signal: controller.signal,

        body: JSON.stringify({
          action: "sendMessage",

          sessionId,

          chatInput: text,

          // typed или quick_action.
          messageSource,

          hotelKey:
            "alpenparks_taxacher"
        })
      }
    );

    if (!response.ok) {
      throw new Error(
        `Webhook returned HTTP ${response.status}`
      );
    }

    const data =
      await response.json();

let responseData =
  data && typeof data === "object"
    ? data
    : {};

let reply =
  responseData.output ||
  responseData.text ||
  responseData.reply ||
  responseData.message ||
  translations[currentLang].fallback;

let images =
  Array.isArray(responseData.images)
    ? responseData.images
    : [];

/*
 * Иногда backend может вернуть весь JSON
 * внутри строкового поля output.
 */
if (typeof reply === "string") {
  const trimmed =
    reply.trim();

  if (
    trimmed.startsWith("{") &&
    trimmed.endsWith("}")
  ) {
    try {
      const parsed =
        JSON.parse(trimmed);

      reply =
        parsed.reply ||
        parsed.output ||
        parsed.text ||
        parsed.message ||
        reply;

      if (
        images.length === 0 &&
        Array.isArray(parsed.images)
      ) {
        images =
          parsed.images;
      }
    } catch (error) {}
  }
}

/*
 * На случай если output сам оказался объектом.
 */
if (
  reply &&
  typeof reply === "object"
) {
  const nested =
    reply;

  reply =
    nested.reply ||
    nested.output ||
    nested.text ||
    nested.message ||
    translations[currentLang].fallback;

  if (
    images.length === 0 &&
    Array.isArray(nested.images)
  ) {
    images =
      nested.images;
  }
}
addMessage(
  "bot",
  String(reply || ""),
  images
);


  } catch (error) {
    if (controller.signal.reason !== "reset") {
      addMessage(
        "bot",
        translations[currentLang].error
      );
    }
  } finally {
    clearTimeout(timeoutId);
    removeTyping();
    activeRequestController = null;
    setRequestState(false);
    input.focus();
  }
}






openButton.onclick = ()=>{


nudge.classList.remove("show");


panel.classList.add("is-open");

panel.setAttribute("aria-hidden", "false");
openButton.setAttribute("aria-expanded", "true");


openButton.classList.add("is-hidden");

input.focus();


};




closeButton.onclick = ()=>{


panel.classList.remove("is-open");

panel.setAttribute("aria-hidden", "true");
openButton.setAttribute("aria-expanded", "false");


openButton.classList.remove("is-hidden");

openButton.focus();


};





sendButton.onclick = () => {
  sendMessage(
    "",
    "typed"
  );
};



input.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      sendMessage(
        "",
        "typed"
      );
    }

  }
);





document
  .querySelectorAll(".montara-card")
  .forEach(card => {

    card.onclick = () => {
      if (requestInFlight) return;
      const key =
        card.dataset.key;

      const quickMessage =
        translations[currentLang]
          ?.cardMessages
          ?.[key] ||
        card.dataset.message ||
        "";

      sendMessage(
        quickMessage,
        "quick_action"
      );
    };

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });

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

if (activeRequestController) {
  activeRequestController.abort("reset");
}


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

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    panel.classList.contains("is-open")
  ) {
    closeButton.click();
  }
});





setTimeout(()=>{


if(
!panel.classList.contains("is-open")
){

nudge.classList.add("show");

}


},5000);





applyLanguage(currentLang);
  

})();
