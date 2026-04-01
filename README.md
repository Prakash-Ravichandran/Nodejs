An intro to Express JS





### Express send() internal working

- internal working send() in express [ref](https://github.com/expressjs/express/blob/e5099198b292a565f8583d70caf12d7afed3607f/lib/response.js#L125)

- send() by itself tries identify the type of data and set its content-type.


### Match different Routes

- its better to keep the default '/' home route atlast of all app.use() usages.

### parsing data from request

- Express.js by default by default/internALLY doesn't convert the req,res data to their given format. We have to do it by below. (timestamp: 45.00 - 50.00)

```c.js
app.use(bodyParser.urlencoded())
```

### Handle only post request 

- [commit](https://github.com/Prakash-Ravichandran/Nodejs/commit/6794cbbe23844807ecd1dc6fed4872f0fc0ed1e5)

## Using Express Router

`app.use('/')` is a middleware function that matches all the routes and executes its handlers for al routes. So this is a middleware function, not a router function `app.get()` or `app.post()`. (timestamp - 51.00)

- [use express router](https://github.com/Prakash-Ravichandran/Nodejs/commit/0b123f550523254d72718ef3b0cf84d219fe98f3)


### git email configs
Step to setup different email for different projects

- `open -e .git/config`
- under [user] objects and username and email, if not [user] present add it as new.


mac shortcuts

 - `cmd + shift + .` shows hidden folder
 - open .git/config
 - edits user details