
import classNames from "classnames";
import useNavigate from "../hooks/use-navigate";


function Link({to, children, className, activeClassName}) {
    const { navigate, currentPath } = useNavigate();

    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName);
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick} > {children} </a>
}

export default Link;