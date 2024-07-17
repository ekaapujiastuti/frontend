import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superhero'
import Footer from './components/Footer'


function App() {
  return (
    <>
    
    <div className='intro' id='top'>
      <Navbar />
      <Intro />

    </div>
    <Trending/>
    <a href="" className='btn btn-warning p-2 tombol'>
      Go To Top
    </a>
    <Superhero/>
    <Footer/>
   </>
  )
}

export default App
