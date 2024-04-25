import React from 'react'

export function Header() {
  const style = {
    color: '#759248',
    fontSize: '32px',
    textTransform: 'uppercase',
  }
  return (
    <header className='header'>
      <h1 style={style}> Courses offered by Navigate Nex company </h1>
    </header>
  )
}
