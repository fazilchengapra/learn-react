const { useEffect, useState } = require("react")
const constant = require("./constant")

const useRestoInfo = ({id}) => {
    console.log(id);
    
    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() => {
        const res =await fetch(constant.RESTRO_API+id)
        const resToJson =await res.json()
        setData(resToJson)
    }
    return data;
}

export default useRestoInfo;