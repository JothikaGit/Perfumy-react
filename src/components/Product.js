import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";

//Product Componrnt

function Product(){
    return(
      <div className="product">
          <div className="box">
          <img src={one} alt="one"></img>
          <p>Buy perfume for men and women from Bella Vita Luxury under ₹500. Budget friendly Perfumes for everyone are available at our online store.</p>
          </div>
  
          <div className="box">
              <img src={two} alt="two"></img>
              <p>Buy perfume for men and women from Bella Vita Luxury under ₹500. Budget friendly Perfumes for everyone are available at our online store.</p>
             </div>
  
              <div className="box">
                  <img src={three} alt="three"></img>
                  <p>Buy perfume for men and women from Bella Vita Luxury under ₹500. Budget friendly Perfumes for everyone are available at our online store.</p>
          </div>
       </div>
    )
  }

  export default Product