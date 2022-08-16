import React from 'react'
import { Link } from 'react-router-dom'

const Kamchilik = () => {
  return (
    <div className='not' >
      <h1>Saytda Hozir Kamchilik Mavjud. Shuning Uchun FRONTEND BOOTCAMP Sahifasiga o'tishizni so'rayman.</h1>
      <Link to="/" >
        <button>FOUNDATION BOOTCAMP</button>
      </Link>
    </div>
  )
}

export default Kamchilik