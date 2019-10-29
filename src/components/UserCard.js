import React, { useEffect, useState } from 'react'
import { getNestedPhotoData } from '../utilityFunctions'
import { Link } from 'react-router-dom'

const UserCard = ({ userInfo }) => {

  const [listOfAlbums, setListOfAlbums] = useState([])
  const [listOfPhotos, setListOfPhotos] = useState([])

  useEffect(() => {
    getNestedPhotoData('albums', 'userId', userInfo.id)
      .then(data => setListOfAlbums(data))
  }, [])

  useEffect(() => {
    if (listOfAlbums.length) {
      getAllUserPhotos()
        .then(data => setListOfPhotos(data))
    }
  }, [listOfAlbums])

  // Each index represents an album - in order
  const getAllUserPhotos = async () => {
    return await Promise.all(listOfAlbums.map(albumInfo => {
      return getNestedPhotoData('photos', 'albumId', albumInfo.id)
    }))
  }

  const profileThumbnailImage = listOfPhotos.length ? listOfPhotos[0][0].thumbnailUrl : null

  return (
    <li className='contentCards'>
      <Link className='linkRoute' to={{
        pathname: '/albums',
        state: {
          userName: userInfo.name,
          listOfUserAlbums: listOfAlbums, // 10 albums
          listOfUserPhotos: listOfPhotos // 500 songs
        }
      }}>
        <div className='userPhotoThumbnail'>
          <img src={profileThumbnailImage} alt="user photo thumbnail" />
        </div>
        <div>
          <h3>{userInfo.name}</h3>
          <p>{userInfo.address.city}</p>
          <p className='userWebsite'>{userInfo.website}</p>
        </div>
      </Link>
    </li>

  )
}

export default UserCard
