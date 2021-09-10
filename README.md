# Verify Email

## An open rest api to verify an emaiid

Email verification generally constitutes of three parts and api should tell if the emailid is provided by any

1. disposable email service like mailinator.com etc
2. public email service like gmail.com,yahoo.co.in,outlook.com etc
3. private organization like microsoft.com,google.com

## How to use this api

### Call the api with emailid

```bash
curl https://verifyemail.vercel.app/api/nikhil.001mehta@outlook.com
```

### Sample response

```json
{
  "disposable": false,
  "public": true,
  "private": false
}
```

## LICENSE

MIT
