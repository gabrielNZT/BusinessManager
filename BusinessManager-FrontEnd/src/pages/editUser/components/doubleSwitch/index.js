import { SwitchEnableUser } from "../../../registerUser/components";

function DoubleSwitch(props) {
    return (
        <div style={{ display: "flex", gap: '15%', width: '31.6%' }}>
            {
                props.items.map((item, index) => {
                    return (
                        <div style={{ width: '35%' }}>
                            <SwitchEnableUser name={item.tag} label={item.label} key={index} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DoubleSwitch