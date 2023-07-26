// http = require("http");
// url = require("url");
// querystring = require("querystring");

// function onRequest(request,response){
//     var query = url.parse(request.url).query;
//     var name = querystring.parse(query)["name"];
//     var rno = querystring.parse(query)["rollnumber"];
//     var dept = querystring.parse(query)["department"]; 
//     var ccode = querystring.parse(query)["ccode"]; 
//     var cname = querystring.parse(query)["cname"]; 

//     response.write("Name: "+name+"\n");
//     response.write("Roll number: "+rno+"\n");
//     response.write("Department: "+name+"\n");
//     response.write("Course Code: "+ccode+"\n");
//     response.write("Course Name: "+cname+"\n");
//     response.write("Successfully Registered!");
//     response.end();
// }

// http.createServer(onRequest).listen(5000);













var http = require('http');
var querystring=require('querystring');
var qs,name,rno,dept,ccode,cname;
 http.createServer(function(req, res) {  
		var data1= '';
		
	req.on('data', function(chunk) {   
					console.log(chunk);
					data1 += chunk;  
					console.log("Data in String format: "+data1);
					});
	req.on('end', function() {
				console.log("Data: "+data1);
				
				qs=querystring.parse(data1);
				console.log(qs);

				name=qs['name'];
				rno=qs['rollnumber'];
                dept=qs['department']
                ccode=qs['ccode'];
                cname=qs['cname'];


		
				res.write("Name: "+name+"\n");
                res.write("Roll Number: "+rno+"\n");
                res.write("Department: "+dept+"\n");
                res.write("Course Name: "+cname+"\n");
                res.write("Course Code: "+ccode+"\n");
				res.end(); 
				});

	}).listen(5000);
