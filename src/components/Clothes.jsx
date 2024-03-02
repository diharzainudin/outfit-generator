import Button from './Button'
import HeartButton from './HeartButton'

const Clothes = (props) => {
  return (
    <div className="clothes-container">
      <li className="clothes" id={props.key}>
        <h3>Occasion: {props.occasion}</h3>
        <p>
          <i>{props.title}</i>
        </p>
        <img src={props.image} className="clothes-img" />
        <div className="overlay">
          <h3 className="brand">{props.brand}</h3>
        </div>
        {/* if it's true, show nothing */}
        {props.closet ? null : (
          <>
            <h3 id="price">{props.price} </h3>
            <h3 id="buy-button">
              <Button link={props.link} />
            </h3>
            <h4>
              <HeartButton /> Add to wishlist
            </h4>
          </>
        )}
      </li>
    </div>
  )
}

export default Clothes
