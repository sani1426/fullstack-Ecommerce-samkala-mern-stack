import { useEffect, useState } from "react"
import SummaryApi from '../../common/index.js'
import moment from 'moment'



const AllUsers = () => {

const [allUsers , setAllUsers]=useState([])

const fetchAllUsers = async ()=> {

    const result = await fetch(SummaryApi.AllUsers.url , {
      methode : SummaryApi.AllUsers.methode ,
      credentials : "include"
    })

    const response = await result.json()
console.log(response);
   setAllUsers(response.data)
    console.log(allUsers);
}

useEffect(() => {
  fetchAllUsers()
}, [])




  return (
    <div className="md:pl-[21rem] py-4 pr-4" >
           <table className="w-full user-table">
            <thead>
           <tr>
           <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Created Date</th>
           </tr>
            </thead>
            <tbody className="text-center ">
                  {
                    allUsers.map((user , index) => {
                      return(
                        <tr  key={user?._id}>
                          <td>
                              {index + 1}
                          </td>
                          <td>
                              {user?.name}
                          </td>
                          <td>
                              {user?.email}
                          </td>
                          <td>
                              {user?.gender}
                          </td>
                          <td>
                              {user?.role}
                          </td>
                          <td>
                              {moment(user?.createdAt).format('ll')}
                          </td>
                        </tr>
                      )
                    })
                  }
            </tbody>
           </table>
    </div>
  )
}

export default AllUsers