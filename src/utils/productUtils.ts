export const groupProductsByCategory = (array: any[]) => {
    const groupedProductsByCategory = Object.entries(
        array.reduce((acc: any, {category, title,price}:  any) => {
            console.log(acc)
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

const sumProductPrices = (groupedProducts: any[]) => {
  
    const grouppedAndSortedArr = groupedProducts.map((groups: any) => {
        let tempArr: number[] = [];
        Object.values(groups.products).map((product: any) => tempArr.push(product.price))
        groups.sum = Math.floor(tempArr.reduce((a: number, b: number) => a+b, 0))
        return groups
      })
    return grouppedAndSortedArr
}