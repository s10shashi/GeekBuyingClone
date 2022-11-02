import navbarFun from "./navbar.js";
import footerFun from "./footer.js";

/*Default Page logos */
let img1 = document.createElement("img");
img1.src = "https://img.gkbcdn.com/s3/b/eleglide.jpg";

let img2 = document.createElement("img");
img2.src = "https://img.gkbcdn.com/s3/b/Logo/roborock.jpg";

let img3 = document.createElement("img");
img3.src = "https://img.gkbcdn.com/s3/b/Logo/Viomi.jpg";

let img4 = document.createElement("img");
img4.src = "https://img.gkbcdn.com/s3/b/2006/fiido.jpg";

let img5 = document.createElement("img");
img5.src = "https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg";

let img6 = document.createElement("img");
img6.src = "https://img.gkbcdn.com/s3/b/Logo/one-netbook.jpg";

let img7 = document.createElement("img");
img7.src = "https://img.gkbcdn.com/s3/b/ado.jpg";

let img8 = document.createElement("img");
img8.src = "https://img.gkbcdn.com/s3/b/Logo/himo.jpg";
img8.setAttribute("id", "mouse");

let img9 = document.createElement("img");
img9.src = "https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg";

let img10 = document.createElement("img");
img10.src = "https://img.gkbcdn.com/s3/b/artillery.jpg";

let img11 = document.createElement("img");
img11.src = "https://img.gkbcdn.com/s3/b/proscenic-6HykTHuh.jpg";

let img12 = document.createElement("img");
img12.src = "https://img.gkbcdn.com/s3/b/bezior.jpg";

let img13 = document.createElement("img");
img13.src = "https://img.gkbcdn.com/s3/b/engwe.jpg";

let img14 = document.createElement("img");
img14.src = "https://img.gkbcdn.com/s3/b/kugookirin-6TbAI6pr.jpg";

document
  .getElementById("sorting_result")
  .append(
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14
  );

/*---------------------A to Z data----------------------*/
import {
  default_data,
  a_data,
  b_data,
  c_data,
  d_data,
  other_data,
  e_data,
} from "./export.js";

let result = document.getElementById("sorting_result");

// onMouseOver Function..
result.addEventListener("mouseover", mouseOver);

function mouseOver() {}

// OnMouseOut Function..
result.addEventListener("mouseover", mouseOut);
function mouseOut() {}

/*------------------Default Sorting part-----------------*/
document.getElementById("hot").addEventListener("click", defaultStyle);
function defaultStyle() {
  result.innerHTML = null;
  result.innerHTML = default_data;
}
let a = document.getElementById("a");
a.addEventListener("click", a_sort);
function a_sort() {
  result.innerHTML = null;
  result.innerHTML = a_data;
  a.style.textDecoration = "underline";
}

let b = document.getElementById("b");
b.addEventListener("click", b_sort);
function b_sort() {
  result.innerHTML = null;
  result.innerHTML = b_data;
}

let c = document.getElementById("c");
c.addEventListener("click", c_sort);
function c_sort() {
  result.innerHTML = null;
  result.innerHTML = c_data;
}

let d = document.getElementById("d");
d.addEventListener("click", d_sort);
function d_sort() {
  result.innerHTML = null;
  result.innerHTML = d_data;
}

let e = document.getElementById("e");
e.addEventListener("click", e_sort);
function e_sort() {
  result.innerHTML = null;
  result.innerHTML = e_data;
}

let other = document.getElementById("other");
other.addEventListener("click", other_options);
function other_options() {
  result.innerHTML = null;
  result.innerHTML = other_data;
}

let navbarDiv = document.querySelector("#navbar");
navbarDiv.innerHTML = navbarFun();

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

//////////////footer

let footerDiv = document.querySelector("#footer");

footerDiv.innerHTML = footerFun();

let footerFirstPartDiv = document.querySelector("#footerFirstPart");
let newDivFooter = document.createElement("div");
let footerPlus = document.querySelector("#footerPlus");

footerFirstPartDiv.addEventListener("click", (event) => {
  newDivFooter.setAttribute("id", "footerDropDown");

  let newDivFooterArr = document.querySelectorAll("#footerDropDown");
  console.log(newDivFooter.style.display);

  // if (newDivFooterArr.length === 1) {
  //   newDivFooter.style.display === "none"
  //     ? (newDivFooter.style.display = "flex")
  //     : (newDivFooter.style.display = "none");
  //   return false;
  // }

  if (newDivFooterArr.length === 1) {
    if (newDivFooter.style.display === "none") {
      newDivFooter.style.display = "flex";
      footerPlus.innerText = "-";
    } else {
      newDivFooter.style.display = "none";
      footerPlus.innerText = "+";
    }
    return false;
  }
  footerPlus.innerText = "-";

  let newSubDivfirst = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = "./img/percentage.png";

  let p1 = document.createElement("p");
  p1.innerText = "Amazing offers";

  let p2 = document.createElement("p");
  p2.innerText = "Find best offers for smart gadgets at one place.";

  newSubDivfirst.append(img1, p1, p2);

  let newSubDivSecond = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = "./img/wallet.png";

  let p3 = document.createElement("p");
  p3.innerText = "Easy & secure payments";

  let p4 = document.createElement("p");
  p4.innerText =
    "Pay directly via PayPal or Klarna among other payment options.";

  newSubDivSecond.append(img2, p3, p4);

  let newSubDivThird = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = "./img/truck.png";

  let p5 = document.createElement("p");
  p5.innerText = "Local stock & fast shipping";

  let p6 = document.createElement("p");
  p6.innerText = "Buy from local stock and ship within 48-hour.";

  newSubDivThird.append(img3, p5, p6);

  let newSubDivFourth = document.createElement("div");
  let img4 = document.createElement("img");
  img4.src = "./img/customer-support.png";

  let p7 = document.createElement("p");
  p7.innerText = "Customer support";

  let p8 = document.createElement("p");
  p8.innerText = "24-hour customer support for all your queries.";

  newSubDivFourth.append(img4, p7, p8);

  newDivFooter.append(
    newSubDivfirst,
    newSubDivSecond,
    newSubDivThird,
    newSubDivFourth
  );

  footerFirstPartDiv.after(newDivFooter);
});
