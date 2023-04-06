import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchProvider from './contexts/Search'


function App() {
  return (
    <SearchProvider>
      <Header />
      <main className='container-main'>
        <Outlet />
      </main>
      <Footer />
    </SearchProvider>
  )
}

export default App
