import Checkbox from "@components/form/Checkbox";
import Admin from "@layout/Admin";
const Checkboxp = () => {
    return (
        <div className="p-2 flex flex-wrap">
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-1">Basic usage</h2>
                    <p className="font-normal text-sm text-gray-500 mb-4">Basic usage example.</p>
                    <div className="flex flex-row gap-4">
                        <Checkbox color="primary" label="checkbox"/>
                        <Checkbox defaultChecked color="primary" label="checkbox"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Checkbox outline bcolor="success-outline" color="success" type="radio" label="checkbox"/>
                        <Checkbox defaultChecked outline bcolor="success-outline" color="success" type="radio" label="checkbox"/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-4">Checkbox Type</h2>
                    <div className="flex flex-row gap-4">
                        <Checkbox color="primary" label="checkbox default"/>
                        <Checkbox defaultChecked color="primary" label="checkbox default"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Checkbox outline color="primary" bcolor="primary-outline" label="checkbox outline"/>
                        <Checkbox defaultChecked outline color="primary" bcolor="primary-outline" label="checkbox outline"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Checkbox color="primary" type="radio" label="checkbox Radio"/>
                        <Checkbox defaultChecked color="primary" type="radio" label="checkbox Radio"/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Checkbox outline bcolor="primary-outline" color="primary" type="radio" label="checkbox Radio outline"/>
                        <Checkbox defaultChecked outline bcolor="primary-outline" color="primary" type="radio" label="checkbox Radio outline"/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-4">Checkbox Color</h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        <Checkbox defaultChecked color="primary" label="primary"/>
                        <Checkbox defaultChecked color="success" label="success"/>
                        <Checkbox defaultChecked color="danger" label="danger"/>
                        <Checkbox defaultChecked color="warning" label="warning"/>
                        <Checkbox defaultChecked color="info" label="info"/>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded p-4">
                <div className="bg-white rounded p-4 h-full shadow">
                    <h2 className="font-medium text-sm text-gray-700 mb-4">Checkbox disabled</h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        <Checkbox disabled color="primary" label="disabled default"/>
                        <Checkbox defaultChecked disabled color="primary" label="disabled default"/>
                        <Checkbox disabled outline bcolor="primary-outline" color="primary" label="disabled outline"/>
                        <Checkbox defaultChecked disabled outline bcolor="primary-outline" color="primary" label="disabled outline"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkboxp;
Checkboxp.layout = Admin