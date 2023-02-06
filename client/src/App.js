import Main from './components/Main'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className='pt-16 bg-red-100 flex justify-center content-center items-center
                    bg-gradient-to-r from-purple-400 to-red-300 h-full'>
      <Navigation/>
      <Main/>
    </div>
  )
  
}

export default App
