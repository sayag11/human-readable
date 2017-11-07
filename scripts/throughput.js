'use strict'
const { formatUnit, toFixed, units } = require('./helpers')

function formatThroughput(n, { binary, decimalPlaces = 2, keepTrailingZeros} = {}) {
    var [divider, symbol] = formatUnit(n, binary);
    const ns = toFixed(n / divider, { decimalPlaces, keepTrailingZeros })
    return `${ns} ${symbol}bps`
}

module.exports = { formatThroughput }
