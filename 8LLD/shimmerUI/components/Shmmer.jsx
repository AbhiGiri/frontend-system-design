import React from 'react'

export default function Shmmer() {
    return Array(15).fill(0).map((n, i) => (
      <div key={i} className="p-5 m-5 border border-black">
        <div className='h-60 w-60 bg-slate-600'></div>
      </div>
    ));
}
