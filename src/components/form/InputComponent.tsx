import IconComponent from "@components/IconComponent"
import { useId, useState } from "react"

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label?:string,className?:string,leftIcon?:string,rightIcon?:string,outline?:boolean,oldStyle?:boolean,errormsg?:string}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['leftIcon']
    delete result['rightIcon']
    delete result['outline']
    delete result['oldStyle']
    delete result['errormsg']
    return result
}
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const InputComponent = (props:Props) => {
    const atb = splitProps(props);
    const id = useId();
    const {className,label,outline,oldStyle,leftIcon,rightIcon,errormsg} = props;
    const [focus,setFocus] = useState(false)
    const labelClass = " cursor-text h-5 left-0 text-xs font-medium right-auto absolute transition-all peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:font-normal peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 "
    const caretColor = {
        text: errormsg?"text-rose-500":"text-blue-700",
        border: errormsg?"border-rose-500":"border-blue-700",
        oldborder: errormsg?"border-rose-500 shadow-red-300":"border-blue-500 shadow-blue-300"
    }
    return (
        <div className={"items-start flex flex-auto tracking-normal max-w-full text-left mb-4 ".concat(className?className:"")}>
            <div className="flex flex-col h-auto flex-grow flex-wrap min-w-0 w-full">
                <div onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} onClick={()=>{if(!focus)document.getElementById(id.concat("-").concat(label?label:""))?.focus()}} className={(errormsg?"!border !border-rose-500":"")+" px-3 flex items-stretch cursor-text rounded transition-colors shadow-sm ".concat(focus?outline?"border-2 ".concat(caretColor.border):oldStyle?"border shadow ".concat(caretColor.oldborder):"border-b-2 bg-gray-100 hover:bg-gray-200 ".concat(caretColor.border):outline?"bg-white border border-gray-300 ":"bg-gray-100 hover:bg-gray-200 ")}>
                    {leftIcon?<div className={"mt-4 pr-1 self-start inline-flex leading-none ".concat(focus?caretColor.text:"text-gray-600")}>
                        <div className="items-center inline-flex h-6 flex-2 justify-center min-w-[1.5rem] w-6">
                            <IconComponent name={leftIcon}/>
                        </div>
                    </div>:<></>}
                    <div className="flex flex-auto relative">
                        <input {...atb} id={id.concat("-").concat(label?label:"")} placeholder={oldStyle?capitalizeFirstLetter(label?label:""):" "} className={"bg-transparent flex-auto leading-5 py-2 max-w-full min-w-0 w-full text-gray-600 focus:outline-none peer ".concat(outline||oldStyle?"py-4":"mt-4")}/>
                        {oldStyle?
                        <></>:
                         <label htmlFor={id.concat("-").concat(label?label:"")} 
                         className={"peer-focus:".concat(caretColor.text).concat(" ").concat(caretColor.text.concat(" ").concat(labelClass.concat(outline?"-top-2 bg-white px-1 peer-focus:-top-2 peer-placeholder-shown:top-4 ":"top-2 peer-focus:top-2 peer-placeholder-shown:top-4 ").concat(outline?leftIcon?"-left-7 peer-focus:-left-7 peer-placeholder-shown:left-0":"":"")))}>
                             {label?capitalizeFirstLetter(label):""}
                        </label>}
                    </div>
                    {rightIcon?
                    <div className={"mt-4 pl-1 self-start inline-flex leading-none ".concat(focus?caretColor.text:"text-gray-600")}>
                        <div className="items-center inline-flex h-6 flex-2 justify-center min-w-[1.5rem] w-6">
                            <IconComponent name="FiSearch"/>
                        </div>
                    </div>:<></>}
                </div>
                {errormsg?
                <div className="px-3 py-1 text-rose-500 font-medium text-xs flex items-center">
                    <IconComponent name="FaExclamationCircle" className="mr-1" type="fa"/>
                    {errormsg}
                </div>
                :<></>}
            </div>
        </div>
    );
}

export default InputComponent;