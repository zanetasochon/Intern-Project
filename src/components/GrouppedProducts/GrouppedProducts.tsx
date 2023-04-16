import { groupProductsByCategory } from "../../utils/productUtils";


export const GrouppedProducts = ({productsData}) => {
  const grouppedArr = groupProductsByCategory(productsData);
  
  
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>Groupped Products</div>
    {grouppedArr.map((product: any) => {
      
      return <div>CATEGORY: {product.category}: SUM: {product.sum}$ QTY: {product.products.length}</div>
      
    })}
  </div>
  )
}
