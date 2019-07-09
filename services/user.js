/* user.js
 * list/add/update user data
**/
module.exports = m = {
	// data (tmp)
	users: [],

	// service functions
	async_list: async function(ctx) {
		// list
		return {data: {users: m.users}}
	},

	async_add: async function(ctx) {
		let id = m.users.length + 1
		let user = {
			id: id,
			name: ctx.req.body.name,
			age: ctx.req.body.age
		}

		m.users.push(user)
		return {data: {id: id}}
	}
}
