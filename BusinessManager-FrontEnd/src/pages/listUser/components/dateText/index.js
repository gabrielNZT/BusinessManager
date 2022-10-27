import moment from 'moment';

function DateText(props) {
    const { date } = props
    return <p>{moment(date).format("DD/MM/YYYY")}</p>
}
export default DateText