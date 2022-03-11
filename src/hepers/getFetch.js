const productos = [
    {id:1,producto:'mancuerna', stock:5},
    {id:2,producto:'barra', stock:7}
]

export const getFetch = new Promise((res)=>{
    setTimeout(() => {
        res(productos)
    }, 2000);
})