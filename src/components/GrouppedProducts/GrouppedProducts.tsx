import { groupProductsByCategory } from "../../utils/productUtils";
import { IGrouppedArr } from "../../types/product.types";


export const GrouppedProducts = ({productsData}) => {
  const grouppedArr = groupProductsByCategory(productsData);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div  data-testid="grouppedProducts">Groupped Products</div>
    {grouppedArr.map((product: IGrouppedArr, index: number) => {
      return <div key={index} data-testid="productCategory, productSum, productQTY" >CATEGORY: {product.category}: SUM: {product.sum}$ QTY: {product.products.length}</div>
      
    })}
  </div>
  )
}
