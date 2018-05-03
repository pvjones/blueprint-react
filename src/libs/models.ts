/**
 * Config Models
 */

interface DbConfig {
  host: string
  port: number
  database: string
  user: string
  password: string
}

interface ApiConfig {
  host: string
  jwtSecret: string
  baseUrl: string
  port: number
}

interface UiConfig {
  reCaptcha: ReCaptchaConfig
}

interface ReCaptchaConfig {
  siteKey: string
}

export interface EnvConfig {
  db: DbConfig
  api: ApiConfig
  ui: UiConfig
}

export type EnvKeys = 'dev' | 'prod'
export type Config = Record<EnvKeys, EnvConfig>