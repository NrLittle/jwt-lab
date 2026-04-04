/**
 * verify-token.js — Verify a JWT with correct and wrong secrets
 *
 * TODO: Complete the steps below to verify JSON Web Tokens.
 *
 * When finished, run: node verify-token.js
 *
 * Expected output:
 *   - Token verified successfully with correct secret
 *   - Token rejected with wrong secret
 *   - Token decoded WITHOUT verification (showing the danger of jwt.decode)
 */

const jwt = require('jsonwebtoken')

const SECRET = 'your-secret-here'

// 1. Create a token (simulating what happens at login)
const token = jwt.sign(
  { userId: 42, email: 'student@gmu.edu', role: 'user' },
  SECRET,
  { expiresIn: '1h' }
)

console.log('Token created. Now verifying...')
console.log()

// 2. Verify with the CORRECT secret using jwt.verify(token, secret)
//    Wrap in try/catch — verify throws an error if the token is invalid
try {
  const decoded = null // TODO: Use jwt.verify() here
  console.log('✅ Token is VALID')
  console.log('Decoded:', decoded)
  console.log('User ID:', decoded.userId)
  console.log('Email:', decoded.email)
  console.log('Role:', decoded.role)
} catch (err) {
  console.log('❌ Token INVALID:', err.message)
}

console.log()

// 3. Try verifying with a WRONG secret — this should fail
try {
  // TODO: Call jwt.verify() with 'wrong-secret' instead of SECRET
  console.log('✅ Token is VALID')
} catch (err) {
  console.log('❌ Wrong secret:', err.message)
}

console.log()

// 4. Decode WITHOUT verifying using jwt.decode(token)
//    This reads the payload but does NOT check the signature!
const noVerify = null // TODO: Use jwt.decode() here
console.log('Decoded without verification:', noVerify)
console.log('⚠️  jwt.decode() does NOT check the signature!')
