const consts = require('./consts')

const handleComplaint = function (complain) {
    if (complain.type == consts.FINANCE) {
        console.log('Money doesn’t grow on trees, you know.')
    } else if (complain.type == consts.WEATHER) {
        console.log('It is the way of nature. Not much to be done.')
    } else if (complain.type == consts.EMOTIONS) {
        console.log('It’ll pass, as all things do, with time.')
    }
}

module.exports = handleComplaint