import InputComponent from "@components/form/InputComponent";
import TextareaC from "@components/form/TextareaC";
import Admin from "@layout/Admin";
const Input = () => {
    return (
        <div className="p-2 flex flex-wrap">
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Basic usage</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">Basic usage example.</p>
                    <InputComponent label="username"/>
                    <InputComponent type="password" label="password"/>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Three Type of Input</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">There area three type of input (Default Input, Outline Input, OldStyle Input)</p>
                    <InputComponent label="default"/>
                    <InputComponent label="outline" outline/>
                    <InputComponent label="oldstyle" oldStyle/>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Textarea</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">For multi-line user input cases an input whose type prop has the value of textarea can be used.</p>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 p-2">
                        <TextareaC label="Textarea" rows={5}/>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                        <TextareaC label="Textarea-outline" rows={5} outline/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Search</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">Example of Input with Icon</p>
                    <InputComponent label="search" rightIcon="FiSearch"/>
                    <InputComponent label="search" leftIcon="FiSearch" outline/>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Error Message</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">Example of Input with error message</p>
                    <InputComponent label="username" defaultValue={"masteruser"} errormsg="username invalid" />
                    <InputComponent label="username" defaultValue={"masteruser"} errormsg="username invalid" outline/>
                    <InputComponent label="username" defaultValue={"masteruser"} errormsg="username invalid" oldStyle/>
                </div>
            </div>
        </div>
    );
}

export default Input;
Input.layout = Admin