import Button from './Button'

const Clothes = (props) => {
  console.log(props)
  return (
    <div>
      <li classname="clothes" id={props.key}>
        <h2>Brand: {props.brand}</h2>
        <h3>
          <i>{props.title}</i>
        </h3>
        <img src={props.image} />
        <h3>Price: {props.price}</h3>
        <Button link={props.link} />
      </li>
    </div>
  )
}

export default Clothes
