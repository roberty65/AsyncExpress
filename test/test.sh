curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/?error=1

curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" -d '{"name": "jack", "age": 10}' -H 'Content-Type: application/json; chartset=utf8' http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" -d '{"name": "mike", "age": 11}' -H 'Content-Type: application/json; chartset=utf8' http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" -d '{"name": "john", "age": 12}' -H 'Content-Type: application/json; chartset=utf8' http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users
curl -H "X-requestid: `uuid`" -d '{"name": "john", "age": 20}' -H 'Content-Type: application/json; chartset=utf8' http://127.0.0.1:8080/users/1
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users/
curl -H "X-requestid: `uuid`" http://127.0.0.1:8080/users


