# NexTyper

## How to play
Simply type your user name in the input box and press the Start button. You will be moved into the main game screen. 

On top, you will see your player stats, the round counter and the timer.

The round starts when you begin typing into the input field. The input will be automatically selected between rounds, so you do not neet to worry about having your mouse or a tab key close - just let your fingers dance!

## What currently works :
- Base gameplay loop: 
-- Gameplay loop of typing through the round, with text highlights (styled for finished, incorrect, next)
-- typechecking on a single letter basis
-- WPM and accuracy counters displayed and updated dynamically during the gameplay
-- Round system - 10 rounds, each lasting 10 seconds with a timer and round counter visible on the screen
-- Choosing a user name or defaulting into a preset one
-- Add your score after the game finishes

- Leaderboard
-- Hardcoded values right now
-- Player score will be added there if you choose to do so at the end of the round
-- No filtering for now

- Navigation
-- Three pages : main game page, leaderboard, and a short about page

- Tests
-- small suite of unit tests using Jest


## What I would like to add given more time
- Base gameplay loop
-- Extra UX : coloring the accuracy/WPM conditionally based on a rating system
-- Persistence for username, currently has to be retyped each time one plays
-- rerolling sentences mid-round if you finish before the timer, currently you get one sentence per round, and it simply loops back to the beginning if you finish early
-- more sentences, dividing them into difficulty and dynamically adjust based on user performance (for example, if user completes 2-3 rounds with high enough accuracy/WPM, the next sentence will be of a higher quality)

- Leaderboard
-- proper database for storing the scores, using, for example, Supabase
-- rankings based on different values, separate for WPM and Accuracy for example
-- some extra eyecandy - special badges for first three places, styling for player's scores

- Tests
-- more coverage for existing ones, more advanced tests (E2E)

- Backend
-- Proper user registration/login - user profile page, stat tracking, perhaps some achievements (like reaching a specific WPM, accuracy etc)
-- proper multiplayer system (Sockets.io?)

## Design Decisions
- "Sentence" was interpreted as the full round text. Accuracy = correct keystrokes / total keystrokes across the round.
- Sentences were generated using <https://randomwordgenerator.com/sentence.php>


## AI use
- I use AI in a similar way to how I would use a search engine, primarily by looking for explainations to concepts and example code snippets for what I need to achieve. My AI choice is Claude, and I use simply the web version. My IDE does not have any AI assistants installed.

Example ways I used Claude for this project :
- quick explainations of concepts like React's state, useEffect and pathname.
- quick code snippets, like the dummyPlayers array used to populate leaderboards
- suggestions for the 'next step' (eg, "hey, this is what I have, this is what I want to accomplish, what options do I have?")
