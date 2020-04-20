class Interfaz{
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }
    construirSelect(){
    const cotizador=new API('7bcbaa7a9d17ca50749e7bd03a5916a57c5908fdf94842b129d943c4683b4e33');
    cotizador.obtenerMonedasAPI()
    .then(monedas=>{
        const select=document.querySelector('#criptomoneda');
        for(const [key,value] of Object.entries(monedas.monedas.Data) ){
            
            const opcion=document.createElement('option');
            opcion.value=value.Symbol;
            opcion.appendChild(document.createTextNode(value.CoinName));
            select.appendChild(opcion);
        }
    })

    }
    monstrarMensaje(mensaje,clases){
        const div=document.createElement('div');
        div.className=clases;
        div.appendChild(document.createTextNode(mensaje));

        const divMensaje=document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 1500);
    }
    mostrarResultado(resultado,moneda,criptomoneda){
        
        const resultadoAnterior=document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }
        
       const datosMoneda= resultado[criptomoneda][moneda];
        console.log(datosMoneda);
        let precio=datosMoneda.PRICE.toFixed(2);
        let variacion=datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizado=new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');
        

        let templateHTML=`
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio de: ${datosMoneda.FROMSYMBOL}a moneda${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                <p>Variación úlimo día: % ${variacion}</p>
                <p>Última actualización: ${actualizado}</p>

            </div>
        </div>
        `;
        this.mostrarOcultarSpinner('block');
        setTimeout(() => {
        document.querySelector('#resultado').innerHTML=templateHTML;
            this.mostrarOcultarSpinner('none');
        }, 1500);
    }
    mostrarOcultarSpinner(vista){
        const spinner=document.querySelector('.contenido-spinner');
        spinner.style.display=vista;
    }
    
}