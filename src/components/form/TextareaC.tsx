import IconComponent from "@components/IconComponent"
import { useId, useState } from "react"

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {label?:string,className?:string,leftIcon?:string,rightIcon?:string,outline?:boolean,oldStyle?:boolean}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['leftIcon']
    delete result['rightIcon']
    delete result['outline']
    delete result['oldStyle']
    return result
}
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const TextareaC = (props:Props) => {
    const atb = splitProps(props);
    const id = useId();
    const {className,label,outline,oldStyle,leftIcon,rightIcon} = props;
    const [focus,setFocus] = useState(false)
    const labelClass = "cursor-text h-5 left-0 text-xs text-blue-700 font-medium right-auto absolute transition-all peer-focus:text-xs peer-focus:text-blue-700 peer-focus:font-medium peer-placeholder-shown:font-normal peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 "
    return (
        <div className={"items-start flex flex-auto tracking-normal max-w-full text-left ".concat(className?className:"")}>
            <div className="flex flex-col h-auto flex-grow flex-wrap min-w-0 w-full">
                <div onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} onClick={()=>{if(!focus)document.getElementById(id.concat("-").concat(label?label:""))?.focus()}} className={"px-3 mb-4 flex items-stretch cursor-text rounded transition-colors shadow-sm ".concat(focus?outline?"border-2 border-blue-700":oldStyle?"border border-blue-500 shadow shadow-blue-300":"border-b-2 border-b-blue-700 ":outline?"bg-white border border-gray-300 ":"bg-gray-100 hover:bg-gray-200 ")}>
                    {leftIcon?<div className={"mt-4 pr-1 self-start inline-flex leading-none ".concat(focus?"text-blue-700":"text-gray-600")}>
                        <div className="items-center inline-flex h-6 flex-2 justify-center min-w-[1.5rem] w-6">
                            <IconComponent name={leftIcon}/>
                        </div>
                    </div>:<></>}
                    <div className="flex flex-auto relative py-4">
                        <textarea {...atb} id={id.concat("-").concat(label?label:"")} placeholder={oldStyle?capitalizeFirstLetter(label?label:""):" "} className={"bg-transparent flex-auto leading-5 max-w-full min-w-0 w-full text-gray-600 focus:outline-none peer ".concat(outline||oldStyle?"":"mt-4")}/>
                        {oldStyle?
                        <></>:
                         <label htmlFor={id.concat("-").concat(label?label:"")} 
                         className={labelClass.concat(outline?"-top-2 bg-white px-1 peer-focus:-top-2 peer-placeholder-shown:top-4 ":"top-2 peer-focus:top-2 peer-placeholder-shown:top-4 ").concat(outline?leftIcon?"-left-7 peer-focus:-left-7 peer-placeholder-shown:left-0":"":"")}>
                             {label?capitalizeFirstLetter(label):""}
                        </label>}
                    </div>
                    {rightIcon?
                    <div className={"mt-4 pl-1 self-start inline-flex leading-none ".concat(focus?"text-blue-700":"text-gray-600")}>
                        <div className="items-center inline-flex h-6 flex-2 justify-center min-w-[1.5rem] w-6">
                            <IconComponent name="FiSearch"/>
                        </div>
                    </div>:<></>}
                </div>
            </div>
        </div>
    );
}

export default TextareaC;