import BusinessList from './components/BusinessList/page'
import SearchBar from './components/SearchBar/page'

function App() {

  return (
    <div className="bg-blue-500 w-full">
      <div className="absolute w-full top-0 h-24 bg-amber-600 flex flex-col justify-around">
        <h1 className="font-bold text-2xl text-white text-center">Ravenous</h1>
      </div>
      <div className='mt-24 flex flex-col space-y-4'>
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  )
}

export default App
