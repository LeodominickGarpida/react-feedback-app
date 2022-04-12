import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

function Post() {
  const params = useParams()
  const status = 404
  if(status === 404) {
      return <Navigate to='/notfound' />
  }

  return <div>
      <h1>{params.id}</h1>
  </div>
}

export default Post
