/**
 * expire-demo.js — Watch a JWT expire in real time
 *
 * TODO: Complete the steps below to see token expiration in action.
 *
 * When finished, run: node expire-demo.js
 *
 * Expected output:
 *   - Token created with short expiration
 *   - Immediate verification succeeds
 *   - After waiting, verification fails with "jwt expired"
 */

const jwt = require('jsonwebtoken')

const SECRET = 'my-super-secret-key-2024'

// 1. Create a token that expires in 5 seconds
//    Hint: use { expiresIn: '5s' } in the options
const token = jwt.sign(
  { userId: 42, email: 'student@gmu.edu' },
  SECRET,
  { expiresIn: '5s' } // 5 seconds!
)

console.log('Token created with 5-second expiration')
console.log()

// 2. Verify immediately — this should succeed
try {
  const decoded = jwt.verify(token, SECRET)
  console.log('✅ Immediate check: Token is VALID')
  console.log('   Expires at:', new Date(decoded.exp * 1000).toLocaleTimeString())
} catch (err) {
  console.log('❌ Immediate check failed:', err.message)
}

// 3. Wait 6 seconds, then verify again — this should fail
console.log()
console.log('Waiting 6 seconds...')

setTimeout(() => {
  try {
    jwt.verify(token, SECRET)
    console.log('✅ After 6s: Token is VALID')
  } catch (err) {
    console.log('❌ After 6s: Token EXPIRED!')
    console.log('   Error:', err.message)
  }
}, 6000)
