import Clothes from './Clothes'
import Home from './Home'

const MyCloset = (props) => {
  return (
    <main>
      <h1>My Closet</h1>
      <div class="closetpage">
        {props.data.clothes
          .filter((ownedData) => {
            if (owned === 'true') {
              return ownedData
            }
          })
          .map((clothes) => (
            <Clothes
              key={clothes.id}
              category={clothes.category}
              brand={clothes.brand.name}
              title={clothes.title}
              image={clothes.image}
            />
          ))}
      </div>
    </main>
  )
}

{
  /* {props.data.clothes.filter.map.((clothes) => () */
}

export default MyCloset
