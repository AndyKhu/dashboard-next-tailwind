import ButtonComponent from "@components/form/ButtonComponent";
import Admin from "@layout/Admin";
const Button = () => {
    return (
        <div className="p-2 flex flex-wrap">
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Basic usage</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">Basic usage example.</p>
                    <ButtonComponent className="m-2" label="primary" color="primary"/>
                    <ButtonComponent className="m-2" label="success" color="success"/>
                    <ButtonComponent className="m-2" label="warning" color="warning"/>
                    <ButtonComponent className="m-2" label="info" color="info"/>
                    <ButtonComponent className="m-2" label="danger" color="danger"/>
                    <ButtonComponent className="m-2" label="default" />
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Button Size</h2>
                    <ButtonComponent className="m-2" small label="small" color="primary"/>
                    <ButtonComponent className="m-2" label="normal" color="primary"/>
                    <ButtonComponent className="m-2" large label="large" color="primary"/>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Button Icon</h2>
                    <div className="flex flex-wrap">
                        <ButtonComponent className="m-2" icon="FiSearch" color="primary"/>
                        <ButtonComponent className="m-2" icon="FiPlus" color="success"/>
                        <ButtonComponent className="m-2" icon="FiSave" color="warning"/>
                        <ButtonComponent className="m-2" icon="FiAlertCircle" color="info"/>
                        <ButtonComponent className="m-2" icon="FiMinus" color="danger"/>
                        <ButtonComponent className="m-2" icon="FiScissors"/>
                    </div>
                    <div className="flex flex-wrap">
                        <ButtonComponent className="m-2 rounded-full" icon="FiSearch" color="primary"/>
                        <ButtonComponent className="m-2 rounded-full" icon="FiPlus" color="success"/>
                        <ButtonComponent className="m-2 rounded-full" icon="FiSave" color="warning"/>
                        <ButtonComponent className="m-2 rounded-full" icon="FiAlertCircle" color="info"/>
                        <ButtonComponent className="m-2 rounded-full" icon="FiMinus" color="danger"/>
                        <ButtonComponent className="m-2 rounded-full" icon="FiScissors"/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Button Disabled</h2>
                    <div className="flex flex-wrap">
                        <ButtonComponent className="m-2" label="primary" color="primary"/>
                        <ButtonComponent disabled className="m-2" label="primary (disabled)" color="primary"/>
                    </div>
                    <div className="flex flex-wrap">
                        <ButtonComponent className="m-2" label="default" />
                        <ButtonComponent disabled className="m-2" label="default (disabled)" />
                    </div>
                    <div className="flex flex-wrap">
                        <ButtonComponent className="m-2" icon="FiSearch" color="primary"/>
                        <ButtonComponent disabled className="m-2" icon="FiSearch" color="primary"/>
                        <ButtonComponent className="m-2" icon="FiScissors" />
                        <ButtonComponent disabled className="m-2" icon="FiScissors" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;
Button.layout = Admin