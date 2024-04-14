import React from 'react'
import Title from './Title'

export default function About(props) {
  return (
    <div>
        {props.info.title}
        {props.info.body}
    </div>
  )
}
