import { IProduct } from "../../types/product.types"


export const Products = ({productsData}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div data-testid="products">Products</div>
    {productsData.map((product: IProduct) => {
      return <div data-testid="productTitle">{product.title}</div>
    })}
  </div>
  )
}
