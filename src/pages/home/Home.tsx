import './Home.css';

function Home() {
    return (

        <div className="min-h-screen w-full overflow-y-auto">
            <section
                className="relative h-screen flex items-center justify-center bg-center"
                style={{
                    backgroundImage:
                        "url('https://imgur.com/43vYaNA.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="absolute inset-0 bg-black/60" />


                <div className="flex justify-between w-full">
                    <img
                        src="https://imgur.com/QBbOJQK.png"
                        alt="Frase pet merece"
                        width="300px"
                        className="ml-10"
                    />
                    <div className="flex justify-center items-center">
                        <img
                            src="https://imgur.com/OiHVAke.png"
                            alt="Logo pet ride"
                            width="200px"
                            className="ml-90"
                        />
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://imgur.com/X2cJzgB.png"
                            alt="Frase aonde for"
                            width="300px"
                            className="mr-30"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;