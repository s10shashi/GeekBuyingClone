import navbarFun from "./navbar.js";
import footer from "./footer.js";
let cartTbody = document.querySelector("#cartTbody");
let table = document.querySelector("table");
let cartBottomPartDiv = document.querySelector("#cartBottomPart");
let data = JSON.parse(localStorage.getItem("cart-item"));

let totalPrice = 0;

const displayCartData = (data) => {
  data.forEach((data) => {
    let tr = document.createElement("tr");
    let tdDetails = document.createElement("td");
    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "detailsDiv");
    let img = document.createElement("img");
    img.src = data.image;
    img.setAttribute("class", "cartAppendedImg");
    let details = document.createElement("p");
    details.innerText = `${data.detail}`;
    detailsDiv.append(img, details);
    tdDetails.append(detailsDiv);

    let tdQuntity = document.createElement("td");
    tdQuntity.setAttribute("id", "tdQuntity");
    let minusSpan = document.createElement("span");
    minusSpan.innerText = "-";
    minusSpan.setAttribute("class", "minusSpan");
    let quntitySpan = document.createElement("span");
    quntitySpan.innerText = "1";
    quntitySpan.setAttribute("class", "quntitySpan");
    let plusSpan = document.createElement("span");
    plusSpan.innerText = "+";
    plusSpan.setAttribute("class", "plusSpan");
    tdQuntity.append(minusSpan, quntitySpan, plusSpan);

    let tdPrice = document.createElement("td");
    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerHTML = `${data.original}`;
    tdPrice.append(price);

    let tdTotalPrice = document.createElement("td");
    let totalPrice = document.createElement("p");
    totalPrice.setAttribute("class", "totalPrice");
    totalPrice.innerHTML = `${data.original}`;
    tdTotalPrice.append(totalPrice);

    let tdWishList = document.createElement("td");
    tdWishList.innerText = "Delete";
    tdWishList.setAttribute("class", "cartOneItemDeleteButton");
    tdWishList.style.cursor = "pointer";

    tr.append(tdDetails, tdPrice, tdQuntity, tdTotalPrice, tdWishList);
    cartTbody.append(tr);
    totalPrice += data.original;
  });

  let subtotalDiv = document.createElement("div");
  subtotalDiv.setAttribute("id", "subtotalDiv");
  let deleteAll = document.createElement("p");
  deleteAll.innerText = "Delete";
  deleteAll.style.color = "red";
  deleteAll.style.cursor = "pointer";
  deleteAll.setAttribute("id", "deleteAll");
  let subtotalText = document.createElement("p");
  subtotalText.innerText = `Your subtotal: ₹ ${totalPrice}`;
  subtotalText.style.color = "#ff4548";
  subtotalText.setAttribute("id", "subtotalText");
  subtotalDiv.append(deleteAll, subtotalText);
  table.after(subtotalDiv);
};

displayCartData(data);

let quntitySpan = document.querySelectorAll(".quntitySpan");
let minusSpan = document.querySelectorAll(".minusSpan");
let priceSpan = document.querySelectorAll(".price");
let totalPriceSpan = document.querySelectorAll(".totalPrice");

const minusSpanFunctionality = (minusSpan) => {
  minusSpan.forEach((minusSpan, index) => {
    minusSpan.addEventListener("click", (event) => {
      if (quntitySpan[index].innerText > 1) {
        quntitySpan[index].innerText--;
        let multiple = +quntitySpan[index].innerText;
        let unitPrice = +priceSpan[index].innerText;
        totalPriceSpan[index].innerText = multiple * unitPrice;
        subtotalPriceFun(totalPriceSpan);
        displayCartBottomPartDiv(cartBottomPartDiv);
        setData[index].quntity = +quntitySpan[index].innerText;
      }
    });
  });
};
minusSpanFunctionality(minusSpan);

let plusSpan = document.querySelectorAll(".plusSpan");

const plusSpanFunctionality = (plusSpan) => {
  plusSpan.forEach((plusSpan, index) => {
    plusSpan.addEventListener("click", (event) => {
      quntitySpan[index].innerText++;
      let multiple = +quntitySpan[index].innerText;
      let unitPrice = +priceSpan[index].innerText;
      totalPriceSpan[index].innerText = multiple * unitPrice;
      subtotalPriceFun(totalPriceSpan);
      displayCartBottomPartDiv(cartBottomPartDiv);
    });
  });
};
plusSpanFunctionality(plusSpan);

let subtotalText = document.querySelector("#subtotalText");

let totalPrices;
const subtotalPriceFun = (totalPriceSpan) => {
  let price = 0;
  totalPrices = 0;
  totalPriceSpan.forEach((totalPrice) => {
    price += +totalPrice.innerText;
    totalPrices += price;
  });
  subtotalText.innerText = `Your Subtotal: ${totalPrices.toFixed(2)}`;
};
subtotalPriceFun(totalPriceSpan);

// let cartBottomPartDiv = document.querySelector("#cartBottomPart");

let displayCartBottomPartDiv = (cartBottomPartDiv) => {
  cartBottomPartDiv.innerHTML = "";
  let allLastDiv = document.createElement("div");
  let continueShopping = document.createElement("div");
  let continueShoppingPTag = document.createElement("p");
  continueShoppingPTag.innerText = "Continue Shopping";
  continueShopping.append(continueShoppingPTag);

  let totalItems = document.createElement("div");
  let totalItemsCal = data.length;
  let totalItemsPTag = document.createElement("p");
  totalItemsPTag.innerText = `You choose ${totalItemsCal} Item(s)`;
  totalItems.append(totalItemsPTag);

  let totalPrice = document.createElement("div");
  let totalPriceTag = document.createElement("p");
  totalPriceTag.innerText = `Total: ${totalPrices.toFixed(2)}`;
  totalPrice.append(totalPriceTag);

  let payPalDiv = document.createElement("div");
  let payPalButtom = document.createElement("button");
  payPalButtom.setAttribute("id", "payPalButtom");
  payPalButtom.innerText = `Pay with PayPal`;
  payPalDiv.append(payPalButtom);

  let checkoutDiv = document.createElement("div");
  let checkoutButtom = document.createElement("button");
  checkoutButtom.setAttribute("id", "checkoutButtom");
  checkoutButtom.innerText = `Proceed to checkout`;
  checkoutDiv.append(checkoutButtom);

  allLastDiv.append(
    continueShopping,
    totalItems,
    totalPrice,
    payPalDiv,
    checkoutDiv
  );
  cartBottomPartDiv.append(allLastDiv);
};
displayCartBottomPartDiv(cartBottomPartDiv);

///////////////////checkoutButtom

// let checkoutButtom = document.querySelector("#checkoutButtom");

// let setData = JSON.parse(localStorage.getItem("cartData")) || [];

// checkoutButtom.addEventListener("click", (event) => {
//   console.log("click");
//   setData.forEach((data, index) => {
//     console.log(quntitySpan[index].innerText);
//     data.quantity = quntitySpan[index].innerText;
//     localStorage.setItem("cartData", JSON.stringify(setData));
//   });
// });

let cartOneItemDeleteButton = document.querySelectorAll(
  ".cartOneItemDeleteButton"
);

console.log(cartOneItemDeleteButton);

cartOneItemDeleteButton.forEach((deleteButton, index) => {
  deleteButton.addEventListener("click", (event) => {
    data.splice(index, 1);
    localStorage.setItem("cart-item", JSON.stringify(data));
    window.location.reload();
  });
});

let checkoutButtom = document.querySelector("#checkoutButtom");
checkoutButtom.addEventListener("click", (event) => {
  window.location.href = "./payment.html";
  console.log("hiii");
});

let deleteAll = document.querySelector("#deleteAll");
deleteAll.addEventListener("click", (event) => {
  data = [];
  localStorage.setItem("cart-item", JSON.stringify(data));
  window.location.reload();
});

//////////////////////nabar

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

/////////////////////////////footer//////////////////////////////////

let footerDiv = document.querySelector("#footer");
footerDiv.innerHTML = footer();

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
