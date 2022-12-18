import * as icons from "react-icons/fi"
import * as fa from "react-icons/fa"

const selecticon = (value: string): value is keyof typeof icons => {
  return value in icons
}
const selectfa = (value: string): value is keyof typeof fa => {
  return value in fa
}
const IconComponent = (props: {name:string,className?:string,type?:string,size?:number}) => {
  if(props.type){
    if(props.type === "fa"){
      if (selectfa(props.name)) {
        const Icon = fa[props.name]
        return <Icon size={props.size} className={props.className}></Icon>
      }
      return <></>
    }else{
      if (selecticon(props.name)) {
        const Icon = icons[props.name]
        return <Icon size={props.size} className={props.className}></Icon>
      }
      return <></>
    }
  }else{
    if (selecticon(props.name)) {
      const Icon = icons[props.name]
      return <Icon size={props.size} className={props.className}></Icon>
    }
    return <></>
  }
}

export default IconComponent
