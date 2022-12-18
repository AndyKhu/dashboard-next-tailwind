
const Header = ({title}:{title:string}) => {
    return (
        <div className="h-[58px] p-4 border-b border-gray-300">
            <h1 className="font-bold capitalize text-blue-800">
                {title}
            </h1>
        </div>
    );
}

export default Header;