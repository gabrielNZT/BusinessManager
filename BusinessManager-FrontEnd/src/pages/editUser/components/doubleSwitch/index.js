import { SwitchEnableUser } from "../../../registerUser/components";

function DoubleSwitch(props) {
    return (
        <div style={{ display: "flex", gap: '15%', width: '31.6%' }}>
            {
                props.items.map((item, index) => {
                    return (
                        <div style={{ width: '35%' }} key={index}>
                            <SwitchEnableUser name={item.tag} label={item.label} formData={props.formData} handleSetData={props.handleSetData} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DoubleSwitch