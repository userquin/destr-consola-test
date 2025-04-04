// import type { Options } from 'destr'
// const destr = require('destr')
import destr, { type Options } from 'destr'

const options = {
    strict: true
} satisfies Options

const data = destr('{"foo":"bar"}')

console.log(data) // { foo: 'bar' }
