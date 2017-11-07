'use strict'

const units = {
    decimal: [
        [1000 ** 5, 'P'],
        [1000 ** 4, 'T'],
        [1000 ** 3, 'G'],
        [1000 ** 2, 'M'],
        [1000 ** 1, 'K'],
    ],
    binary: [
        [1024 ** 5, 'Pi'],
        [1024 ** 4, 'Ti'],
        [1024 ** 3, 'Gi'],
        [1024 ** 2, 'Mi'],
        [1024 ** 1, 'Ki'],
    ],
}

function toFixed(n, { decimalPlaces = 2, keepTrailingZeros } = {}) {
    const a = (+n).toFixed(decimalPlaces)
    if (keepTrailingZeros) return a
    return a.replace(/\.?0+$/, '')
}

function formatUnit(n, binary) {
    for (const [divider, symbol] of binary ? units.binary : units.decimal) {
        if (n >= divider) {
            return [divider, symbol];
        }
    }
    return [1 ,''];
}


module.exports = { units, formatUnit, toFixed }
