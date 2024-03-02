import Clothes from './Clothes'

const Wishlist = (props) => {
  return (
    <main>
      <h1>My Wishlist</h1>
      <div className="homepage">
        {props.data.clothes.map((item) => (
          <Clothes
            closet={true}
            wishlist={true}
            key={item.id}
            price={item.price}
            occasion={item.occasion}
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
