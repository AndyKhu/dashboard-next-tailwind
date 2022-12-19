import { useState } from "react";
import IconComponent from "@components/IconComponent";
import { useAppDispatch, useAppSelector } from '@state/hook'
import { setActiveMenu } from '@state/initialSlice'
import SidebarItemGroup from "./SidebarItemGroup";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const items = 
    [ {
        icon: 'FiLayout',
        title: 'dashboard'
      },
      {
        icon: 'FiArchive',
        title: 'component',
        child: [
          {
            title: 'input'
          },
          {
            title: 'button'
          },
          {
            title: 'checkbox'
          },
          {
            title: 'table'
          },
          {
            title: 'form'
          }
        ]
      }]
    const activeMenu = useAppSelector(state => state.init.activeMenu)
    const [ext, setExt] = useState(true);
    const [exts, setExts] = useState(false);
    const handlerF = () => {
        if (!ext) {
          setExt(true)
          setExts(true)
        }
      }
      const handlerB = () => {
        if (exts) {
          setExt(false)
          setExts(false)
        }
      }
      const menus = items?.map(item => {
        const urlpath = item.title=="dashboard"?"/":"/"+item.title.replace(" ","")
        if(item.child)  
          return <SidebarItemGroup key={item.title} ext={ext} icon={item.icon} title={item.title} child={item.child}  activemenu={activeMenu}/>
        else
          return <Link key={item.title} href={urlpath} onClick={()=>{dispatch(setActiveMenu({value: item.title, child: ''}))}} ><SidebarItem ext={ext} icon={item.icon} title={item.title} active={activeMenu.value==item.title} /></Link>
      })
    return (
        <div className={"h-screen bg-gray-900 transition-all duration-300 ease-in-out " + (ext ? "w-64" : "w-14")}>
      <div className={ext ? "px-6 pt-3" : "p-3"}>
        <div className="flex items-center justify-between relative">
          <a
            href="#"
            className="bg-blue-600 p-1.5 rounded flex items-center justify-center"
          >
            <IconComponent name="FiBox" className="w-5 h-5 stroke-current text-white" />
          </a>
          {ext?<h1 className="text-white font-bold">Brand</h1>:<></>}
          <button onClick={() => { setExt(!ext) }} className={"flex items-center justify-center p-0.5 rounded bg-gray-800 " + (ext ? "" : "absolute -right-6")}>
            {ext ? <IconComponent name="FiChevronsLeft" className="w-4 h-4 text-gray-300 stroke-current" /> : <IconComponent name="FiChevronsRight" className="w-4 h-4 text-gray-300 stroke-current" />}
          </button>
        </div>
      </div>
      {/* <div className={ext ? "px-6 pt-4" : "px-3 pb-3"}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <IconComponent name="FiSearch" className="w-4 h-4 stroke-current text-gray-500" />
          </div>
          <input
            type="text"
            onFocus={handlerF}
            onBlur={handlerB}
            className={(ext ? "pl-10 pr-4" : "") + " w-full rounded py-2.5 text-xs font-light bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"}
            placeholder={ext ? "search" : ""}
          />
        </div>
      </div> */}
      <div className={ext ? "px-6 pt-4" : "px-1"}>
        <hr className="border-gray-700" />
      </div>
      <div className="pt-4">
        <ul className="flex flex-col space-y-2">
            {menus}
            <Link href="" onClick={()=>{}} ><SidebarItem ext={ext} icon="FiLogOut" title="Sign Out" active={false} /></Link>
        </ul>
      </div>
    </div>
    );
}

export default Sidebar;