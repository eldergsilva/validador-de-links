import chalk from "chalk";

function extraiLinks(arrLinks){
   return arrLinks.map((objetolink)=>{
        return Object.values(objetolink).join();
    })
}

 async function checaStatus(listaURLs){
    const arrayStatus = await Promise.all(        
              listaURLs.map(async(url)=>{
                try {
                    const response = await fetch(url);
                    return response.status;        
                    
                } catch (erro) {
                  return manejaErros(erro);  
                }         
     })
    )   
    return arrayStatus  ;
 }

function manejaErros(erro){
     if (erro.cause.code ='ENOTFOUND') {
        return 'link não encontrado'        
     }else{
        return ' ocorreu algum erro'
     }

}

export default async function listaListaValidada(listaDeLinks){
    const links= extraiLinks(listaDeLinks);
    const status = await checaStatus(links); 

    return listaDeLinks.map((objeto,indice)=>({          
       ...objeto,
       status:status[indice]
    }))
    
}

 
// [Teste de retorno 400](https://httpstat.us/404).
// 