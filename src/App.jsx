import './App.css'
import { Header } from './components/layout/Header/Header'
import { TierList } from './components/tierList/TierList'
import { TierListContextProvider } from './context/TierListContext'

function App() {

  return (
    <>
      <div className='antialiased md:w-[768px] lg:w-[1040px] m-auto px-6'>
        <TierListContextProvider>
          <Header />
          <TierList />
        </TierListContextProvider>
      </div>
    </>
  )
}

export default App
