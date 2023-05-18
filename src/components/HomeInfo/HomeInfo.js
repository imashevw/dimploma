import "./HomeInfo.css";
import img from "./../../assets/home.jpg";
import img2 from"./../../assets/home2.jpg";

export default function HomeInfo() {
    return (
      <div className="Home">
        <div class="hover-text-one">
          <figure class="effect-text-three">
            <img src={img} alt="" />
            <figcaption>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </figcaption>
          </figure>
        </div>
        <div class="hover-text-one">
          <figure class="effect-text-four">
            <img src={img2} alt="" />
            <figcaption>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
  