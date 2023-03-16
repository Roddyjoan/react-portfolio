import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigate(){
    return useContext(NavigationContext);
}

export default useNavigate;