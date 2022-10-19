import { SwitchEnableUser } from "../../../registerUser/components";

function DoubleSwitch(props) {
    return (
        <div style={{ display: "flex", gap: '15%', width: '31.6%' }}>
            {
                props.items.map((item, index) => {
                    return (
                            <SwitchEnableUser name={item.tag} label={item.label} key={index} />
                    )
                })
            }
        </div>
    )
}
export default DoubleSwitch