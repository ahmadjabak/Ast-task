import React from 'react'
import ActionAreaCard from '../layout/cards/userCard'
import {useGetPlayersQuery} from '../../features/Players/players-api-slice'
import './Users.css'
import {useState} from 'react'
import Pagination from '../layout/Pagination/Pagination'

function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(6);
  const indexOfLast = currentPage * PerPage;
  const indexOfFirst = indexOfLast - PerPage;
  const {data:users}=useGetPlayersQuery()
  console.log(users)
  return (
    <div>
    <div className="flex_card">
      {users?.slice(indexOfFirst, indexOfLast).map((user,index)=>
<ActionAreaCard name={user.name} key={index} image={user.avatar}/>
      )

      }
    
    </div>
    <Pagination
              totalPosts={users?.length}
              postsPerPage={PerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}/>
    </div>
  )
}

export default Users
