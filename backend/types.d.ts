import { Strategy } from 'passport-google-oauth20'

export const googleStrategyCallback: Strategy.VerifyCallback = (
    accessToken: string,
    refreshToken: string,
    profile: Strategy.Profile,
    done: (error: any, user?: any) => void
) => {

}