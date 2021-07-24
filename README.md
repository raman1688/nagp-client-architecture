# rimss-casestudy

Deployment Steps:

The project consists of Shop, Cart, Dashboard, Auth modules which can run independently of different ports:
And the main application will run on the “Container” module which will run on https://localhost:8080.

The project structure is as follows:

Packages
-	Cart
-	Shop
-	Container
-	Dashboard
-	Auth

1.	To run Cart follow following steps:
a.	Go to “cart” folder
b.	Run “npm install”
c.	Run “npm start”
d.	Make sure the application is running on http://localhost:8084 

2.	To run Shop follow following steps:
a.	Go to “shop” folder
b.	Run “npm install”
c.	Run “npm start”
d.	Make sure the application is running on https://localhost:8081 

3.	To run Dashboard follow following steps:
a.	Go to “dashboard” folder
b.	Run “npm install”
c.	Run “npm start”
d.	Make sure the application is running on https://localhost:8083 

4.	To run Auth follow following steps:
a.	Go to “auth” folder
b.	Run “npm install”
c.	Run “npm start”
d.	Make sure the application is running on https://localhost:8082 

5.	To run Container follow following steps:
a.	Go to “container” folder
b.	Run “npm install”
c.	Run “npm start”
d.	Make sure the application is running on https://localhost:8080 
 

The site is also built and deployed in production environment in following url: 
https://d2i0cep6siore0.cloudfront.net/ 

The CI/CD pipeline is configured using “github Actions” under following repository:
https://github.com/raman1688/rimss-casestudy

The new build is triggered as soon as some code is pushed in the master branch for respective package folders and changes are deployed on AWS.
