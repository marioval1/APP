const start = () => {
    
    while(true){
        let opcao = "Sair"
        switch(opcao) {
            case "Cadastrar":
                console.log("Vamos Cadastrar")
                break
            case "Listar":
                console.log("Vaos Listar")
                break
            case "Sair":
                console.log("Vamos Sair")
                return  
        }
    }
}

start()