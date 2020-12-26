import Component from 'react'

export const imageUserLabel=({ name, avatarURL }) => (
    <div className='w3-cirle'>
        <img src={avatarURL} alt={name} className='login-img-user' />
      {name}
    </div>
  );

