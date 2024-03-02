import Clothes from './Clothes'
import Home from './Home'

const MyCloset = (props) => {
  return (
    <main>
      <h1>My Closet</h1>
      <div className="closetpage">
        {props.data.clothes
          .filter((item) => {
            return item.owned === true
          })
          .map((item) => (
            <Clothes
              closet={true}
              key={item.id}
              category={item.category}
              brand={item.brand.name}
              title={item.title}
              image={item.image}
            />
          ))}
      </div>
    </main>
  )
}

export default MyCloset
