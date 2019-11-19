---
description: All about server side rendering in react
---

# React : Server Side Rendering

### Client Side Rendering

Most of all, we have started to working with `create-react-app` cli for react setup in client side.

Client side application structure

step 1: First browser will request page which will have base html along with bundle.js script declaration

step 2: Now browser requests bundle.js which has react code and app dependent files.

step 3: Now Our React App code will be initialised and loads data from backend.

step 4: After successful of above steps, Content will be visible to user.

At initial load, client side react application needs some time to render our app.

### Server Side Rendering

To avoid above situations and to show UI at initial load, Server side rendering are used.



