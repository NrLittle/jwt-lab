/**
 * sign-token.js — Create and inspect a JWT
 *
 * TODO: Complete the steps below to generate a JSON Web Token.
 *
 * When finished, run: node sign-token.js
 *
 * Expected output:
 *   - The full JWT string
 *   - The three parts (header, payload, signature) separated
 *   - The decoded payload showing your claims + iat/exp
 */

const jwt = require('jsonwebtoken')

// 1. Define a secret key (any string — in production this would be in an env variable)
const SECRET = 'your-secret-here'

// 2. Create a payload object with: userId (number), email (string), role (string)
const payload = {
  // TODO: Add your claims here
}

// 3. Sign the token with jwt.sign(payload, secret, options)
//    Use { expiresIn: '1h' } as the options
const token = '' // TODO: Replace with jwt.sign()

console.log('=== JWT Created ===')
console.log('Token:', token)
console.log()

// 4. Split the token by '.' to show the three parts
//    Hint: token.split('.')
const parts = [] // TODO: Split the token

console.log('Header (Base64):', parts[0])
console.log('Payload (Base64):', parts[1])
console.log('Signature:', parts[2])
console.log()

// 5. Decode the payload from Base64 to show it's readable
//    Hint: JSON.parse(Buffer.from(parts[1], 'base64').toString())
const decodedPayload = {} // TODO: Decode the payload

console.log('Decoded Payload:', decodedPayload)
