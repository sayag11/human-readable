'use strict'

const { formatUnit, toFixed, units} = require('./helpers')

function formatSize(n, { binary, decimalPlaces = 2, keepTrailingZeros } = {}) {
    let sign = ''
    if (n < 0) {
        sign = '−'
        n = -n
    }
    var [divider, symbol] = formatUnit(n, binary);
    const ns = toFixed(n / divider, { decimalPlaces, keepTrailingZeros })
    if (divider >1) return `${sign}${ns} ${symbol}B`
    return `${sign}${n} ${n == 1 ? 'byte' : 'bytes'}`
}

module.exports = { formatSize }
