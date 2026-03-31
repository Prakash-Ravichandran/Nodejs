An intro to Express JS





### Express send() internal working

- internal working send() in express [ref](https://github.com/expressjs/express/blob/e5099198b292a565f8583d70caf12d7afed3607f/lib/response.js#L125)

- send() by itself tries identify the type of data and set its content-type.


### Match different Routes

- its better to keep the default '/' home route atlast of all app.use() usages.

### git email configs
Step to setup different email for different projects

- `open -e .git/config`
- under [user] objects and username and email, if not [user] present add it as new.


mac shortcuts

 - `cmd + shift + .` shows hidden folder
 - open .git/config
 - edits user details