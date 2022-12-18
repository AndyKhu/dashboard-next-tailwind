import Header from "@components/Header";
import Sidebar from "@components/sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from '@state/hook'
import { setActiveMenu } from '@state/initialSlice'
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react"
const Admin = ({ children }: { children: ReactNode }) => {
    const activeMenu = useAppSelector(state => state.init.activeMenu)
    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(()=>{
        const pathA = router.pathname.split("/")
        if(router.pathname == "/")
        dispatch(setActiveMenu({value:"dashboard",child:""}))
        else if(pathA.length == 3)
        dispatch(setActiveMenu({value:pathA[2],child:""}))
        else if(pathA.length == 4)
        dispatch(setActiveMenu({value:pathA[2],child:pathA[3]}))
      },[]);
    if(activeMenu){
        return (
            <div className="flex w-screen h-screen overflow-hidden text-gray-700">
                <Sidebar></Sidebar>
                <div className="flex flex-col w-full h-full">
                    <Header title={activeMenu.child == ""?activeMenu.value:activeMenu.child}></Header>
                    <div className="h-full bg-slate-200 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        );
    }else{
        return (<div>Loading..</div>)
    }
}

export default Admin;