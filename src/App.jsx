import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  const [users , setUsers] = useState([])
  const [perPage , setPerPage] = useState(4)
  const [btn , setBtn] = useState(1)

  useEffect(()=>{
    fetch(`https://www.melivecode.com/api/users?page=${btn}&per_page=${perPage}`)
    .then(res => res.json())
    .then(data => {
      setUsers(data.data)
      console.log(data.data);
    })
  } , [perPage , btn])

  return (
    <main>
      <div className="container-fluid">
        <div className="row row1">
          <div className="col-12 d-flex justify-content-between py-4">
            <div className="btns">
              <button onClick={() => setBtn(1)}>page 1</button>
              <button onClick={() => setBtn(2)}>page 2</button>
            </div>

            <select name="" id="" onChange={(e) => {setPerPage(e.target.value)}}>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>
          
        </div>
        <div className="row gy-4">
         {
          users.map(user => 
            <div className='col-3' key={user.id}>
              <div className="box rounded-2 py-4 px-3">
                  <div>
                    <img className='w-100' src={user.avatar} alt="" />
                  </div>
                  <h2>
                    {user.fname} {user.lname}
                  </h2>
              </div>
            </div>
            )
         }
        </div>
      </div>
    </main>
  )
}



export default App