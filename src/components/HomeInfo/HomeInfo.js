import "./HomeInfo.css";
import img from "./../../assets/home.jpg";
import img2 from "./../../assets/home2.jpg";

export default function HomeInfo() {
  return (
    <div className="Home">
      <div class="hover-text-one">
        <figure class="effect-text-three">
          <img className="first-image-home" src={img} alt="" />
          <figcaption>
            <h3>promotion</h3>
            <p>50% off all hoodies to celebrate our store's grand opening!</p>
          </figcaption>
        </figure>
      </div>

      <div className="info-clothing">
        <h2>Our Store and Clothing Manufacturing:</h2>
        <p>We take pride in introducing our store, specializing in high-quality, stylish, and durable clothing. We carefully select materials such as cotton, polyester, and spandex to ensure comfort and longevity in our garments. Our manufacturing process is carried out by highly skilled tailors who utilize advanced technology and equipment. Within our store, you will find a wide range of hoodies, trousers, and windbreakers, each featuring stylish designs and impeccable quality. We guarantee that every piece of clothing undergoes meticulous
           quality control to provide you with a pleasant shopping experience and ensure the longevity of our products.</p>
      </div>

      <div class="hover-text-one">
        <figure class="effect-text-four">
          <img src={img2} alt="" />
          <figcaption>
            <h3>Our Store:</h3>
            <p>
            Discover high-quality men's clothing at our store. From casual comfort to sophisticated styles, we have a wide range of hoodies, trousers, and windbreakers to suit every taste. Our garments are crafted with premium fabrics and meticulous attention to detail, ensuring 
            optimal comfort, durability, and style. Experience exceptional customer service. Visit our store today.
           </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
