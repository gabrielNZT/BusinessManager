const MAX_CHARACTERS = 6

function codeMask(value) {
    return ("000000" + value).slice(-(MAX_CHARACTERS))
}
export default codeMask