function Home() {
    return (
        <>
            <div
                className="flex-grow justify-center"
                style={{ backgroundColor: '#00557f' }}>
                <div style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img
                                src="https://imgur.com/OiHVAke.png"
                                alt="Logo pet ride"
                                width="280px"
                            />
                            <h3>Seu pet merece estar ao seu lado <br />aonde você for </h3>
                        </div>
                        <div style={{
                            width: "50%",
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