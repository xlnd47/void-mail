
> a self-hosted, simple and fast disposable mail service that works directly with your imap server. No database required. 


# How it works
You need a domain with [catch-all-mailbox](https://www.google.ch/search?q=how+to+setup+catch-all+imap+mailbox) and an imap account. 

Your run the void-mail nodejs application on your own server. It will automatically load all mails from the imap server. 

When the user opens the void-mail web application, he/she can read the mails corresponding to a specific address.  

See [FAQ](docs/faq.md)

# Features

* Push-Notification on new emails.
* Mail presentation are sanitized to avoid tracking. 
* In-Memory cache for very fast mail access. 
* No database required! You just need a [catch-all-mailbox](https://www.google.ch/search?q=how+to+setup+catch-all+imap+mailbox) imap server.  
* Deletes emails older than X days. 

## Install
One click installation: 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/xlnd47/void-mail)


See [Installation](docs/installation.md)

## Configuration Parameters

These are all set as environment variables. They are loaded in [config.js](helper/config.js) 

Parameter | Type | Description
----------|------|-------------
DOMAINS | String | The domain part after the @, where your receive emails. (e.g. `example.com`), for multiple domains you just add a space between every domain. (e.g. `emample.com example.net`)
IMAP_SERVER | String | The imap server address. (e.g. `imap.example.com`)
IMAP_USER | String | The username used to sign into the imap server. 
IMAP_PASSWORD | String | The password used to sign into the imap server.
IMAP_REFRESH_INTERVAL_SECONDS | Integer | How often to check for new messages on the imap server. (default: `undefined`) Usually the application reacts immediately to new arrived mail.
PORT | Integer | On which port to run the http interface. (default: `3000`)
DELETE_MAILS_OLDER_THAN_DAYS | Integer | How many days to to wait before deleting messages. (default: `30`)
DEBUG | String | Enable debug logging with value `void-mail:*` (default: disabled)

## TODO

This mostly works, but some things need to be done:

Testing:
-   create unit/integration tests

Maybe Later:
- ~~support multiple domains~~
- support delete
- ~~docker deployment~~



