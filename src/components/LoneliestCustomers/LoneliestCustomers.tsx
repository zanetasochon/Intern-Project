import { getHighestDistance } from "../../utils/userUtils";


export const LoneliestCustomers = ({usersData}) => {

  const highestDistance = getHighestDistance(usersData);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>Loneliest customers </div>
   <div>{highestDistance[0].firstUser.firstname} {highestDistance[0].firstUser.lastname}, {highestDistance[0].secondUser.firstname} {highestDistance[0].secondUser.lastname}: {highestDistance[0].distance}</div>
  </div>
  )
}
