// let footerFirstPartDiv = document.querySelector("#footerFirstPart");
// let newDivFooter = document.createElement("div");
// let footerPlus = document.querySelector("#footerPlus");

// footerFirstPartDiv.addEventListener("click", (event) => {
//   newDivFooter.setAttribute("id", "footerDropDown");

//   let newDivFooterArr = document.querySelectorAll("#footerDropDown");
//   console.log(newDivFooter.style.display);

//   // if (newDivFooterArr.length === 1) {
//   //   newDivFooter.style.display === "none"
//   //     ? (newDivFooter.style.display = "flex")
//   //     : (newDivFooter.style.display = "none");
//   //   return false;
//   // }

//   if (newDivFooterArr.length === 1) {
//     if (newDivFooter.style.display === "none") {
//       newDivFooter.style.display = "flex";
//       footerPlus.innerText = "-";
//     } else {
//       newDivFooter.style.display = "none";
//       footerPlus.innerText = "+";
//     }
//     return false;
//   }
//   footerPlus.innerText = "-";

//   let newSubDivfirst = document.createElement("div");
//   let img1 = document.createElement("img");
//   img1.src = "./img/percentage.png";

//   let p1 = document.createElement("p");
//   p1.innerText = "Amazing offers";

//   let p2 = document.createElement("p");
//   p2.innerText = "Find best offers for smart gadgets at one place.";

//   newSubDivfirst.append(img1, p1, p2);

//   let newSubDivSecond = document.createElement("div");
//   let img2 = document.createElement("img");
//   img2.src = "./img/wallet.png";

//   let p3 = document.createElement("p");
//   p3.innerText = "Easy & secure payments";

//   let p4 = document.createElement("p");
//   p4.innerText =
//     "Pay directly via PayPal or Klarna among other payment options.";

//   newSubDivSecond.append(img2, p3, p4);

//   let newSubDivThird = document.createElement("div");
//   let img3 = document.createElement("img");
//   img3.src = "./img/truck.png";

//   let p5 = document.createElement("p");
//   p5.innerText = "Local stock & fast shipping";

//   let p6 = document.createElement("p");
//   p6.innerText = "Buy from local stock and ship within 48-hour.";

//   newSubDivThird.append(img3, p5, p6);

//   let newSubDivFourth = document.createElement("div");
//   let img4 = document.createElement("img");
//   img4.src = "./img/customer-support.png";

//   let p7 = document.createElement("p");
//   p7.innerText = "Customer support";

//   let p8 = document.createElement("p");
//   p8.innerText = "24-hour customer support for all your queries.";

//   newSubDivFourth.append(img4, p7, p8);

//   newDivFooter.append(
//     newSubDivfirst,
//     newSubDivSecond,
//     newSubDivThird,
//     newSubDivFourth
//   );

//   footerFirstPartDiv.after(newDivFooter);
// });

let footerFunction = () => {
  return `
  <div id="footerFirstPart">
        <p>Why buy from geekbuying? <span id="footerPlus">+</span></p>
      </div>
      <div id="footerSecondPart">
        <input placeholder="Enter eamil to get a 5% off coupon" type="text" />
        <div><p>Subscribe</p></div>
      </div>
      <div id="footerThirdPart">
        <div id="footerHelp">
          <p class="footerThirdPartHeading">Help</p>
          <p>Order status</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Warranty</p>
          <p>FAQs</p>
          <p>Sitemap</p>
          <p></p>
        </div>
        <div id="footerSupport">
          <p class="footerThirdPartHeading">Support</p>
          <p>Payment information</p>
          <p>Shipping guide</p>
          <p>Wholesale</p>
          <p>Drop shipping</p>
          <p>Blog</p>
          <p>Affilates</p>
        </div>
        <div id="footerPolicise">
          <p class="footerThirdPartHeading">Policies</p>
          <p>Terms & condition</p>
          <p>Return policy</p>
          <p>Privacy</p>
          <p>Declartion</p>
          <p>Custom</p>
        </div>
        <div id="footerDownloadTheApp">
          <p class="footerThirdPartHeading">Download The App</p>
          <div id="footerDownloadTheAppImg">
            <div id="footerDownloadTheAppImgSubOne">
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
                alt=""
              />
            </div>
            <div id="footerDownloadTheAppImgSubTwo">
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                alt=""
              />
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                alt=""
              />
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="footerConnectWithUs">
            <p class="footerThirdPartHeading">Connect with us</p>
            <div id="connectWithUsLogos">
              <img src="./img/facebook.png" alt="" />
              <img src="./img/youtube.png" alt="" />
              <img src="./img/telegram-plane.png" alt="" />
              <img src="./img/instagram.png" alt="" />
              <img src="./img/twitter.png" alt="" />
              <img src="./img/tiktok.png" alt="" />
            </div>
          </div>
        </div>
        <div id="footerService_payment">
          <div id="footerService_paymentSubDivFirst">
            <img src="./img/mail.png" alt="" />
            <p>Service_payment@geekbuying.com</p>
          </div>
          <div id="footerService_paymentSubDivSecond">
            <img src="./img/ticket.png" alt="" />
            <p>Ticket</p>
          </div>
          <div id="footerService_paymentSubDivThird">
            <img src="./img/live-chat.png" alt="" />
            <p>Live Chat</p>
          </div>
        </div>
      </div>
      <div id="footerFourthPart">
        <p class="footerThirdPartHeading" id="footerPopularSearches">
          Popular Searches
        </p>
        <div id="footerPopularSearchesAllDivs">
          <div><p>Greekbuying Coupon</p></div>
          <div><p>Roborock Q7 Max</p></div>
          <div><p>Tronsmart Blutooth Speakers</p></div>
          <div><p>Window Mini pC</p></div>
          <div><p>ENGWE X26</p></div>
          <div><p>android tv boxes</p></div>
          <div><p>KugooKirin G2 Pro</p></div>
          <div><p>Mi Band 7 Pro</p></div>
          <div><p>LDS Robot Vacuum</p></div>
          <div><p>Electric Bike</p></div>
        </div>
      </div>
      <div id="footerFithPart">
        <p>English</p>
        <span>|</span>
        <p>Español</p>
        <span>|</span>
        <p>Français</p>
        <span>|</span>
        <p>Deutsch</p>
        <span>|</span>
        <p>Italiano</p>
        <span>|</span>
        <p>Português</p>
        <span>|</span>
        <p>Nederlands</p>
        <span>|</span>
        <p>Polski</p>
        <span>|</span>
        <p>Русский</p>
        <span>|</span>
        <p>Türkçe</p>
        <span>|</span>
        <p>ελληνικά</p>
        <span>|</span>
        <p>Magyar</p>
        <span>|</span>
        <p>עברית</p>
        <span>|</span>
        <p>لعربية</p>
        <span>|</span>
        <p>ไทย</p>
        <span>|</span>
        <p>日本語</p>
        <span>|</span>
      </div>
      <div id="footerSixthPart">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrel7KzfXsjjJxy867Rj2Swspd7IK3KriWVQ&usqp=CAU"
          alt=""
        />
        <img src="./img/masterCard.png" alt="" />
        <img src="./img/americanExpress.png" alt="" />
        <img src="./img/kalarnaLogo.png" alt="" />
        <img src="./img/prezelewyLogo.png" alt="" />
        <img src="./img/pixLogo.png" alt="" />
        <img src="./img/oxxoLogo.png" alt="" />
        <img src="./img/sofortLogo.png" alt="" />
        <img src="./img/giroPayLogo.png" alt="" />
        <img src="./img/konbiniLogo.png" alt="" />
        <img src="./img/reseller.png" alt="" />
        <img src="./img/trustpilot.png" alt="" />
      </div>
      <div id="footerSeventhPart">
        <p>Copyright © 2012-2022 GeekBuying.com. All rights reserved.</p>
      </div>
  `;
};

export default footerFunction;
