import { useState } from 'react'
import './Component/KartuMenu.jsx'
import './Component/LabelHarga.jsx'
import './Component/Panel.jsx'
import './App.css'

const nama_panggilan = "Rama"
const N = 43

const gayaJudul = {
  color: '#1f3a5f', fontsize: '28px', fontwide: '700', letterSpacing: '0.5px'

}

function App() {
  const jam = 9

  return (
    <>
      <h1 className="judul" style= {gayaJudul}>Kantin {nama_panggilan}</h1>
      <p>{jam <  12 ? 'Selamat pagi' : 'Selama Siang'}</p>
      <p>Saldo Awal kartu Kantin : Rp {(N * 1000).toLocaleString('id-ID')}</p>
      <button disabled>Bayar</button>
      

    </>
  )

}



export default App
