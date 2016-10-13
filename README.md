# CSE 5335 Project 1

This project establishes the client server components of a state-of-the-art web application using node.js, angular.js and REST.

Student Name: Ashutosh Atre
Net ID: 1001178274

### What server framework did you choose and why?
> I used Node.js as a server framework. As described in the assignment description, recommended choices for Heroku supported technology were Ruby on Rails and Node.js. I wanted to learn Node.js for a long time and this project provided a perfect background to start learning. Therefore, I chose Node.js over other technologies. 


### What client framework did you choose and why?
> I used Angular.js as a client framework. Angular is widely used client side JavaScript framework in the industry (both enterprise as well as open source community). Also jQuery is industray basic JS frameework these days. So, I chose to learn Angular with this project.


### What aspect of the implementation did you find easy, if any, and why?
>  I particularly find two-way binding of angular easy. There are many powerful data binding techniqus and varities such as ng-if, ng-repeat, ng-show, ng-hide ng-click etc. This is really powerful and easy to use.


### What aspect of the implementation did you find hard, if any, and why?
>  I particularly find npm hard to understand initially. For example, in order to host files css and js as per recommended structure and then render it was particularly hard for me. 


### What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?
>  I used following components on client side for developing UI.
  
  * Bootstrap: Bootstrap is responsive CSS design templating engine developed at Twitter. I used this to make UI for this project responsive and nice looking.
  * Google Maps: To display locations data on a google map, I used google maps JavaScript API.
  * jQuery: Google Maps API is dependent on jQuery therefore, I included jQuery as well in this project.

>  I used following components on server side along with node.js
  
  * express: I used express along with node to host the static files.
  * body-parser: I used this to parse in requests and responses for REST APIs.


### What Ubuntu commands are required to deploy and run your server?
>  Following are the steps to execute this project on any machine irrespective of OS. I am assuming Node.js and NPM is already installed. There are no specific commands for ubuntu, if node and npm is already installed.

  1. Copy all the files to a folder. Let's Assume 'project1'
  2. Open Node JS command line
  3. Traverse to the path of 'project1' folder on the disk.
  4. Use this command 'npm install'. This will install all the dependencies.
  5. Use this command to start the server 'node server.js'
  6. Now the web application is accessible at 'localhost:8081'. Open it in any browser.
