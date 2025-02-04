function Home() {
    return (
        <>
            <div style={{background: "#00557f"}}className="flex flex-grow bg-#00557f justify-center">
                <div className='flex w-screen justify-center text-white'>
                    <div className="flex flex-row gap-4 items-center py-4 w-screen justify-center">
                        <div className="flex flex-col items-center w-70">
                            <img
                                src="https://imgur.com/OiHVAke.png"
                                alt="Logo pet ride"
                                width="280px"
                            />
                            <h3>Seu pet merece estar ao seu lado <br />aonde você for </h3>
                        </div>
                        <div style={{
                            width: "50vw",
                            display: "flex",
                            alignItems: "center" // Alinhar verticalmente a imagem maior
                        }}>
                            <img
                                src="https://imgur.com/HVRad2C.png"
                                alt="Imagem cachorro + motorista"
                                width="600px"
                                style={{ borderRadius: '30px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home