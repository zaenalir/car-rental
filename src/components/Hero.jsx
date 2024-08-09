import React from 'react'
import assets from '../assets'

export default function Hero() {
  return (
    <>
        <section id="hero" className="bg-red">
    
        <div className="container">

        <div className="row">

            <div className="col-12 col-md-6 d-flex align-items-center text-light">
            <div>
                <h1 className="mb-4">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="mb-4">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a href="cari" className="btn btn-success">Mulai Sewa Mobil</a>
            </div>
            </div>
            <div className="col-12 col-md-6">
            <img
                src={assets.zenix}
                className="img-fluid"
                alt="Innova Zenix"
            />
            </div>
        </div>
        </div>
    </section>
  </>
  )
}
