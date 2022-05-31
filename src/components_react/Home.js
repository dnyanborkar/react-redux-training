import React from "react";
import imgfnv from '../img/vn.jpeg'
import imgcart from '../img/shopping-cart-icon-text-service-retail.png'
import imgaddcart from '../img/add-to-cart.png'


const Home = ()=>{

    return(
        <div>
            <div className="img-wrapper item">
                <img  src={imgcart} alt="cart" style={{width:'150px', heigh:'150px'}}></img>
                <h1>Home Component</h1>
            </div>
            <div className="add-to-cart">
                <img  src={imgaddcart} alt="add-to-cart" style={{width:'150px', heigh:'150px',opacity:'0.5'}}></img>
            </div>

        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img  src={imgfnv} alt="VN Photo" style={{width:'300px', heigh:'300px',background: 'rgba(76, 175, 80, 0.3)'}}></img>
            </div>
            <div className="model-wrapper item">
                <h4>Model # 1:</h4>
            </div>
            <div className="model-wrapper item">
                <h4>Rated # : Top 10</h4>
            </div>
            <div className="model-wrapper item">
                <button> Confirm?</button>
            </div>
            
            </div>
        </div>
    )
}
export default Home;