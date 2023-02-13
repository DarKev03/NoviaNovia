
        const boton = document.querySelector("#boton");
        const gatobeso = document.querySelector("#gatobeso");
        const texto = document.querySelector("#texto");
        let estadoImagen = false;

        function cambiar() {
            gatobeso.src = "https://media.tenor.com/QaPEi-tcFXQAAAAd/gato-besando-a-la-camara.gif";
            gatobeso.style.width="300px";   
            gatobeso.style.height="200px";     
            }
        boton.addEventListener("click",cambiar);

        setInterval(function Mensaje() {
            const fecha = new Date();
            const minutos = fecha.getMinutes();

            if (minutos %10 === 0) {
                texto.innerHTML= "Te quiero siempre bb";
            } else {
                
                texto.innerHTML="Cargando mensaje...";
            }
        }, 1000);