// react-router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import HomeMeal from './Components/HomeMeal/HomeMeal';
import Categories from './Components/Categories/Categories';
import RandomMeal from './Components/RandomMeal/RandomMeal';
import useCustomHook from './useCustomHook';
import Error from './Components/Error/Error';
//import Test from './Components/Test/Test'

const App = () => {
  const [ meal, categories, randomMeal ] = useCustomHook();

  return (
    <BrowserRouter>
      <Navbar />
      <div className='content container'>
        <Routes>
          <Route path='/' element={<HomeMeal meals={meal}/>} />
          <Route path='/categories' element={<Categories categories={categories} />} />
          <Route path='/random_meal' element={<RandomMeal randomMeal={randomMeal} />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App