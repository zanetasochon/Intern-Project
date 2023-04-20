import { GeoPosition } from "geo-position.ts"
import { IDistance, IUser, IUserLoc, IAnswer } from "../types/product.types"

export const getHighestDistance = (data: IUser[]) => {
    // krok 1 bierzemy userow z api i pushujemy obiekt z lat, long, id
    let arrOfUsersLocation: IUserLoc[] = []
    data.map((user: IUser) => {
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
    const highestDist = Math.max(...distancesArr.map((el: IDistance) => el.distance))
    
    // krok 4 znajdujemy ten dystans w tablicy i znajdujemy wtedy userow z najwiekszym dystansem
    let answer: IAnswer[] = []
    distancesArr.find((el: IDistance) => {
        if(el.distance === highestDist) {
            if(!answer.some((obj: IAnswer) => el.firstUser.toString() === obj.firstUser.firstname)){
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

const findUserById = (usersData: IUser[], id: number) => {
    const thisUser = usersData.find((user: IUser) => {
        return user.id === id
    })
    return thisUser?.name
}