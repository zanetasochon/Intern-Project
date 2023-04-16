import { GeoPosition } from "geo-position.ts"
import { IData, IDistance, } from "../types/product.types"

export const getHighestDistance = (data: IData[]) => {
    // krok 1 bierzemy userow z api i pushujemy obiekt z lat, long, id
    let arrOfUsersLocation: any[] = []
    data.map((user: IData) => {
        arrOfUsersLocation.push({
            lat: +user.address.geolocation.lat,
            long: +user.address.geolocation.long,
            id: user.id
        })
    })
    
    // krok 2 mierzymy dystans miedzy userami i wrzucamy obiekty do nowej tablicy
    let distancesArr: IDistance[] = []
    arrOfUsersLocation.map(user => {
        for(let i = 0; i < 10; i++) {
            let xPoint = new GeoPosition(user.lat, user.long);
            let yPoint = new GeoPosition(arrOfUsersLocation[i].lat, arrOfUsersLocation[i].long);
            
            const distance = +xPoint.Distance(yPoint).toFixed(0)
            distancesArr.push({
                firstUser: user.id,
                secondUser: arrOfUsersLocation[i].id,
                distance,
            })
        }
    })
    // krok 3 znajdujemy najwiekszy dystans
    const highestDist = Math.max(...distancesArr.map((el: any) => el.distance))
    
    // krok 4 znajdujemy ten dystans w tablicy i znajdujemy wtedy userow z najwiekszym dystansem
    let answer: any[] = []
    distancesArr.find((el: any) => {
        if(el.distance === highestDist) {
            if(!answer.some((obj: any) => el.firstName === obj.firstName)){
                answer.push({
                    firstUser: findUserById(data, el.firstUser),
                    secondUser: findUserById(data, el.secondUser),
                    distance: `${el.distance}m / ${el.distance / 1000}km`
                   
                })
              
            } 
        }
    }) 
    return answer
}

const findUserById = (usersData: any, id: number) => {
    const thisUser = usersData.find((user: any) => {
        return user.id === id
    })
    return thisUser?.name
}