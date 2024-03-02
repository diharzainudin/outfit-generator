import Clothes from './Clothes'

const Wishlist = (props) => {
  return (
    <main>
      <h1>My Wishlist</h1>
      <div className="homepage">
        {props.data.clothes.map((item) => (
          <Clothes
            key={item.id}
            price={item.price}
            brand={item.brand.name}
            title={item.title}
            link={item.brand.link}
            image={item.image}
          />
        ))}
      </div>
    </main>
  )
}

export default Wishlist
