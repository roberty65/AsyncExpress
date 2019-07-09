/* express-cb-wrapper
 * make express cb more powerful.
**/
module.exports = {
	ctxInit: function(options) {
		return function(req, res, next) {
			let ctx = req.ctx = {options: options}
			ctx.req = req
			ctx.res = res
			ctx.requestid = req.headers['x-requestid']
			console.log('url=%s, requestid=%s start', req.originalUrl, ctx.requestid)
			next()
		}
	},

	asyncWrapper: function(fun) {
		return function(req, res, next) {
			fun(req.ctx).then(ret => {
				req.ctx.err = ret.err
				req.ctx.data = ret.data
				next()
			}).catch(e => {
				// should not happen!!!
				req.ctx.err = {code: 9999, msg: 'unknown exception happened!!!' + e}
				next()
			});
		}
	},
};
