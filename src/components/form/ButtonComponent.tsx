import IconComponent from "@components/IconComponent"

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {iconsize?:number,icon?:string,color?:string,className?:string,label?:string,small?:boolean,large?:boolean}

function splitProps(props:Props){
    const result = {...props}
    delete result['className']
    delete result['color']
    delete result['label']
    delete result['small']
    delete result['large']
    delete result['icon']
    delete result['iconsize']
    return result
}
function getSize(small?:boolean,large?:boolean){
    if(small)
        return 'h-7 px-2'
    else if(large)
        return 'h-11 px-6'
    return 'h-9 px-4'
}
const ButtonComponent = (props: Props) => {
    const atb = splitProps(props);
    const {color,label, className,small,large,icon,iconsize,disabled} = props

    const size = icon?'':getSize(small,large)
    return (
        <button className={(disabled?"disabled ":"")+size +" rounded text-sm border shadow font-roboto capitalize font-medium transition-all ".concat((color?color:"bg-white border-gray-300 text-gray-600 hover:text-primary-1 hover:border-primary-1 hover:shadow-primary-2")).concat(" ".concat(className?className:""))} {...atb}>
            {icon?
            <IconComponent className="m-1" size={iconsize?iconsize:16} name={icon}/>
            :label}
        </button>
    );
}

export default ButtonComponent;