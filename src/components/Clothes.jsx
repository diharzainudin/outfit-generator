import Button from './Button'
import HeartButton from './HeartButton'

const Clothes = (props) => {
  console.log(props)
  return (
    <div>
      <li classname="clothes" id={props.key}>
        <h3>Brand: {props.brand}</h3>
        <p>
          <i>{props.title}</i>
        </p>
        <img src={props.image} />
        <h3 id="price">{props.price} </h3>
        <h3 id="buy-button">
          <Button link={props.link} />
        </h3>
        <h3>
          <HeartButton />
        </h3>
      </li>
    </div>
  )
}

export default Clothes
