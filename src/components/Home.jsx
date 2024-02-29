import Clothes from './Clothes'

const Home = (props) => {
  return (
    <main>
      {props.data.clothes.map((clothes) => (
        <Clothes
          key={clothes.id}
          category={clothes.category}
          price={clothes.price}
          brand={clothes.brand.name}
          title={clothes.title}
          link={clothes.brand.link}
          image={clothes.image}
        />
      ))}
    </main>
  )
}

export default Home
