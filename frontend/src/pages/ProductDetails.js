import { useParams } from "react-router-dom"

const ProductDetails=()=>{

    const params = useParams()
    return (
       <>
       <h1>Product details</h1>
       <p>The product ID is {params.id}</p>
       <p>The price is {}</p>
       </> 
    )
}

export default ProductDetails