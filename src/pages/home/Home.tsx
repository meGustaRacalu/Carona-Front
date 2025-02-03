//import './Home.css';

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
      <div className="flex justify-center items-center w-full"> 
        <img 
          src="https://imgur.com/OiHVAke.png" 
          alt="Logo pet ride" 
          width="200px" 
          className="ml-90" 
        />
        <h2 className="text-center">Seu pet merece estar ao seu lado <br />aonde você for</h2>
      </div>
    </div>
  );
}

export default Home;