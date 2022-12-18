import Card from "./Card";
import IconComponent from "./IconComponent";

const CardDashboard = ({title,value,icon,iconfa,iconC}:{title:string,value:string,icon?:string,iconfa?:string,iconC?:string}) => {
    return (
        <div className="p-2">
            <Card className="group/item cursor-pointer">
                <Card.main className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='mb-3 text-gray-600 font-medium'>{title}</span>
                    <span className='text-lg font-medium text-gray-800'>{value}</span>
                </div>
                <div className={`rounded-full ${iconC?iconC:"primary"} w-12 h-12 flex items-center justify-center group-hover/item:animate-bounce`}>
                    <IconComponent size={20} name={icon?icon:iconfa?iconfa:""} type={iconfa?"fa":""}/>
                </div>
                </Card.main>
            </Card>
        </div>
    );
}

export default CardDashboard;