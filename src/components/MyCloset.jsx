import Clothes from './Clothes'

const MyCloset = (props) => {
  return (
    <main>
      <h2>My Closet</h2>
      {props.data.clothes.filter.map.((clothes) => (
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

export default MyCloset
