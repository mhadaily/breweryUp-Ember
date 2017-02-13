# brewery-up-ember

This is a single page application based on brewerydb.com api. 
More details will be provided soon. [READL DEMO ON AMAZON S3](http://brewery-up-ember.s3-website-eu-west-1.amazonaws.com/)

##### Note: Please review MySolution section down below. and check out the server repository. 

## Docker

* Run build and up: `docker-compose up`, then you are ready to use `http://localhost:4210`

if watchman is running out of resources trying to track all the files in a large ember app. To increase the fs.inotify.max_user_watches count to something that is more appropriate for an ember app, stop your docker-compose server by hitting ctrl-c (or docker-compose stop server if necessary) then execute the following command:
````commandline
docker run --rm --privileged --entrypoint sysctl breweryupember_dev -w fs.inotify.max_user_watches=524288
````
your app folder is mounted to docker container so you can easily start developing. 

Alternatively, if you are willing to run on your local machine just follow the steps below:

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [watchman](https://facebook.github.io/watchman/docs/install.html)

## Installation

* `git clone git@github.com:mhadaily/breweryUp-Ember.git` this repository
* `cd breweryUp-ember`
* `npm install` or `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This application has 3 environment for deployment

1- Development
2- Staging
3- Production 

simply run the following command:

```commandline
AWS_ACCESS_KEY_ID=[yours] AWS_SECRET_ACCESS_KEY=[yours] ember deploy production --activate=true
```
you are able to to deploy to S3 in Production environment. All build, revision, Gzip and other pipeline for deployment 
has been done and will be deploy automatically. ENJOY!

## CORS issue
Answer from BreweryDB:

We don't currently support any type of AJAX calls or JSONP to the API for security reasons. You'd have to expose your API key to the public in your JS and that wouldn't be good.  Steve's recommendation to proxy your AJAX calls through your server is the one we also suggest.

### My solution 
I have created what I need for my project through API Gateway and Lambda in AWS. Please visit [my server repo](https://github.com/mhadaily/breweryUp-Node-Lambda)
```commandline
endpoints:
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}/breweries
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}/breweries/{brid}
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}/events
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}/yeasts
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers/{id}/ingredients
  GET - https://2wb03ukih6.execute-api.us-west-1.amazonaws.com/v2/beers
```

## TODO

**RESTSerializer**

The serializer in Ember for Beers only is done which is I need to complete and demonstrate this project.
However, I still need to work on `hasMany` and `belongsTo` for other models. 
Although I have partially done that, still need refinement until 100% ready. 
For now, I will finish project with simple ajax request for other part as soon as it they need. 

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

