import { Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'


const Shop = () => {
  return <h1>Hi there</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index if its tue its match the parent component */}
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}
export default App
