import IconComponent from "@components/IconComponent"
import { useId } from "react"

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {outline?:boolean,bcolor?:string,color?:string,className?:string,label?:string,disabled?:boolean}

function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['bcolor']
    delete result['color']
    delete result['outline']
    return result
}
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const Checkbox = (props:Props) => {
    const atb = splitProps(props);
    const {color,label, className,disabled,type,outline,bcolor} = props
    // const size = getSize(small,large)
    const id = useId();
    return (
        <div className="flex mb-4 items-center">
            <div className="inline-flex mr-2 relative">
                {outline?
                <>
                    <input {...atb} id={`${id}-${label}`}  className={`h-4 w-4 cursor-pointer appearance-none peer ${className}`} type="checkbox" />
                    <label htmlFor={`${id}-${label}`} className={`${type==="radio"?'rounded-full':'rounded'} border-2 ${disabled?"border-gray-300":bcolor?bcolor:'border-gray-400'} cursor-pointer absolute h-full w-full`}></label>
                    <label htmlFor={`${id}-${label}`} className={`absolute justify-center items-center top-0 bottom-0 left-0 right-0 cursor-pointer hidden peer-checked:inline-flex`}>
                        <IconComponent className={`${disabled?"text-gray-300":bcolor?bcolor:'text-gray-400'}`} size={type === "radio"?6:10} name={type==="radio"?"FaCircle":"FaCheck"} type="fa"/>
                    </label>
                </>:
                <>
                    <input {...atb} id={`${id}-${label}`}  className={`h-4 w-4 cursor-pointer appearance-none border-2 ${disabled?"border-gray-300":"border-gray-400"} rounded checked:border-0 peer group/item ${className}`} type="checkbox" />
                    <span className={`${type==="radio"?'rounded-full':'rounded'} absolute h-full w-full ${color?disabled?"bg-gray-200":color:'bg-primary-1'} hidden peer-checked:inline-flex`}></span>
                    <span className={`${type==="radio"?'rounded-full':'rounded'} peer-checked:animate-[ping_1s_ease-in-out] absolute h-full w-full opacity-75 ${color?disabled?"bg-gray-200":color:'bg-primary-1'} hidden peer-checked:inline-flex`}></span>
                    <label htmlFor={`${id}-${label}`} className={`absolute transition-all justify-center items-center ${type==="radio"?'rounded-full':'rounded'} top-0 bottom-0 left-0 right-0 cursor-pointer  hidden peer-checked:inline-flex`}>
                        <IconComponent className={`${disabled?"text-gray-400":"text-white"} checked`} size={type === "radio"?8:10} name={type==="radio"?"FaCircle":"FaCheck"} type="fa"/>
                    </label>
                </>
                }
            </div>
            <label className={`text-sm ${disabled?"text-gray-400 ":"text-gray-700"} mb-1`}>{capitalizeFirstLetter(label?label:"")}</label>
        </div>
    );
}

export default Checkbox;