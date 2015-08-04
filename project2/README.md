This is a very basic web app. It has two views: / and /upload. Both print simple HTML with no interactivity between the client and the server. 

This was an exercise for myself to see how much code I could write excludively from memory to make a working web app. I got about 75% or 80% of it... 

Basically what I need to remember is the following:
- the file that node launches (``index.js``) needs to start the server.
- when the server starts, it needs to be given any *routers* or *response handlers* it needs... by ``index.js``.
  - *request handler* is a fancy term for a function that determines how the server responds to a request. 
  - a *router* is a function that determines which request handler needs to be called, given some basic info about a server request.
- when the server is running, it needs to have what's called a call-back (callback?) function
  - this callback function is sort of what makes the server "do something" when someone tells it something (i.e. sends it a request)
  - it does the following:
    - it first gets basic info about the request (e.g. what was in the URL? was POST data included in the request? etc)
    - it then calls a function that "routes" the request, giving that function the basic info and a set of request handlers.
- this "router" function then determines what to do with the response based on the basic info
  - to be specific, the router chooses which response handler function should be called based on the info provided by the server's callback function
  - the "router" contains the logic for deciding "what to do" when a request comes. 
    - Each request handler is a potential "thing to do". The router decides which one will be pursued, based on the info it's given about a request.
  - It also handles errors, e.g. if the server gets a nonsense request. This is where 404 errors are made :) 
- after the router calls the request handler, the action happens
  - the request handler processes what the server returns to the client - i.e., the "response"
    - in this example app, this includes what HTML to deliver to the client's browser

