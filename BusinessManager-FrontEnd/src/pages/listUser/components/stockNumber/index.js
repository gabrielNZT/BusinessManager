function StockNumber(props) {
    const { record } = props
    const style = record.stock < record.minStock ? { color: 'red', fontWeight: '600' } : { color: 'black' }

    return <p style={style}>{record.stock}</p>
}
export default StockNumber