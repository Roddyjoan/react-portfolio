import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();


    useEffect(() =>{
        const handler = (event) => {
            if (!divEl.current){
                return;
            }

            
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);


    const handleOptionClick = (option) => {
        //close dropdown
        setIsOpen(false);
        // what option did the user click on?? 
        onChange(option);

    };

    const renderedOptions = options.map((option) => {

        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => { handleOptionClick(option) }} key={option.id}>{option.label}</div>
    })

    const handleClick = () => {
        setIsOpen(!isOpen);
    }




    return <>
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}>
                {value?.label || 'Select...'} <GoChevronDown />
            </Panel>

            {isOpen &&
                (<Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>)}

        </div></>
}

export default Dropdown;