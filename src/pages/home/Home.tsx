import React from 'react';

function Home() {
  return (
    <div 
      className="flex flex-col justify-center items-center h-screen" 
      style={{ 
        backgroundImage: `url('https://imgur.com/43vYaNA.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className="text-center text-white">
        <img 
          src="https://imgur.com/OiHVAke.png" 
          alt="Logo pet ride" 
          width="150px" 
        />
        <h3 className="mt-4">Seu pet merece estar ao seu lado <br />aonde você for</h3>
      </div>
    </div>
  );
}

export default Home;