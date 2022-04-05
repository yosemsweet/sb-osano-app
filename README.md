# sb-osano app

## What is this?
This app gives the customers the ability to use Osano cookie and consent management tools with their Smart Builder page. When customers add this app to a SmartBuilder page they'll be able to use Osano's cookie management system to maintain GDPR compliance by ensuring that consent is given and logged for non-essential cookies prior to being issued.


## Running and Developing

## Developing apps locally using the Smart Builder

1. Run `npm i` from the root directory.
2. Run `npm start`. This will build the app and watch for changes.
3. In a different terminal, run `npm run serve`
4. Go to app.unbounce.com and create a Smart Builder page on the client where local development has been enabled.
5. Open the apps sidebar panel and scroll down until you see "Add your own extension". Click "Add Manifest"
6. Copy and paste the `manifest.json` file from this repo into the box.
7. Now scroll up and find your app in the sidebar. Press the + button in the corner.
8. Voila - you are now using the local version your app running on your machine.
