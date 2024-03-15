import NavBar from './components/NavBar';

function HeroSection(){
  return <div>Hero Section</div>;
}

function App() {
  return (
    <>
      <div>
        Introduction React
        <div>
          Halaman Div
        </div>
        <h1>Tag H1</h1>
        <HeroSection />
        <NavBar />
      </div>
    </>
  )
}

export default App
