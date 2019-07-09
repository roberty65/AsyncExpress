/* sb.js
 * handle send back
**/
module.exports = sb = function(req, res, next) {
	let ctx = req.ctx
	console.log('url=' + req.originalUrl + ', requestid=' + ctx.requestid + ' end with err:', ctx.err, ', data: ', ctx.data)

	// TODO: automatically set content-type if not set
	if (ctx.err) {
		res.send(ctx.err)
	} else {
		res.send({code:0, data: ctx.data})
	}
};

