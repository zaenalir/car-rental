import React from 'react'

export default function SearchCriteria() {
  return (
    <>
    <div className="container">
      <div className="card" style={{margin: '20px 0px'}}>
        <div className="card-body">
          <form className="row g-3 justify-content-center">
            <div className="col-auto">
              <label className="form-label">Tipe Driver</label>
              <select className="form-select" id="tipeDriver">
                <option value="Dengan Supir">Dengan Driver</option>
                <option value="Lepas Kunci">Tanpa Driver</option>
              </select>
            </div>
            <div className="col-auto">
              <label className="form-label">Tanggal</label>
              <input
                type="date"
                className="form-control"
                placeholder="Pilih Tanggal"
                id="tanggal"
              />
            </div>
            <div className="col-auto">
              <label className="form-label">Waktu / Jam Jemput</label>
              <input
                type="time"
                className="form-control"
                placeholder="Pilih Waktu"
                id="waktu"
              />
            </div>
            <div className="col-auto">
              <label className="form-label">Jumlah Penumpang</label>
              <input
                type="number"
                className="form-control"
                placeholder="Jumlah Penumpang"
                id="penumpang"
              />
            </div>
            <div className="col-auto">
              <button type="button" id="cari" className="btn btn-success" >
                Cari Mobil
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
