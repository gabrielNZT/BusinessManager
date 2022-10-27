import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { GetCurrentUser } from "../../../../../services/request.js";
import { FetchCompanyName } from "../../../../../pages/login/reducer/actions.js"


function MenuHeader() {
    const dispatch = useDispatch()
    const companyName = useSelector(state => state.auth.company.name)

    useEffect(() => {
        if (localStorage.getItem('company') === null) {
            GetCurrentUser()
                .then(response => dispatch(FetchCompanyName(response.data.company)))
        } else {
            dispatch(FetchCompanyName(JSON.parse(localStorage.getItem('company'))))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: '15px' }}>
            <h5 style={{ color: 'white' }}>{companyName ? companyName : '...CARREGANDO'}</h5>
        </div>
    )
}
export default MenuHeader