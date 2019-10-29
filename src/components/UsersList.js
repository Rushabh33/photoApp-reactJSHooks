import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UsersList = () => {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    getTopLevelPhotoData('users')
      .then(data => setListOfUsers(data))
  }, [])

  const getTopLevelPhotoData = async (query) => {
    const url = `https://jsonplaceholder.typicode.com/${query}`
    const response = await fetch(url);
    return await response.json();
  }

  const users = listOfUsers.map(userInfo => <UserCard userInfo={userInfo} key={userInfo.id} />)

  return (
    <>
      <h2 className='contentTitle'>Choose a user</h2>
      <ul className='contentList'>
        {listOfUsers.length ? users : <div>loading...</div>}
      </ul>
    </>
  )
}

export default UsersList
