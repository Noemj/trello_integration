trello_integration
==================

Automatically creates a Trello card for a GitHub issue.
#Setup
- Deploy the application to heroku, and configure the environmental variables:

`heroku config:set KEY=example_key LIST=example_list TOKEN=example_token`

where KEY and TOKEN are the authorised Trello user's credentials, and LIST is the ID of the list column that the card should be added to.

- Add a webhook to the GitHub project, and have it point to the heroku path:

`http://heroku_path/issue`

From the webhook event list select Issues as the sole action triggering event.

