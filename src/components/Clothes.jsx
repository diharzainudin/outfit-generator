import Button from './Button'
import HeartButton from './HeartButton'

const Clothes = (props) => {
  return (
    <div class="clothes-container">
      <li classname="clothes" id={props.key}>
        {/* <h3>Brand: {props.brand}</h3> */}
        <p>
          <i>{props.title}</i>
        </p>
        <img src={props.image} class="clothes-img" />
        <div class="overlay">
          <h3 class="brand">{props.brand}</h3>
        </div>
        <h3 id="price">{props.price} </h3>
        <h3 id="buy-button">
          <Button link={props.link} />
        </h3>
        <h4>
          <HeartButton /> Add to wishlist
        </h4>
      </li>
    </div>
  )
}

export default Clothes
