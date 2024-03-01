import Clothes from './Clothes'

const Wishlist = (props) => {
  return (
    <main>
      <h1>My Wishlist</h1>
      <div class="homepage">
        {props.data.clothes.map((clothes) => (
          <Clothes
            key={clothes.id}
            price={clothes.price}
            brand={clothes.brand.name}
            title={clothes.title}
            link={clothes.brand.link}
            image={clothes.image}
          />
        ))}
      </div>
    </main>
  )
}

/* {props.data.clothes.filter.map.((clothes) => ( */

export default Wishlist
