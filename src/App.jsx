import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className="relative  min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="h-screen w-full bg-blue-500"></section>

    </main>
  )
}

export default App
