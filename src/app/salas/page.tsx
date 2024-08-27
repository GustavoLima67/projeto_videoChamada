import "@/styles/stylesSalas.css"

const Salas = () => {
    return (
        <div className="container-salas  h-screen w-screen justify-center items-center flex ">
            <div className="flex" >
                <div className=" bg-blue-500 flex p-3 text-3xl rounded-md m-10">
                    <h1 className="text-card-users">Usuários Conectados</h1>

                </div>

                <div className=" bg-blue-500 flex p-3 text-3xl rounded-md m-10">
                    <h1 className="text-card-salas">Salas disponíveis</h1>

                </div>
            </div>
            
          

        </div>
        
        

    )
} 

export default Salas;