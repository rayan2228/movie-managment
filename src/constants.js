import 'dotenv/config'

const PORT = process.env.PORT || 8000
const APP_ENV = process.env.APP_ENV
const APP_URL = process.env.APP_URL
const DB_URL = process.env.DB_URL
const VERIFICATION_SIGNATURE = process.env.VERIFICATION_SIGNATURE
const ACCESS_TOKEN_SIGNATURE = process.env.ACCESS_TOKEN_SIGNATURE
const ACCESS_TOKEN_EXPIRE = process.env.ACCESS_TOKEN_EXPIRE
const REFRESH_TOKEN_SIGNATURE = process.env.REFRESH_TOKEN_SIGNATURE
const REFRESH_TOKEN_EXPIRE = process.env.REFRESH_TOKEN_EXPIRE

export {
    PORT,
    APP_ENV,
    APP_URL,
    DB_URL,
    VERIFICATION_SIGNATURE,
    ACCESS_TOKEN_SIGNATURE,
    ACCESS_TOKEN_EXPIRE,
    REFRESH_TOKEN_SIGNATURE,
    REFRESH_TOKEN_EXPIRE
}
