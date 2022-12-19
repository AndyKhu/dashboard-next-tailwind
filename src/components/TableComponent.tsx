interface Props{
    header:string[],
    data: {}[],
    bordered?:boolean,
    ishoverable?:boolean,
    zebra?:boolean,
    color?:{
        header?:string,
        hover?:string,
        border?:string,
        zebra1?:string,
        zebra2?:string
    }
}
const TableComponent = ({header,data,bordered,ishoverable,zebra,color}:Props) => {
    const colors = {
        header: color?.header || 'bg-gray-300',
        hover: color?.hover || 'hover:bg-gray-100',
        border: color?.border || 'border-gray-100',
        zebra1: color?.zebra1 || 'odd:bg-white',
        zebra2: color?.zebra2 || 'even:bg-gray-100'
    }
    const th = header.map((item,index) => {
        return <th className={`p-2 font-medium ${bordered?`border-l ${color?.border}`:""}`} key={`${index}-header`}>{item.toUpperCase()}</th>
    })
    const td = data.map((item,index)=>{
        return (
        <tr className={`border-b ${colors.border} ${bordered?"last:border-b-0":""} ${zebra?`${colors.zebra1} ${colors.zebra2}`:""} ${ishoverable?`${colors.hover} cursor-pointer`:""}`} key={`${index}-rowdata`}>
            <td className="p-2">{index+1}</td>
           {
            Object.keys(item).map((ch,index) => {
                return <td className={`p-2 ${bordered?`border-l ${color?.border}`:""}`} key={`${index}-data`}>{item[ch as keyof typeof item]}</td>
            })
           }
        </tr>
        )
    })
    return (
        <div className={`${bordered?`border ${ishoverable||zebra?"":"rounded"} ${color?.border}`:""}`}>
            <table className="w-full h-full text-left text-sm">
                <thead>
                    <tr className={`border-b ${colors.border} ${ishoverable||zebra?colors.header:""}`}>
                        <th className="p-2 font-medium">#</th>
                        {th}
                    </tr>
                </thead>
                <tbody>
                    {td}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;