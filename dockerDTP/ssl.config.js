/**
 * (C) Copyright Parasoft Corporation 2024. All rights reserved.
 */

var fs = require('fs');
module.exports = {
    enabled: true,
    options: {		 
		 key: fs.readFileSync("/usr/local/parasoft/dtp/tomcat/conf/_cert2026/yourPrivateKey.key"),
         cert: fs.readFileSync("/usr/local/parasoft/dtp/tomcat/conf/_cert2026/yourCertificate.crt")
    }
};
