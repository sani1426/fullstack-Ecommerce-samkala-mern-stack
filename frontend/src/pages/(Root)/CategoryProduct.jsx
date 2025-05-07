

import React from 'react'
import { useParams } from 'react-router'

const CategoryProduct = () => {

    const {name} = useParams()
    
  return (
    <div>CategoryProduct {name}</div>
  )
}

export default CategoryProduct