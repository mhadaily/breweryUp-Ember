# brewery-up-ember

This is a single page application based on brewerydb.com api. 
More details will be provided soon. 

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

* `git clone <repository-url>` this repository
* `cd breweryUp-ember`
* `npm install`
* `bower install`

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

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
