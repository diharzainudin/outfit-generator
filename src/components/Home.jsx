import Clothes from './Clothes'
import Button from './Button'
import HeartButton from './HeartButton'

const Home = (props) => {
  return (
    <main>
      <h1>If you can't stop thinking about it, buy it!</h1>
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

export default Home
