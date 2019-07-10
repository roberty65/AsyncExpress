/* user.js
 * list/add/update user data
**/
var m = {
	users: []
};

// export the module
module.exports = m;

// service functions
m.async_list = async function(ctx) {
	// list
	return {data: {users: m.users}}
};

m.async_add = async function(ctx) {
	let id = m.users.length + 1
	let user = {
		id: id,
		name: ctx.req.body.name,
		age: ctx.req.body.age
	}

	m.users.push(user)
	return {data: {id: id}}
};

m.async_details = async function(ctx) {
	for (let user of m.users) {
		if (user.id == parseInt(ctx.req.params.uid)) {
			return {data: user}
		}
	}

	return {err: {code: 404, msg: "Not found"}}
};

m.async_update = async function(ctx) {
	for (let user of m.users) {
		if (user.id == parseInt(ctx.req.params.uid)) {
			user.name = ctx.req.body.name
			user.age = ctx.req.body.age

			return {data: {id: user.id}}
		}
	}

	return {err: {code: 404, msg: "Not found"}}
};
