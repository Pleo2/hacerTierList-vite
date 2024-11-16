import './App.css'
import { ButtonSection } from './components/layout/buttonSection/ButtonSection'
import { Header } from './components/layout/Header/Header'
import { ImagesSection } from './components/layout/imagesSection/ImagesSection'
import { TierList } from './components/layout/tierList/TierList'


// contexts 

import { ImagesContextProvider } from './context/ImagesContext'

function App() {

  return (
    <>
      <div className='antialiased md:w-[768px] lg:w-[1040px] m-auto px-6'>
        <ImagesContextProvider>
          <Header />
          <TierList />
          <ButtonSection />
          <ImagesSection/>
        </ImagesContextProvider>
      </div>
    </>
  )
}

export default App
