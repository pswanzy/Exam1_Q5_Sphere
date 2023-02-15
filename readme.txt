If using windows powershell, make sure to initialize npm and the each modules needed.
PowerShell must be started with admin privileges in order to execute nodemon install successfully, see line 6.
//jshint esversion:6
//$ npm init (go through init process to create package.json)
//$ npm i express
//$ set-executionpolicy unrestricted (run as admin, using windows)
//$ npm i -g nodemon
//$ npm i body-parser (parse data, to use in forms for ex)

Then using this line, start the server:
//$ nodemon index.js

Access server:
https://Exam1Q5Sphere.pswanzy.repl.co/VolCalc