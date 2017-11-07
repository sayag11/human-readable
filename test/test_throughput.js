import { formatThroughput } from '../scripts/throughput'
import test from 'ava'

test('formatThroughput', t => {
    t.is(formatThroughput(0), '0 bps');
    t.is(formatThroughput(1), '1 bps');
    t.is(formatThroughput(24), '24 bps');
    t.is(formatThroughput(1000), '1 Kbps');
    t.is(formatThroughput(1024, { binary: 1 }), '1 Kibps');
    t.is(formatThroughput(1024), '1.02 Kbps');
    t.is(formatThroughput(1024, { decimalPlaces: 3 }), '1.024 Kbps');
    t.is(formatThroughput(2309090, { decimalPlaces: 3 }), '2.309 Mbps');
        /* binary */
    t.is(formatThroughput(1024 ** 1 * 10, { binary: 1 }), '10 Kibps');
    t.is(formatThroughput(1024 ** 2 * 20, { binary: 1 }), '20 Mibps');
    t.is(formatThroughput(1024 ** 3 * 400, { binary: 1 }), '400 Gibps');
    t.is(formatThroughput(1024 ** 4 * 4, { binary: 1 }), '4 Tibps');
    t.is(formatThroughput(1024 ** 5, { binary: 1 }), '1 Pibps');
        /* decimal */
    t.is(formatThroughput(1000 ** 1 * 10), '10 Kbps');
    t.is(formatThroughput(1000 ** 2 * 20), '20 Mbps');
    t.is(formatThroughput(1000 ** 3 * 400), '400 Gbps');
    t.is(formatThroughput(1000 ** 4 * 4), '4 Tbps');
    t.is(formatThroughput(1000 ** 5), '1 Pbps');
})
