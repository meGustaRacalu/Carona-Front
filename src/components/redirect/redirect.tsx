import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function Redirect(){

    const navigate = useNavigate();
    const { link } = useParams<string>()

    useEffect(()=> {
        if(link){
            console.log(link)
            navigate("/" + link)
        }
    })

    return(
        <>
        
        </>
    )
    
}

export default Redirect;