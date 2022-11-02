import navbarFunction from "./navbar.js";

import footer from "./footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("navbar").innerHTML = navbarFunction();

let itemadded = JSON.parse(localStorage.getItem("item")) || [];
console.log(itemadded);

let cart = JSON.parse(localStorage.getItem("cart-item")) || [];

function display(itemadded) {
  let product = document.getElementById("items");
  itemadded.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "box");

    let innerdiv1 = document.createElement("div");
    innerdiv1.setAttribute("class", "innerbox1");

    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "image");

    innerdiv1.append(image);

    let innerdiv2 = document.createElement("div");
    innerdiv2.setAttribute("class", "innerbox2");

    let heading = document.createElement("h1");
    heading.innerText = el.detail;

    // star div

    let stardiv = document.createElement("div");
    stardiv.setAttribute("class", "stardiv");

    let starinnerdiv = document.createElement("div");

    let logo = document.createElement("img");
    logo.src =
      "https://content1.geekbuying.com/V1.4/en/images/indexV7/star2.png";
    let reviews = document.createElement("p");
    reviews.innerText = "10 Reviews";
    starinnerdiv.append(logo, reviews);
    let brand = document.createElement("p");
    brand.innerText = "Brand :";

    let answers = document.createElement("p");
    answers.innerText = "0 Answered Questions";

    let itemcode = document.createElement("p");
    itemcode.innerText = "Item Code: 501280";

    stardiv.append(starinnerdiv, brand, answers, itemcode);

    // price

    let pricediv = document.createElement("div");
    pricediv.setAttribute("class", "pricediv");

    let price = document.createElement("h1");
    price.innerText = `₹${el.original}`;
    price.setAttribute("class", "price");

    let cutprice = document.createElement("h1");
    cutprice.innerText = `₹${el.before}`;
    cutprice.setAttribute("class", "cutprice");

    // discount
    let discountdiv = document.createElement("div");
    discountdiv.setAttribute("class", "discountdiv");

    let discount = document.createElement("h2");
    discount.innerText = el.offer;

    discountdiv.append(discount);
    pricediv.append(price, cutprice, discountdiv);

    // price next line

    let pricediv2 = document.createElement("div");
    pricediv2.setAttribute("class", "pricediv2");

    let priceinnerdiv2 = document.createElement("div");
    priceinnerdiv2.setAttribute("class", "priceinnerdiv2");

    let mobilelogo = document.createElement("img");
    mobilelogo.setAttribute("class", "mobilelogo");
    mobilelogo.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAeFBMVEUAAAD////ExMS3t7daWloMDAyrq6vs7Oyfn5+kpKTV1dWDg4OcnJynp6ePj4/BwcHj4+P39/fKysrc3NxxcXHY2NixsbEsLCzPz88bGxtSUlJcXFxMTExDQ0P5+flpaWkkJCQTExM6OjqTk5N5eXmJiYk+Pj4wMDBOMYl8AAAEAklEQVR4nO3Za1fiShCF4c3NcE1IuCh3EBj//z88mbU8R89YnaFp0plxvfuTVrR5wHSlEtX6m6OmAUH55vqkWPbHjWSSzcL0+8GzGs28+g1U6vs/f//pZdhMXrK0/Oy6yX36/FVaVr71+jPbSB33Ybd+Ko1q8PimkFLnQac+qXzTEZM/6+w65tSvlNWj8c+zk+LSH9SvC+OdXMrtIw59obXnKyQ+8Vu71dbGPuDQv8rzFa5ebXzqt3hro6GHvvBuN2mt+qnjw7f1G9+PvjXLfOI4jd1Z2yBTv9fWd/mak+nJKpv6QpN6Md7Zq2uVTX2qRb0Y/+xMqFnc/HlT/8jc6aZzdaqXckcGZs+0/yC7mi3+yVQYVVtvbpFG0zZnxu+tX/QHDeajcd+nn3hNAA9PoP6pUXwPPXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR48ePXr06NGjR/+N9ZNG9R+6+/SLcb/BDAL1f0rQ+yTvXHar3tuhP33AYpH1yeVj6+2K4OXi6n+2qkt7mu+T4XklHULXi6qfS+n+v+86PR2TwBUj6kv84vP3+65WediS8fR99X79qA/aBi0ZTz+VZl+KrxoYP3p7oukPOn8tzqT91+rtiaVPPs1WnzLXU8Ci0fQDXa3yULuARaPpu3ox6yuFtJ1Y+meHsmvs5dsTSZ/3Tvb2nCtkYIil18o+cFF2/6rRzhzX+X1w7IfbEkv/Q/ZM46rfllj6kZZWOdExYNFo+kJrqzzRJWDReJPCUUOzujCqNyeafqnXr8Vz4Nzqow8bZ3ca/VoqpLDb20xto2rqT0EbrNygSv9fKfHmVr49E/N0NPVds3p7ynG4+7npj6Vx2IplJ7P+dqbzGjSSlJmWd+Lpe3vfL4/Bn3yrtbVPcauYhb/aSNLxck1H2/KLbfgjHXsrmvr8EQ90zqf3xznzkAnhPW31rbJ9hq+Drur/JnnJOkXgOfieg92ybH1m3Zo2mMTRwx3dxftGqDPxyMDqflVx3Rs49Jnvw7sfXv9U8OyfzntiV2dfm1dmd3Z16nuuC7VLn8u8uDkzSD1y9btH3GriOOK8qpbXywd0ukdk7Z6t3TPBUHaPjZzpUXPnwYqJZnrS2wP+bxCUfFS5SSrnsfJXV2l7ljST6fCpK71VXe6qp8nk6tVKHp919VOU387Ci2U6aibXcfG7x86Bk3zDQd9c/m79P1Jao1gj8URIAAAAAElFTkSuQmCC";

    priceinnerdiv2.append(mobilelogo);
    let price1 = document.createElement("h1");
    price1.innerText = `₹${el.original}`;

    let comment = document.createElement("p");
    comment.innerText = "Exclusive app price!";
    comment.setAttribute("class", "comment");

    pricediv2.append(priceinnerdiv2, price1, comment);

    // offers
    let offerdiv = document.createElement("div");
    offerdiv.setAttribute("class", "offerdiv");

    let offerinnerdiv1 = document.createElement("h2");
    offerinnerdiv1.innerText = "2% OFF New User";
    offerinnerdiv1.setAttribute("class", "offerinnerdiv1");

    let offerinnerdiv2 = document.createElement("h2");
    offerinnerdiv2.innerText = "Get Coupons";
    offerinnerdiv2.setAttribute("class", "offerinnerdiv2");

    offerdiv.append(offerinnerdiv1, offerinnerdiv2);

    let hr = document.createElement("hr");
    hr.setAttribute("class", "hr");

    // ship
    let bigdiv = document.createElement("div");
    bigdiv.setAttribute("class", "bigdiv");

    let shipdiv = document.createElement("div");
    shipdiv.setAttribute("class", "shipdiv");

    let shipdiv1 = document.createElement("div");
    shipdiv1.setAttribute("class", "shipdiv1");
    shipdiv1.innerText = "Ship from:";

    let shipdiv2 = document.createElement("button");
    shipdiv2.setAttribute("class", "shipdiv2");
    shipdiv2.innerText = "India";

    shipdiv.append(shipdiv1, shipdiv2);

    let optiondiv = document.createElement("div");
    optiondiv.setAttribute("class", "optiondiv");

    let optiondiv1 = document.createElement("div");
    optiondiv1.setAttribute("class", "optiondiv1");
    optiondiv1.innerText = "Option:";

    let optiondiv2 = document.createElement("button");
    optiondiv2.setAttribute("class", "optiondiv2");
    optiondiv2.innerText = "XS version";
    optiondiv.append(optiondiv1, optiondiv2);

    // QUANTITY

    let quantity = document.createElement("div");
    quantity.setAttribute("class", "quantity");

    let quantitydiv = document.createElement("div");
    quantitydiv.setAttribute("class", "quantitydiv");
    quantitydiv.innerText = "QTY:";

    let boxquantity = document.createElement("div");
    boxquantity.setAttribute("class", "boxquantity");

    let quantityincrease = document.createElement("button");
    quantityincrease.setAttribute("class", "quantityincrease");
    quantityincrease.innerText = "+";

    let emptydiv = document.createElement("div");
    emptydiv.setAttribute("class", "emptydiv");
    emptydiv.innerText = "1";

    let quantitydecrease = document.createElement("button");
    quantitydecrease.setAttribute("class", "quantitydecrease");
    quantitydecrease.innerText = "-";

    boxquantity.append(quantityincrease, emptydiv, quantitydecrease);

    quantity.append(quantitydiv, boxquantity);

    bigdiv.append(shipdiv, optiondiv, quantity);

    // shiping country

    let shipcountry = document.createElement("div");
    shipcountry.setAttribute("class", "shipcountry");
    shipcountry.innerText = "Shipping:";

    const div5 = document.createElement("div");
    div5.setAttribute("class", "div5");

    let statement = document.createElement("h3");
    statement.innerText = "Free shipping to";
    statement.setAttribute("class", "statement");

    let country = document.createElement("select");
    var opt1 = document.createElement("option");
    opt1.value = "1";
    opt1.text = "India";
    country.add(opt1, null);
    country.setAttribute("class", "country");
    div5.append(statement, country);

    shipcountry.append(div5);

    // button add to cart buynow
    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    let addtocart = document.createElement("button");
    addtocart.setAttribute("class", "addtocart");
    addtocart.innerText = "Add to Cart";

    addtocart.addEventListener("click", function () {
      cart.push(el);
      localStorage.setItem("cart-item", JSON.stringify(cart));
      window.location.href = "./cart.html";
    });

    let buynow = document.createElement("button");
    buynow.setAttribute("class", "buynow");
    buynow.innerText = "Buy Now";
    buynow.addEventListener("click", function () {
      cart.push(el);
      localStorage.setItem("cart-item", JSON.stringify(cart));
      window.location.href = "./cart.html";
    });

    let wishlist = document.createElement("div");
    wishlist.setAttribute("class", "wishlist");

    let heartimage = document.createElement("img");
    heartimage.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-A-q0MOYWySSiL_ZNIazNB3_a-sHDFHIy9A&usqp=CAU";
    heartimage.setAttribute("class", "heartimage");

    let wishnumber = document.createElement("p");
    wishnumber.setAttribute("class", "wishnumber");
    wishnumber.innerText = "25";

    wishlist.append(heartimage, wishnumber);

    buttons.append(addtocart, buynow, wishlist);

    // ?paypal

    let payment = document.createElement("div");
    payment.setAttribute("class", "payment");

    let word = document.createElement("p");
    word.innerText = "Payment:";
    word.setAttribute("class", "word");

    let paypal = document.createElement("img");
    paypal.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYmD9uTxYgH58yHpue5CltnR3gMojxD8Gsw&usqp=CAU";
    paypal.setAttribute("class", "paypal");

    payment.append(word, paypal);

    innerdiv2.append(
      heading,
      stardiv,
      pricediv,
      pricediv2,
      offerdiv,
      hr,
      bigdiv,
      shipcountry,
      buttons,
      payment
    );

    let sharediv = document.createElement("div");
    sharediv.setAttribute("class", "sharediv");

    let sharetext = document.createElement("h3");
    sharetext.innerText = "Share to";
    sharetext.setAttribute("class", "sharetext");
    let sociadiv = document.createElement("div");
    sociadiv.setAttribute("class", "sociadiv");

    let fb = document.createElement("img");
    fb.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZ1ZJA0hnLg8W5zrEO2sSzJN8ir-qd9WeVw&usqp=CAU";

    let gog = document.createElement("img");
    gog.src =
      "https://content1.geekbuying.com/V1.4/en/images/footImg/google_mod.png?v=20197";
    sociadiv.append(fb, gog);
    sharediv.append(sharetext, sociadiv);

    div.append(innerdiv1, innerdiv2);

    product.append(div, sharediv);
  });
}

display(itemadded);

/////////////////////////navbar js

const navbarAllCategories = document.querySelector("#navbarAllCategories");
const navbarMidlePart = document.querySelector("#navbarMidlePart");
let newDiv = document.createElement("div");
let arrOfFlex = [];

navbarAllCategories.addEventListener("click", (event) => {
  newDiv.setAttribute("id", "allCategoriesDropDown");
  newDiv.style.background = "white";
  newDiv.style.position = "absolute";
  newDiv.style.top = "110px";
  newDiv.style.left = "342px";
  newDiv.innerHTML = "";

  let firstSubDiv = document.createElement("div");
  let secondSubDiv = document.createElement("div");

  let p1 = document.createElement("p");
  p1.innerText = "All Categories";
  p1.style.cursor = "pointer";
  p1.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p2 = document.createElement("p");
  p2.innerText = "Smart Home & Garden";
  p2.style.cursor = "pointer";
  p2.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p3 = document.createElement("p");
  p3.innerText = "Phones & Accessories";
  p3.style.cursor = "pointer";
  p3.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p4 = document.createElement("p");
  p4.innerText = "Computers, Tables & Accessories";
  p4.style.cursor = "pointer";
  p4.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p5 = document.createElement("p");
  p5.innerText = "Wearable Devices";
  p5.style.cursor = "pointer";
  p5.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p6 = document.createElement("p");
  p6.innerText = "Automobiles & Motorcycles";
  p6.style.cursor = "pointer";
  p6.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  //////////////////////////////////////////////////

  let p7 = document.createElement("p");
  p7.innerText = "Sports & Outdoors";
  p7.style.cursor = "pointer";
  p7.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p8 = document.createElement("p");
  p8.innerText = "Consumer Electronics";
  p8.style.cursor = "pointer";
  p8.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p9 = document.createElement("p");
  p9.innerText = "TV Boxes & mini PCs";
  p9.style.cursor = "pointer";
  p9.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p10 = document.createElement("p");
  p10.innerText = "Toys & Hobbies";
  p10.style.cursor = "pointer";
  p10.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p11 = document.createElement("p");
  p11.innerText = "Security System";
  p11.style.cursor = "pointer";
  p11.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p12 = document.createElement("p");
  p12.innerText = "Fashion";
  p12.style.cursor = "pointer";
  p12.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  firstSubDiv.append(p1, p2, p3, p4, p5, p6);
  secondSubDiv.append(p7, p8, p9, p10, p11, p12);
  newDiv.append(firstSubDiv, secondSubDiv);
  navbarMidlePart.appendChild(newDiv);

  ////////style////////////////
  newDiv.style.display = "flex";
  firstSubDiv.style.marginLeft = "20px";

  secondSubDiv.style.marginLeft = "50px";
  secondSubDiv.style.marginRight = "100px";
  newDiv.style.newDiv;
  newDiv.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";

  arrOfFlex.push(newDiv.style.display);

  //   if (arrOfFlex.length === 2) {
  //     newDiv.style.display = "none";
  //   }
  arrOfFlex.forEach((flexs, index) => {
    if (index % 2 === 0) {
      newDiv.style.display = "flex";
    } else {
      newDiv.style.display = "none";
    }
  });
});

///// Categories part
let navbarCategories = document.querySelector("#navbarCategories");
let newDivSecond = document.createElement("div");
let arrOfFlexTwo = [];

navbarCategories.addEventListener("click", (event) => {
  let subdiv = document.createElement("div");
  newDivSecond.innerHTML = "";
  newDivSecond.style.position = "absolute";
  newDivSecond.style.top = "153px";
  newDivSecond.style.left = "154px";
  newDivSecond.style.backgroundColor = "white";
  newDivSecond.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";

  let p1 = document.createElement("p");
  p1.innerText = "Local Warehouses";
  p1.style.cursor = "pointer";
  p1.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p2 = document.createElement("p");
  p2.innerText = "Sports & Outdoors";
  p2.style.cursor = "pointer";
  p2.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p3 = document.createElement("p");
  p3.innerText = "Smart Homes & Garden";
  p3.style.cursor = "pointer";
  p3.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p4 = document.createElement("p");
  p4.innerText = "Consumer Electronics";
  p4.style.cursor = "pointer";
  p4.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p5 = document.createElement("p");
  p5.innerText = "TV Boxes & Mini PCs";
  p5.style.cursor = "pointer";
  p5.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p6 = document.createElement("p");
  p6.innerText = "Computers, Tablets & Accessories";
  p6.style.cursor = "pointer";
  p6.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p7 = document.createElement("p");
  p7.innerText = "Toys & Hobbles";
  p7.style.cursor = "pointer";
  p7.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p8 = document.createElement("p");
  p8.innerText = "Phones & Accessories";
  p8.style.cursor = "pointer";
  p8.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p9 = document.createElement("p");
  p9.innerText = "Automobiles & Motorcycles";
  p9.style.cursor = "pointer";
  p9.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p10 = document.createElement("p");
  p10.innerText = "Wearable Devices";
  p10.style.cursor = "pointer";
  p10.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p11 = document.createElement("p");
  p11.innerText = "Security Systems";
  p11.style.cursor = "pointer";
  p11.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  let p12 = document.createElement("p");
  p12.innerText = "Fashion";
  p12.style.cursor = "pointer";
  p12.addEventListener("click", (event) => {
    window.location.href = "./new.html";
  });

  subdiv.append(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
  newDivSecond.append(subdiv);
  navbarCategories.appendChild(newDivSecond);
  subdiv.style.marginLeft = "15px";
  subdiv.style.marginRight = "15px";

  arrOfFlexTwo.push(newDivSecond.style.display);

  arrOfFlexTwo.forEach((flexs, index) => {
    if (index % 2 === 0) {
      newDivSecond.style.display = "flex";
    } else {
      newDivSecond.style.display = "none";
    }
  });
});
////////////////////////////////////////////////////////navbar all links

let navbarCart = document.querySelector("#navbarCart");
navbarCart.addEventListener("click", (event) => {
  window.location.href = "./cart.html";
});

let navbarSignIn = document.querySelector("#navbarSignIn");
navbarSignIn.addEventListener("click", (event) => {
  window.location.href = "./signup.html";
});

let mainLogo = document.querySelector("#mainLogo");
mainLogo.style.cursor = "pointer";
mainLogo.addEventListener("click", (event) => {
  window.location.href = "./index.html";
});

let arivalPageLink = document.querySelector("#arivalPageLink");
arivalPageLink.style.cursor = "pointer";
arivalPageLink.addEventListener("click", (event) => {
  window.location.href = "./new.html";
});

let bestSellingPageLink = document.querySelector("#bestSellingPageLink");
bestSellingPageLink.style.cursor = "pointer";
bestSellingPageLink.addEventListener("click", (event) => {
  window.location.href = "./bestSell.html";
});

let barndPageLink = document.querySelector("#barndPageLink");
barndPageLink.style.cursor = "pointer";
barndPageLink.addEventListener("click", (event) => {
  window.location.href = "./brand.html";
});
