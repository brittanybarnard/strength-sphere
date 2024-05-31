# find-me-a-spotter

# Project Title
**focus on gym goer's side**
## Overview

What is your app? Brief description in a couple of sentences.

B2C app. Purpose of the app is to find a gym goer a person to spot them at the gym. The spotter will be someone who works at the gym. Will be marketed to gyms as an additional service they offer to their customers. Can be added on to their existing app or on its own. 

### Problem

Why is your app needed? Background information around any pain points or other reasons.

A lot of people workout alone and feel uncomfortable asking people for a spot. A lot of average gym goers don't even know how to spot. Most people opt to not lift as heavy so they don't have to ask for a spot.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

People who go to the gym and do lifts that require a spotter.

Login to the app, select button "I need a spotter". Fill out preferences; their gender, type of lift, section of the gym, weight being spotted, gender preference of spotter. Select button "Find me a spotter".

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Login to user's profile.
Button when clicked, must link to Find Me A Spotter page.
Form must capture: client's gender, type of lift, weight of lift, area of gym, gender preference of spotter.
Find Me A Spotter button must log user preferences and return them to business side and send a notification.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

react+vite,
express,
mySQL,
netlify,
heroku,
node.js

### APIs

List any external sources of data that will be used in your app.

Will need a database with user's info (age, gender)

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Form page with preferences and "Find me a spotter" submit button.
Loading/Form submission successful/spotter found page.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

homepage - with login button (nice to have)
homepage - logged in (hardcode in some vars to make it look like it functions teehee)
form
submission successful


### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.
stretch goal atm

no login functionality atm
will already be 'logged in' as user/business

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.



## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

login, and save user info
- save user's picture, age, gender(opt)
business side (gym side)