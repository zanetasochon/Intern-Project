import { IProduct, IGroupped } from "../types/product.types"

export const groupProductsByCategory = (array: IProduct[]) => {
    const groupedProductsByCategory = Object.entries(
        array.reduce((acc, {category, title, price}) => {            
            if(!acc[category]) {
                acc[category] = [];
            }
             
            acc[category].push({title, price})
            return acc
        }, {})
        ).map(([category, products]) => ({category, products}))
        const arr = sumProductPrices(groupedProductsByCategory)
        return arr
}   


const sumProductPrices = (groupedProducts: IGroupped[]) => {
    const grouppedAndSortedArr = groupedProducts.map((groups: IGroupped) => {
        let tempArr: number[] = [];
        Object.values(groups.products).map((product: IProduct) => tempArr.push(product.price))
        groups.sum = Math.floor(tempArr.reduce((a: number, b: number) => a+b, 0))
        return groups
      })
    return grouppedAndSortedArr
}