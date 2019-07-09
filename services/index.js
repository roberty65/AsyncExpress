/* index.js
 * service handle
 * No exception raised!!!
 * return {err,data}, update ctx when need. 
**/
module.exports = {
	async_index: async function(ctx) {
		// TODO: async calls
		if (ctx.req.query.error == '1') {
			return {err: {code: 101, msg: 'something wrong happened. try again'}}
		} else {
			return {data: {home: 'http://www.test.com'}}
		}
	},
	async_save: async function(ctx, req, res) {
		// TODO:
		return {data: {done: 1}}
	}
}
