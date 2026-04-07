# JWT Security Questions

Answer each question in 2-3 sentences. Refer to what you observed in your scripts when possible.

## Question 1
**Why shouldn't you store passwords or credit card numbers in a JWT payload?**

Your answer: You shouldnt store passwords or credit card numbers in a JWT payload because a attacker and modify the payload to accuire the password. I saw the importance of having a verify section that verifies a signature to a secret key in the tamper-demo. 


## Question 2
**What happens if someone steals your JWT secret key? What's the impact, and what would you need to do?**

Your answer: If someone steals my JWT secret key then the impact is limited to token's lifetime. I would need to change the password or limit the limetime even more than previously. This was shown to me in the expire-demo where the token only had a lifetime of 6 seconds!


## Question 3
**Why do JWTs have an expiration time (`exp` claim)? What would happen if tokens never expired?**

Your answer: JWTs have an expireation time because it can be very dangerous having a token's lifetime never expire. This would make it easier for a attacker to steal the JWT because they wouldn't have to worry about the token changing or expiring before they can get the senstive data.


## Question 4
**In the tamper demo, you changed `role` from `"user"` to `"admin"` and `jwt.decode()` showed it as admin. But `jwt.verify()` rejected it. Explain why this matters — what would go wrong if a server used `decode()` instead of `verify()`?**

Your answer: Having 'verify()' reject the tempered payload but still having 'decode()' show the role change to admin matters because it shows that even if an attacker tries to access a higher role they won't be able to access the payload. If the server used 'decode()' instead of 'verify()' then an attacker can modify the payload and have access to the payload. 'verify()' check the signature to a secret key to catch tampering.


## Question 5
**Supabase Auth stores the JWT in the browser's `localStorage`. Research one risk of storing tokens in localStorage (hint: think about XSS). What's an alternative storage method that's more secure?**

Your answer: From a source I found about the risk of storing tokens in localStorage is that it can be accessible through JavaScript and an attacker can inject JavaScript through form inputs which can be viewed by other users. An alternative to prevent XSS(cross-site scripting) is to use React which mostly encodes all untrusted data.
