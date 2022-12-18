import { useState } from "react"
import IconComponent from "@components/IconComponent"
import { useAppDispatch } from '@state/hook'
import { setActiveMenu } from '@state/initialSlice'
import Link from 'next/link'

interface Props {
  title: string
  icon: string
  ext: boolean
  child: {
    title: string
  }[]
  activemenu: {
    value:string,
    child:string
  }
}

const SidebarItemGroup = (props: Props) => {
  const [drop, setdrop] = useState(false)
  const dispatch = useAppDispatch()
  const { icon, title, ext, child, activemenu } = props
  const active = activemenu.value == title.toLocaleLowerCase()
  const handlerDrop = () => {
    if (ext) setdrop(!drop)
  }
  const childs = child.map((item) => {
    if (ext)
      return (
        <Link key={item.title} href={"/"+title+"/"+item.title} onClick={()=>{dispatch(setActiveMenu({value:title,child:item.title}))}}>
          <li>
            <span className={(activemenu.child==item.title?"menu-group-item":"")+" inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white "}>
              {item.title[0].toUpperCase() + 
              item.title.slice(1)}
            </span>
          </li>
        </Link>
      )
    else
      return (
        <Link key={item.title} href={"/"+title+"/"+item.title} onClick={()=>{dispatch(setActiveMenu({value:title,child:item.title}))}}>
          <div
            key={item.title}
            className={(activemenu.child==item.title?"menu-group-item":"")+" px-4 py-2 rounded hover:bg-gray-800 hover:text-gray-100 "}
          >
            {item.title[0].toUpperCase() + 
              item.title.slice(1)}
          </div>
        </Link>
      )
  })
  return (
    <li
      onClick={handlerDrop}
      className={
        "group text-gray-500 hover:text-white focus-within:text-white " +
        (ext ? " overflow-hidden" : "") +
        (active ? " m-active-group" : "")
      }
    >
      <div className={"header "+ (ext ? " px-6": "")}>
        <div
          className={
            "header-item rounded menu-item flex items-center hover:bg-gray-800 focus:outline-none relative " +
            (ext ? "" : " justify-center")
          }
        >
          <div className={ext ? " pl-2 pointer-events-none" : "py-2"}>
            <IconComponent name={icon} className="w-5 h-5 stroke-current" />
          </div>
          {ext ? (
            <>
              <div className="py-2 pl-3 pr-4 text-xs">{title[0].toUpperCase() + 
              title.slice(1)}</div>
              <IconComponent name="FiChevronRight" className={"w-5 h-5 stroke-current ml-auto transform transition-transform "+(drop?"rotate-90":"")} />
            </>
          ) : (
            <div className="z-10 group-hover:visible invisible pl-2 absolute top-0 left-14">
              <div className="rounded p-4 bg-gray-900 text-gray-400 text-xs ">
                {childs}
              </div>
            </div>
          )}
        </div>
      </div>
      {ext ? (
        <div className={ext? "px-6":""}>
          <div
            className={"pt-2 pl-4"}
          >
            <ul className={"flex flex-col pl-2 text-gray-500 border-l border-gray-700 max-h-0 overflow-hidden transition-all duration-500 ease-in-out "+ (drop ? "max-h-64" : "")}>
              {childs}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </li>
  )
}

export default SidebarItemGroup
