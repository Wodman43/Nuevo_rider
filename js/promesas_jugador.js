const  midiv = document.getElementById('midiv');
const mibtn = document.getElementById('mibtn');

const settext = data=>{
midiv.textContent = data;
}
const getdata = () =>{
    return new Promise((resuleve,rechaza)=>{
    settext('¿Puedo jugar?')
    setTimeout(()=>{
        resuleve(true);},2000) 
    })
}

        const showdata = () =>{
            return new Promise((resuleve1,rechaza1)=>{
            settext('Esperando Autorizacion');
            setTimeout(()=>{
                resuleve1({jugador:'Alvaro'});
            },2000)
        })
        }

        mibtn.addEventListener('click',()=>{
            getdata().then(permitido=>{
                if(permitido){
                   return showdata();
                    }
                
        }).then(user=>{
            settext(user.jugador);
        });

        });
       

