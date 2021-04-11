import {useState,useEffect} from 'react'
const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError]=useState(null)
    useEffect(() => {
      const abortCont = new AbortController()


        fetch(url,{signal:abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('No se pudo encontrar el recurso solicitado')
            }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data)
          setError(null)
        })
        .catch(error=>{
            if(error.message==='AbortError'){
                console.log('done');
            }else{
            setError(error.message)
            setIsPending(false)
            }
        })
      
    }, [url])

    
return {data,error,isPending}  
}

export default useFetch