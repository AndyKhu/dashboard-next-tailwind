import IconComponent from "@components/IconComponent"

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {label?:string,className?:string,icon?:string,withlabel?:boolean,labelinside?:boolean}
function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['label']
    delete result['icon']
    delete result['withlabel']
    delete result['labelinside']
    return result
}
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function setInputType(withlabel?:boolean,labelinside?:boolean){
    if(withlabel)
        return 2
    else if (labelinside)
        return 3
    return 1
}
const InputC = (props:Props) => {
    const atb = splitProps(props);
    const {className,label,withlabel,labelinside,icon} = props;
    const inputType = setInputType(withlabel,labelinside);
    
    return (
        <div className={withlabel?"":"bg-gray-100 rounded shadow-sm"}>
            <div className="relative mb-4">
                {inputType === 1 ?
                (<>
                    <input {...atb} placeholder={label} className={"px-2 py-2 w-full text-sm bg-transparent text-gray-800 focus:outline-none focus:border-blue-500 border focus:shadow rounded focus:shadow-blue-300"}/>
                    {icon?<IconComponent className="absolute right-2 top-3 text-gray-400" name={icon}/>:<></>}
                </>): inputType === 2?
                (<>
                    <label className="block text-sm mb-2 font-medium text-gray-600">{label?capitalizeFirstLetter(label):""}</label>
                    <input {...atb} className={"px-2 py-2 w-full bg-gray-100 text-sm text-gray-800 focus:outline-none focus:border-blue-500 border focus:shadow rounded focus:shadow-blue-300"}/>
                    {icon?<IconComponent className="absolute right-2 top-3 text-gray-400" name={icon}/>:<></>}
                </>):
                (<>
                    <input {...atb} id={label} placeholder=" " className={"border-b px-2 mr-4 pb-2 pt-5 w-full text-sm text-gray-800 bg-transparent focus:outline-none focus:border-blue-700 focus:border-b-2 transition-colors peer ".concat(className?className:"")}/>
                    <label htmlFor={label} className="absolute peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-700 font-medium top-1 left-2 text-xs text-blue-700 cursor-text peer-focus:text-blue-700 peer-focus:text-xs peer-focus:font-medium peer-focus:top-1 transition-all">{label?capitalizeFirstLetter(label):""}</label>
                    {icon?<IconComponent className="absolute right-2 top-5 text-gray-400" name={icon}/>:<></>}
                </>)}
            </div>
        </div>
    );
}

export default InputC;