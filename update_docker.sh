#!/bin/bash

docker stop my-nodejs-webapp

docker rm my-nodejs-webapp

docker build -t nodejs-webapp-container .

docker run -p 3000:3000 --name my-nodejs-webapp nodejs-webapp-container