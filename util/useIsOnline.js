const { useState, useEffect } = require("react")

const useIsOnline = () => {
    const [status, setStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", () => {
            setStatus(false)
        })

        window.addEventListener("online", () => {
            setStatus(true)
        })
        
    },[])
    
    return status
}

export default useIsOnline;