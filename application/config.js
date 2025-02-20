// Note: Also update app.json and README.md!
require('dotenv').config()

const config = {
	email: {
		domains: process.env.DOMAINS.split(' '),
		// domains: domains,
		deleteMailsOlderThanDays: process.env.DELETE_MAILS_OLDER_THAN_DAYS || 30
	},
	imap: {
		user: process.env.IMAP_USER,
		password: process.env.IMAP_PASSWORD,
		host: process.env.IMAP_SERVER,
		port: 993,
		tls: true,
		authTimeout: 3000,
		refreshIntervalSeconds: process.env.IMAP_REFRESH_INTERVAL_SECONDS
	},
	http: {port: normalizePort(process.env.PORT || '3000')}
}

if (!config.imap.user || !config.imap.password || !config.imap.host) {
	throw new Error('IMAP is not configured. Use IMAP_* ENV vars.')
}

if (!config.email.domains) {
	throw new Error('DOMAINS are not configured. Use ENV vars.')
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	const port = parseInt(val, 10)

	if (isNaN(port)) {
		// Named pipe
		return val
	}

	if (port >= 0) {
		// Port number
		return port
	}

	return false
}

module.exports = config
