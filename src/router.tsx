import {Route , Routes} from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { OrderPlaced } from './pages/OrderPlaced'

export const Router = () => {

return(
    <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-placed' element={<OrderPlaced />} />
    </Routes>
)

}
