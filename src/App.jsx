import './App.css'
import Clothes from './components/Clothes'
import data from './clothes.json'

const App = () => {
  return (
    <div>
      <header>
        <h1>Dress Me</h1>
      </header>
      <main>
        {data.clothes.map((clothes) => (
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
    </div>
  )
}

export default App
