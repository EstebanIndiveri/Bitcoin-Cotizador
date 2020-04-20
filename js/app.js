const ui=new Interfaz();
const cotizador=new API('7bcbaa7a9d17ca50749e7bd03a5916a57c5908fdf94842b129d943c4683b4e33');

//console.log(Api.obtenerMonedasAPI());
const formulario=document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const monedaSelect=document.querySelector('#moneda');
    const monedaSeleccionada=monedaSelect.options[monedaSelect.selectedIndex].value;

    const criptoMonedaSelect=document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada=criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    console.log(criptoMonedaSeleccionada);

    if(monedaSeleccionada==='' ||monedaSeleccionada===null || criptoMonedaSeleccionada===''|| criptoMonedaSeleccionada===null){
        ui.monstrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
        .then(data=>{
            //console.log(data.resultado[criptoMonedaSeleccionada]);
            ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
        })
    }
})