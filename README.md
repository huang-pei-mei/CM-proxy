# AUDIBLE REVERSE PROXY
![gif1](https://giphy.com/embed/s6irU9RR1V4p0PbxSh)

---

## Table of Contents

1. [Overview](#overview)
2. [Related Projects](#relatedProjects)
3. [Development](#development)

---

## Overview {#overview}

### Background

>This is a group project with an emphasis on service oriented architecture. Each team member (4) was assigned one or two services for the audibles.com product page.
The services were created in React, node/express, and MonogoDB or Mysql.
These services were then combined using a reverse proxy.

### Role

- Created the Title service to serve up the title, information, image, audio sample, and background image
[see service](https://github.com/huang-pei-mei/title-service)

- created the proxy to combine the page

- implemented page load improvements including gzip compression and lazy loading

## Related Projects {relatedProjects}

 - [Title Service](https://github.com/huang-pei-mei/title-service) (my service)
 - [Price Service](https://github.com/huang-pei-mei/price-service)
 - [Also Enjoyed Service](https://github.com/huang-pei-mei/also-enjoyed-service)
 - [Summary Service](https://github.com/huang-pei-mei/FEC-Publishers-Summary)
 - [Aggregate Reviews Service](https://github.com/huang-pei-mei/FEC-Agg.Review)
 - [Reviews Service](https://github.com/huang-pei-mei/reviews-service)

## Database
  Seed the database by running 'seed-db'
  this will populate three tables

  Books
  Categories
  Book_Category
    - this table is a join table for the many to many relationship between Books and Categories

  MODELS:
  - Book.js
     contains several methods:
     * getById - takes in a single ID and returns a single book including the category through sequelize eager loading
     * getByIds - takes in an array of IDs and returns an array of book objects including category through sequelize eager loading
     * getRelatedById - takes in an id and returns an object containing
     {byAuthor: [], byNarrator: []}
     this method will not include the original input book in either list
     it will also not include books by the original book's author in the byNarrator list

## API
> The API contains three routes:
   - /api/book/{id}
       * returns a single book
   - /api/books
       * takes in json 'ids' - an array of ids
       * returns an array of book objects
   - /api/book/{id}/related
       * returns an object containing related books
       * {byAuthor: [], byNarrator:[]}



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

