import './App.css'
import data from './clothes.json'
import Clothes from './components/Clothes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  )
}

export default App
