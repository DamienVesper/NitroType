# NitroType API Docs
Documentation for the unofficial NitroType API

----

## Base URL
`https://www.nitrotype.com/api/`

----

## Endpoints

  * [Achievements](#achievements)
  * [Auth](#auth)
  * [Classes](#classes)
  * [Friends](#friends)
  * [Loot](#loot)
  * [News](#news)
  * [Players](#players)
  * [Payments](#payments)
  * [Race](#race)
  * [Rewards](#rewards)
  * [Leaderboards](#leaderboards)
  * [Settings](#settings)
  * [Stats](#stats)
  * [Teams](#teams)

## Achievements
  * [`v2/achievements/check`](#v2achievementscheck)
  * [`v2/achievements/claim/<achievementID>`](#v2achievementsclaimachievementid)
  * [`v2/achievements/extra`](#v2achievementsextra)

### <code>v2/achievements/check</code>
???

| method |
| :---: |
| POST |

**Params:** ids

### <code>v2/achievements/claim/\<achievementID></code>
Claim an achievement.

| method | apiScope |
| :---: | :---: |
| GET | claimAchievement |

### <code>v2/achievements/extra</code>
???

| method |
| :---: |
| POST |

**Params:** id

## Auth
  * [`v2/auth/class-login/<sectionID>`](#v2authclass-loginsectionid)
  * [`v2/auth/cross-site/<appName>`](#v2authcross-siteappname)
  * [`v2/auth/login/<???>`](#v2authlogin)
  * [`v2/auth/login/username`](#v2authloginusername)
  * [`v2/auth/redirect/<facebook|google|clever>`](#v2authredirectfacebookgoogleclever)
  * [`v2/auth/register/username`](#v2authregisterusername)
  * [`v2/auth/reset-password`](#v2authreset-password)
  * [`v2/auth/reset-password/change`](#v2authreset-passwordchange)
  * [`v2/auth/validate-captcha`](#v2authvalidate-captcha)
  * [`v2/auth/validate-email`](#v2authvalidate-email)

### <code>v2/auth/class-login/\<sectionID></code>
Login to a class.

| method | apiScope |
| :---: | :---: |
| POST | logInToClass |

**Params:** sectionID

### <code>v2/auth/cross-site/\<appName></code>
???

| method |
| :---: |
| GET |

**Params:** redirect

### <code>v2/auth/login/\<???></code>
???

| method | apiScope |
| :---: | :---: |
| POST | login |

**Params:** ???

### <code>v2/auth/login/username</code>
Login to an account.

| method | apiScope |
| :---: | :---: |
| POST | login |

**Params:** username, password, captchaToken, tz

### <code>v2/auth/redirect/\<facebook|google|clever></code>
Redirect to third-party login.

| method |
| :---: |
| GET |

### <code>v2/auth/register/username</code>
Register (and qualify) an account.

| method | apiScope |
| :---: | :---: |
| POST | signup |

**Params:** username, password, email, acceptPolicy, receiveContact, tz, qualifying, avgSpeed, avgAcc, carID, raceSounds

### <code>v2/auth/reset-password</code>
Reset an account's password.

| method | apiScope |
| :---: | :---: |
| POST | forgotPassword |

**Params:** email

### <code>v2/auth/reset-password/change</code>
Reset an account's password.

| method | apiScope |
| :---: | :---: |
| POST | resetPassword |

**Params:** newPassword, newPassword2, userID, hash

### <code>v2/auth/validate-captcha</code>
Submit a captcha user response token.

| method | apiScope |
| :---: | :---: |
| POST | validateCaptcha |

**Params:** token

### <code>v2/auth/validate-email</code>
Verify an account's email address.

| method | apiScope |
| :---: | :---: |
| POST | validateEmail |

**Params:** hash, userID

## Classes
  * [`v2/classes`](#v2classes)

### <code>v2/classes</code>
???

| method | apiScope |
| :---: | :---: |
| GET | fetchDetails |

**Params:** isMember

## Friends
  * [`v2/friend-requests`](#v2friend-requests)
  * [`v2/friend-requests/<userID>/accept`](#v2friend-requestsuseridaccept)
  * [`v2/friend-requests/<userID>/deny`](#v2friend-requestsuseriddeny)
  * [`v2/friend-requests/<userID>/request`](#v2friend-requestsuseridrequest)
  * [`v2/friend-requests/accept-all`](#v2friend-requestsaccept-all)
  * [`v2/friend-requests/deny-all`](#v2friend-requestsdeny-all)
  * [`v2/friends`](#v2friends)
  * [`v2/friends/<userID>`](#v2friendsuserid)

### <code>v2/friend-requests</code>
Fetch incoming friend requests.

| method | apiScope |
| :---: | :---: |
| GET | getRequests |

**Params:** r

### <code>v2/friend-requests/\<userID>/accept</code>
Accept a friend request.

| method | apiScope |
| :---: | :---: |
| POST | acceptRequest |

### <code>v2/friend-requests/\<userID>/deny</code>
Ignore a friend request.

| method | apiScope |
| :---: | :---: |
| POST | ignoreRequest |

### <code>v2/friend-requests/\<userID>/request</code>
Send a friend request.

| method |
| :---: |
| POST |

### <code>v2/friend-requests/accept-all</code>
Accept all friend requests.

| method | apiScope |
| :---: | :---: |
| POST | acceptAllRequests |

### <code>v2/friend-requests/deny-all</code>
Ignore all friend requests.

| method | apiScope |
| :---: | :---: |
| POST | ignoreAllRequests |

### <code>v2/friends</code>
Fetch friends data.

| method | apiScope |
| :---: | :---: |
| GET | getFriends |

**Params:** r, online

### <code>v2/friends/\<userID></code>
Remove a friend.

| method | apiScope |
| :---: | :---: |
| DELETE | removeFriend |

## Loot
  * [`v2/loot/arrange-cars`](#v2lootarrange-cars)
  * [`v2/loot/dealership/<dlID>/buy`](#v2lootdealershipdlidbuy)
  * [`v2/loot/equip`](#v2lootequip)
  * [`v2/loot/shop/<srlID>/buy`](#v2lootshopsrlidbuy)

### <code>v2/loot/arrange-cars</code>
Rearrange cars or add/remove garage sections.

| method |
| :---: |
| POST |

### <code>v2/loot/dealership/\<dlID>/buy</code>
Buy an item from the dealership.

| method | apiScope |
| :---: | :---: |
| POST | shopPurchase |

### <code>v2/loot/equip</code>
Customize cars and loot.

| method | apiScope |
| :---: | :---: |
| POST | equipLoot |

### <code>v2/loot/shop/\<srlID>/buy</code>
Buy an item from the shop.

| method | apiScope |
| :---: | :---: |
| POST | shopPurchase |

## News
  * [`v2/news`](#v2news)
  * [`v2/news/<postID>`](#v2newspostid)

### <code>v2/news</code>
Fetch news data.

| method | apiScope |
| :---: | :---: |
| GET | getNews |

**Params:** limit

### <code>v2/news/\<postID></code>
Fetch a news post.

| method | apiScope |
| :---: | :---: |
| GET | getNewsPost |

## Players
  * [`v2/players/<userID>/report`](#v2playersuseridreport)
  * [`v2/players/<userID>/send-cash`](#v2playersuseridsend-cash)
  * [`v2/players/receive-cash`](#v2playersreceive-cash)
  * [`v2/players/search`](#v2playerssearch)

### <code>v2/players/\<userID>/report</code>
Report a player.

| method |
| :---: |
| POST |

### <code>v2/players/\<userID>/send-cash</code>
Send cash to a player.

| method | apiScope |
| :---: | :---: |
| POST | sendCash |

**Params:** amount, password

### <code>v2/players/receive-cash</code>
Fetch pending cash gifts.

| method | apiScope |
| :---: | :---: |
| POST | getPendingCashGifts |

### <code>v2/players/search</code>
Search for users.

| method | apiScope |
| :---: | :---: |
| POST | searchUsers |

**Params:** term

## Payments
  * [`v2/payments/create-session`](#v2paymentscreate-session)
  * [`v2/payments/products`](#v2paymentsproducts)
  * [`v2/payments/transaction`](#v2paymentstransaction)

### <code>v2/payments/create-session</code>
Start a purchase session.

| method | apiScope |
| :---: | :---: |
| POST | beginPurchase |

**Params:** username, SKU, purchaseMethod

### <code>v2/payments/products</code>
???

| method | apiScope |
| :---: | :---: |
| POST | validateUserProduct |

**Params:** username, type

### <code>v2/payments/transaction</code>
???

| method | apiScope |
| :---: | :---: |
| POST | refreshUserSessionAfterStripePurchase |

**Params:** userID

## Race
  * [`v2/race/<raceID>`](#v2raceraceid)
  * [`v2/race/save-qualifying`](#v2racesave-qualifying)

### <code>v2/race/\<raceID></code>
Fetch race data.

| method | apiScope |
| :---: | :---: |
| GET | fetchRaceData |

### <code>v2/race/save-qualifying</code>
Save qualifying information (on account registration).

| method | apiScope |
| :---: | :---: |
| POST | setQualifyingInfo |

**Params:** speed, accuracy

## Rewards
  * [`v2/rewards/daily`](#v2rewardsdaily)

### <code>v2/rewards/daily</code>
Claim daily reward.

| method |
| :---: |
| GET |

## Leaderboards
  * [`v2/leaderboards`](#v2leaderboards)

### <code>v2/leaderboards</code>
Fetch leaderboard data.

| method |
| :---: |
| GET |

**Params:** board, time, grouping, seasonID

## Settings
  * [`v2/settings`](#v2settings)
  * [`v2/settings/account`](#v2settingsaccount)
  * [`v2/settings/password`](#v2settingspassword)
  * [`v2/settings/profile`](#v2settingsprofile)
  * [`v2/settings/remove-sso`](#v2settingsremove-sso)
  * [`v2/settings/remove-sso-code`](#v2settingsremove-sso-code)
  * [`v2/settings/send-verification-email`](#v2settingssend-verification-email)
  * [`v2/settings/social`](#v2settingssocial)
  * [`v2/settings/sounds`](#v2settingssounds)
  * [`v2/settings/world`](#v2settingsworld)

### <code>v2/settings</code>
Fetch user settings.

| method | apiScope |
| :---: | :---: |
| GET | fetchUserSettings |

### <code>v2/settings/account</code>
Update account.

| method | apiScope |
| :---: | :---: |
| POST | accountUpdate |

**Params:** firstname, lastname, email, contact, password

### <code>v2/settings/password</code>
Change password.

| method | apiScope |
| :---: | :---: |
| POST | passwordUpdate |

**Params:** password, newPassword, newPassword2

### <code>v2/settings/profile</code>
Update profile.

| method | apiScope |
| :---: | :---: |
| POST | profileUpdate |

**Params:** displayName, username

### <code>v2/settings/remove-sso</code>
???

| method | apiScope |
| :---: | :---: |
| POST | removeSSO |

**Params:** code, username, password, password2

### <code>v2/settings/remove-sso-code</code>
???

| method | apiScope |
| :---: | :---: |
| POST | sendRemoveSSOCode |

### <code>v2/settings/send-verification-email</code>
Resend verification email.

| method | apiScope |
| :---: | :---: |
| POST | resendEmailValidation |

### <code>v2/settings/social</code>
Update social settings.

| method | apiScope |
| :---: | :---: |
| POST | socialSettingsUpdate |

**Params:** offline, allowFriendRequests, lookingForTeam

### <code>v2/settings/sounds</code>
Update sound preferences.

| method | apiScope |
| :---: | :---: |
| POST | updateSoundPreferences |

**Params:** value

### <code>v2/settings/world</code>
???

| method | apiScope |
| :---: | :---: |
| POST | updateWorld |

**Params:** worldID

## Stats
  * [`v2/stats/data/<bymonth|lastdays|racelog|topspeeds>`](#v2statsdatabymonthlastdaysracelogtopspeeds)
  * [`v2/stats/graphs/<bymonth|lastdays|racelog|topspeeds>`](#v2statsgraphsbymonthlastdaysracelogtopspeeds)
  * [`v2/stats/summary`](#v2statssummary)

### <code>v2/stats/data/\<bymonth|lastdays|racelog|topspeeds></code>
Fetch racelog data.

| method | apiScope |
| :---: | :---: |
| GET | fetchRaceLogs |

**Params:** limit, page

### <code>v2/stats/graphs/\<bymonth|lastdays|racelog|topspeeds></code>
Fetch stats chart.

| method | apiScope |
| :---: | :---: |
| GET | fetchStatsChart |

### <code>v2/stats/summary</code>
Fetch stats summary data.

| method |
| :---: |
| GET |

## Teams
  * [`v2/team-applications/<userID>/accept`](#v2team-applicationsuseridaccept)
  * [`v2/team-applications/<userID>/deny`](#v2team-applicationsuseriddeny)
  * [`v2/team-applications/accept-all`](#v2team-applicationsaccept-all)
  * [`v2/team-applications/deny-all`](#v2team-applicationsdeny-all)
  * [`v2/team-members/<userID>/demote`](#v2team-membersuseriddemote)
  * [`v2/team-members/<userID>/kick`](#v2team-membersuseridkick)
  * [`v2/team-members/<userID>/promote`](#v2team-membersuseridpromote)
  * [`v2/teams/<tag>`](#v2teamstag)
  * [`v2/teams/<teamID>/accept-invite`](#v2teamsteamidaccept-invite)
  * [`v2/teams/<teamID>/apply`](#v2teamsteamidapply)
  * [`v2/teams/<teamID>/ignore-invite`](#v2teamsteamidignore-invite)
  * [`v2/teams/<userID>/invite`](#v2teamsuseridinvite)
  * [`v2/teams/applications`](#v2teamsapplications)
  * [`v2/teams/boost`](#v2teamsboost)
  * [`v2/teams/create`](#v2teamscreate)
  * [`v2/teams/disband`](#v2teamsdisband)
  * [`v2/teams/leave`](#v2teamsleave)
  * [`v2/teams/motd`](#v2teamsmotd)
  * [`v2/teams/search`](#v2teamssearch)
  * [`v2/teams/update`](#v2teamsupdate)

### <code>v2/team-applications/\<userID>/accept</code>
Accept a team application.

| method | apiScope |
| :---: | :---: |
| POST | acceptTeamApplication |

### <code>v2/team-applications/\<userID>/deny</code>
Deny a team application.

| method | apiScope |
| :---: | :---: |
| POST | denyTeamApplication |

### <code>v2/team-applications/accept-all</code>
Accept all team applications.

| method | apiScope |
| :---: | :---: |
| POST | acceptAllTeamApplications |

### <code>v2/team-applications/deny-all</code>
Deny all team applications.

| method | apiScope |
| :---: | :---: |
| POST | denyAllTeamApplications |

### <code>v2/team-members/\<userID>/demote</code>
Demote a team officer to member.

| method | apiScope |
| :---: | :---: |
| POST | demoteToMember |

### <code>v2/team-members/\<userID>/kick</code>
Kick a team member.

| method | apiScope |
| :---: | :---: |
| POST | removeMember |

### <code>v2/team-members/\<userID>/promote</code>
Promote a team member to officer.

| method | apiScope |
| :---: | :---: |
| POST | promoteToOfficer |

### <code>v2/teams/\<tag></code>
Fetch team data.

| method | apiScope |
| :---: | :---: |
| GET | fetchDetails |

**Params:** isMember

### <code>v2/teams/\<teamID>/accept-invite</code>
Accept a team invite.

| method | apiScope |
| :---: | :---: |
| POST | acceptTeamInvite |

### <code>v2/teams/\<teamID>/apply</code>
Apply for a team.

| method | apiScope |
| :---: | :---: |
| POST | applyForTeam |

### <code>v2/teams/\<teamID>/ignore-invite</code>
Ignore a team invite.

| method | apiScope |
| :---: | :---: |
| POST | ignoreTeamInvite |

### <code>v2/teams/\<userID>/invite</code>
Send a team invite to a player.

| method |
| :---: |
| POST |

### <code>v2/teams/applications</code>
Fetch team applications.

| method | apiScope |
| :---: | :---: |
| GET | fetchApplications |

**Params:** r

### <code>v2/teams/boost</code>
Add a reaction (boost) to a motd.

| method | apiScope |
| :---: | :---: |
| POST | addMotdBoost |

**Params:** boostID, teamMotdID

### <code>v2/teams/create</code>
Create a team.

| method | apiScope |
| :---: | :---: |
| POST | createTeam |

**Params:** tag, name, tagColor, minRaces, minSpeed, otherRequirements, password, enrollment, autoRemove

### <code>v2/teams/disband</code>
Disband a team.

| method | apiScope |
| :---: | :---: |
| POST | disbandTeam |

**Params:** password

### <code>v2/teams/leave</code>
Leave a team.

| method | apiScope |
| :---: | :---: |
| POST | leaveTeam |

### <code>v2/teams/motd</code>
Post a message of the day (motd).

| method | apiScope |
| :---: | :---: |
| POST | updateMOTD |

**Params:** message

### <code>v2/teams/search</code>
Search for teams.

| method | apiScope |
| :---: | :---: |
| GET | teamSearch |

**Params:** invites, racesPlayed, speed

### <code>v2/teams/update</code>
Update a team.

| method | apiScope |
| :---: | :---: |
| POST | editTeam |

**Params:** tag, name, tagColor, minRaces, minSpeed, otherRequirements, password, enrollment, autoRemove
