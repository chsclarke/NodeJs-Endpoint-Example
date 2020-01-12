# NodeJs-Endpoint-Example
simple example of a containerized Node.js endpoint mimicking an interview question I was asked

## Installation
### Running locally without Docker Image

All packages used in this example are built in to Nodejs so there are no dependencies.

After [installing Nodejs](https://nodejs.org/en/download/), you are ready to go.

To run simply execute `node webserver.js` after cloning the repository.

Once the webserver is running on your local machine, go to url [`http://localhost:8080/weather?ID=1`](http://localhost:8080/weather?ID=1) to see the working example.

After starting the program and hitting the endpoint, expect an output similar to this:
```
>> Initializing server on port: 8080
>> Retrieiving data @ ID: 1
```

A successful hit to the endpoint will return a mock temp as JSON object.
An unsuccessful hit will return an error in JSON format as well.

#### Creating Docker Image from Dockerfile

Because the source code is finished and the docker file is complete, you only need to build the image using the docker CLI.

`$ docker build -t <your_username>/node-web-app .`

Finally, run the image and expose it to port 80.

`$ docker run -p 80:8080 -d <your_username>/node-web-app`

You can now access the webserver at [`http://localhost/weather?ID=1`](http://localhost/weather?ID=1)

A successful hit to the endpoint will return a mock temp as JSON object.
An unsuccessful hit will return an error in JSON format.

### Pulling Image from Docker Hub

First, pull my image from docker hub.

`$ docker pull chsclarke11/node-web-app`

Run the image and expose it to port 80.

`$ docker run -p 80:8080 -d chsclarke11/node-web-app`

You can now access the webserver at [`http://localhost/weather?ID=1`](http://localhost/weather?ID=1)

A successful hit to the endpoint will return a mock temp as JSON object.
An unsuccessful hit will return an error in JSON format.

## Usage

the REST service is functional only at the `/weather` endpoint. It accepts IDs 1, 2, and 3. All other inputs (or no inputs) will be handled with an error similar to the following: `{ "ERROR" : "tempId does not exist"}`. If you access an unknown endpoint you will be redirected to a 404 page (for those accessing this on a browser). Finally, index.html exists but has no content. Future iterations would involve displaying this readme on index.html

thank you!
