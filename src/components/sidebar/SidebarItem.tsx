import IconComponent from "@components/IconComponent"

interface Props {
  title: string
  icon: string
  active?: boolean | null
  ext: boolean
}

const SidebarItem = (props: Props) => {
  const { icon, title, active = false, ext } = props
  return (
    <li className={"group text-gray-500 hover:text-white focus-within:text-white " + (ext ? " px-6 overflow-hidden" : "") + (active ? " m-active" : "")}>
      <div className={"rounded menu-item flex items-center hover:bg-gray-800 focus:outline-none relative "+(ext? "":" justify-center")}>
        <div className={ext?" pl-2 pointer-events-none":"py-2"}>
          <IconComponent name={icon} className="w-5 h-5 stroke-current" />
        </div>
        { ext?
          <div className="py-2 pl-3 pr-4 text-xs">
            {title[0].toUpperCase() + 
            title.slice(1)}
          </div>:
          <span className="group-hover:visible rounded invisible p-2 bg-gray-900 text-gray-300 text-xs absolute left-0 ml-16">
            {title[0].toUpperCase() + title.slice(1)}
          </span>
        }
      </div>
    </li>
  )
}

export default SidebarItem
