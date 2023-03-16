import useNavigate from "../hooks/use-navigate";


function Route({path, children}) {
    const { currentPath } = useNavigate();

    if (path === currentPath) {
        return children;
    }


    return null;

}

export default Route;