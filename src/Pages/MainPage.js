
import React from 'react'
import About from '../components/About'
import Title from '../components/Title'

export default function MainPage() {
  return (
    <div>
     <About info={{title: "Some Title", body:"Some body"}}/>
     <Title info={{hello:"hello"}}/>
    </div>
  )
}

