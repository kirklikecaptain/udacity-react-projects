#Main Views
-Sign in screen
-Unanswered polls (Home)
-Answered polls
-New poll
-Individual Polls
-Leaderboard

#Requirements

#Sign in
-Should have a faux or real user auth (existing user from _DATA)
-User should not be able to navigate straight to a url without signing in first
-Should be able to sign out and back in
-Username should be visible in nav

#Views
-Unanswered questions (root)
-Answered Questions
-Questions should be chronologically ordered, with most recent at the top

#POLLS
-Each poll should link to a specific poll detail page at questions/:question_id

-Each poll should contain the following information:
--Text “Would You Rather”
--Avatar of the user who posted the polling question
--Two options

-For answered polls, each of the two options contains the following:
--Text of the option;
--Number of people who voted for that option; and
--Percentage of people who voted for that option.
--The option selected by the logged-in user should be clearly marked.

-After voting, the result should be displayed
-users can't change votes
-votes should be persistent

#NEW POLLS
-available at /add route
-Must show text 'would you rather?'
-2 fields for options (or 3?)
-Upon submission, user should be brought back to home (and see their new question, under unanswered)

#LEADERBOARD
-accessed at /leaderboard
-Each entry should have
--User’s name
--User’s picture
--Number of questions the user asked
--Number of questions the user answered
-Top user score: Number questions asked + number of questions answered

-404 page
-persistent nav

#Routes for:
-New
-Specific Questions
-Leaderboard
-answered

Store should be the source of truth
There should be no direct API calls in components’ lifecycle methods, and updates should be triggered by dispatching action creators.





