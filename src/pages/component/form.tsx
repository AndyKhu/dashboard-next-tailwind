import ButtonComponent from "@components/form/ButtonComponent";
import InputComponent from "@components/form/InputComponent";
import Admin from "@layout/Admin"
import { useState } from "react";
const Form = () => {
    const [name,setName] = useState("");
    return (
        <div className="flex justify-center flex-wrap p-4 gap-4">
            <div className="bg-white min-w-full rounded p-4 shadow-md">
                <div className="flex flex-col mb-4">
                    <span className="font-bold text-gray-800">Default Form</span>
                    <span className="text-gray-700">It is Very Easy to Customize and it uses in your website apllication.</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-4">
                        <InputComponent label="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <InputComponent label="Email"/>
                    </div>
                    <div className="flex gap-4">
                        <InputComponent label="Password" type="password"/>
                    </div>
                    <div className="flex gap-4">
                        <ButtonComponent color="danger" label={"Cancel"}/>
                        <ButtonComponent color="primary" label={"Submit"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
Form.layout = Admin