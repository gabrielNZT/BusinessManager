import { useSelector } from "react-redux"


function MenuHeader() {
    const companyName = useSelector(state => state.company.name)

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px'}}>
            <h5 style={{ color: 'white' }}>{companyName? companyName : 'ERROR'}</h5>
        </div>
    )
}
export default MenuHeader