import Clothes from './Clothes'
import Button from './Button'
import HeartButton from './HeartButton'

const Home = (props) => {
  return (
    <main>
      <div className="title">
        <h1>If you can't stop thinking about it, buy it!</h1>
      </div>
      <div className="homepage">
        {props.data.clothes.map((item) => (
          <Clothes
            closet={false}
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

export default Home
