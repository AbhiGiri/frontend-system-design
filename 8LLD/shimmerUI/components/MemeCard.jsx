// export default MemeCard = ({ data }) => {
//   
import React from 'react'

export default function MemeCard({data}) {
  const { url, title, author } = data;

  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-64 h-64" alt="meme" src={url} />
      <p className='text-amber-600'>{author}</p>
    </div>
  );
};
