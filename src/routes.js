import PeoductListning from "./components/ProductListning"
import ProductComoponent from "./components/ProductComoponent"
import ProductDetails from "./components/ProductDetails"

 
 export const routes=[

     { path:"/", element:<PeoductListning/>},
     {path:"productdetails/:productid",element:<ProductDetails/>}
 ]
 