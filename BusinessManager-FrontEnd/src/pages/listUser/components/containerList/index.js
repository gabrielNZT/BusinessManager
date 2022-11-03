import { HeaderList, ButtonsSearch, TableUser } from ".."
import SearchFields from "../searchFields"

function ContainerList(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <HeaderList config={props.config} />
            <ButtonsSearch
                checkBoxItems={props.checkBoxItems}
                defaultColumns={props.defaultColumns}
                setColumns={props.setColumns}
                columns={props.columns} />
            <SearchFields
                defaultColumns={props.defaultColumns}
                columns={props.columns}
            />
            <TableUser
                data={props.data}
                columns={props.columns} />
        </div>
    )
}
export default ContainerList