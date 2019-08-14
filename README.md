"# nodejs-restapi" 

Node.js + express + MySQL

Simple CRUD System (only server side)

</br></br></br>
<b>How To Used:</b>

git clone https://github.com/avi-aminov/nodejs-restapi.git

npm install

</br></br>
<b><i>Create DB</i></b>

<code>
CREATE TABLE IF NOT EXISTS `clients` ( 
  `clientId` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(10) NOT NULL, 
  `lastName` varchar(10) NOT NULL, 
  `age` varchar(3) NOT NULL, 
  `adress` varchar(50) NOT NULL,
  `dateEntered` datetime NOT NULL,
  PRIMARY KEY (`clientId`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8; 
</code>

</br></br>
<b><i>configuration DB cnnection in clients model</i></b>

<code>
const db = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '',
	database : 'restapi'
});
</code>
