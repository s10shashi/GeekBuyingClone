let navbarFunction = () => {
  return `
   <div id="navbarSubMain">
        <div id="navbarTopSection">
        <div onclick="saveBig()"><p>Save BIG withj our appl <span class="navbarArrowSymbol">&#8744</span></p></div>
        <div><p>Language <span class="navbarArrowSymbol">&#8744</span></p></div>
        <div><p>Support Center <span class="navbarArrowSymbol">&#8744</span></p></div>
      </div>
       <div id="navbarMidlePart">
        <div id='mainLogo'> <img src="./img/download.png" alt=""></div>
        <div id="navbarAllCategories"><p>All Categories <span>&#9662</span></p></div>
        <div style="border: 1px solid transparent;" id="navbarInput" ><input type="text" placeholder="Search by keywords"></div>
        <div id="navbarSearchSymbol">
           <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        <div id="navbarShip">
          <p>Ship to</p>
          <img id="navbarFlag" src="./img/flag.png" alt="">
          <p>/ INR<span class="navbarArrowSymbol">&#8744</span></p>
        </div>
        <div id="navbarSignIn">
          <img src="https://www.svgrepo.com/show/198180/user-profile.svg" alt="">
          <p>Sign In</p>
        </div>
        <div id="navbarCart"><i class="fa fa-shopping-cart" style="font-size:30px;color:white"></i></div>
      </div>
      <div id="navbarBottomPart">
      <div id="navbarCategories">
        <div id="navbarCategoriesSymbol">
         <p>---</p>
         <p>---</p>
         <p>---</p>
        </div>
        <p>Categories</p>
      </div>
        <div id= 'arivalPageLink'><p>New</p></div>
        <div id= 'bestSellingPageLink'><p>Bestselling</p></div>
        <div id= 'barndPageLink'><p>Brand</p></div>
        <div><p>Clearance</p></div>
        <div><p>Deals</p></div>
        <div><p>Coupon</p></div>
        <div><p>App Only</p></div>
      </div>
      </div>
  `;
};

export default navbarFunction;
