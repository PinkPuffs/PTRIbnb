import { Strategy } from "passport-google-oauth20"

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
// const db = {
//     query: (arg1: string, arg2: any, arg3: any) => {
//         console.log(arg1, arg2, arg3)
//     }
// }

// const callbackURL = 'http://localhost:8080/authenticate'
// const clientID = '30815415088-dh25eicl6digdninprue1jus4oqnn909.apps.googleusercontent.com'
// const clientSecret = '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'

passport.serializeUser((user: any, done: any) => {
    done(null, user.id)
})

passport.deserializeUser((user: any, done: any) => {
    //find user data from database based on serialized id

    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: '30815415088-dh25eicl6digdninprue1jus4oqnn909.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8080/authenticate',
    passReqToCallback: true,
    scope: ['email', 'profile']
},
(request: any, accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => {
    console.log('hi')
    done(null, profile)
    // const googleProfileId = profile.id;

    // db.query('SELECT * FROM guests WHERE google_profile_id = ?', [googleProfileId], (err: any, rows: any) => {
    //     if (err) {
    //         return done(err);
    //     }
    
    //     if (rows.length > 0) {
    //         return done(null, rows[0]);
    //     } else {
    //         const newUser = {
    //             google_profile_id: googleProfileId,
    //             id: googleProfileId
    //             // What other information do we want our user to provide other than profile id?
    //         };

    //         db.query('INSERT INTO guests SET ?', newUser, (err: any, result: any) => {
    //             if (err) {
    //                 return done(err);
    //             }

    //             newUser.id = result.insertId;

    //             return done(null, newUser);
    //         });
    //     }
    // });
}));



module.exports = passport