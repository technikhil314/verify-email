# Verify Email

[![license](https://img.shields.io/github/license/technikhil314/verify-email)](https://github.com/technikhil314/verify-email/blob/main/LICENSE)

[![stargazers](https://img.shields.io/github/stars/technikhil314/verify-email?style=social)](https://github.com/technikhil314/verify-email/stargazers)
[![number of forks](https://img.shields.io/github/forks/technikhil314/verify-email?style=social)](https://github.com/technikhil314/verify-email/fork)
[![Follow technikhil314 on twitter](https://img.shields.io/twitter/follow/technikhil314?label=Follow)](https://www.twitter.com/technikhil314)

###### 👏 & ❤️ to [auto badger](https://github.com/technikhil314/auto-badger) for making badging simple

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
