# AsyncExpress
Expressjs是一个很好的Nodejs web框架，但其基于回调的模式，在大型项目中组织代码有些困难。
在Nodejs v7.6以后版本开始支持ES7的async/await语法，此时Nodejs代码可以按类似以前的同步代码（如C/C++，python等)编写，这样可以大大简化代码结构。

这里做一个简单的封装演示，约定每个接口的原型如下：
```
var user_list = async function(ctx) {
	// ctx是每个请求的上下文，其包括
	// ctx.req原始的req对象
	// ctx.res原始的res对象

	// 逻辑处理，利用ES 7的await, Promise.all([...])等以同步模式调用异步方法
  let users = await db_user_list(ctx)
	
	// 成功返回：{data: xxx }
	return {data: {users: users}}
	
	// 错误返回：{err: xxx }
	return {err: {code: 101, msg: 'something wrong...'}}
	
	// 注意，不要抛异常！！！
};
```
