# JWT Security Questions

Answer each question in 2-3 sentences. Refer to what you observed in your scripts when possible.

## Question 1
**Why shouldn't you store passwords or credit card numbers in a JWT payload?**

Your answer:


## Question 2
**What happens if someone steals your JWT secret key? What's the impact, and what would you need to do?**

Your answer:


## Question 3
**Why do JWTs have an expiration time (`exp` claim)? What would happen if tokens never expired?**

Your answer:


## Question 4
**In the tamper demo, you changed `role` from `"user"` to `"admin"` and `jwt.decode()` showed it as admin. But `jwt.verify()` rejected it. Explain why this matters — what would go wrong if a server used `decode()` instead of `verify()`?**

Your answer:


## Question 5
**Supabase Auth stores the JWT in the browser's `localStorage`. Research one risk of storing tokens in localStorage (hint: think about XSS). What's an alternative storage method that's more secure?**

Your answer:
