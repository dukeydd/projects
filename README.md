# starting-out

### Start mongodb
```sudo systemctl start mongod```
```sudo systemctl status mongod```

### Mongo
using database "rest" and collection also called "rest"
this can be changed on ln21, and probably should be for clarity - lil-project/src/api/models/Todos.js

### Start API
```npm start```

### Start website
```npm start serve```

This will start a website on ```http://localhost:8080/ ```

# 
## What works and what doesn't
### Works
- Website grabs the list of TODOs from db via API
- Posting and deleting TODOs from API to db
### Doesn't
- Website is otherwise not hooked up to API and all other changes are just in memory
