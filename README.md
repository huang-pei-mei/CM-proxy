# AUDIBLE REVERSE PROXY
![gif1](https://github.com/huang-pei-mei/CM-proxy/blob/master/gifs/01.gif)
![gif2](https://github.com/huang-pei-mei/CM-proxy/blob/master/gifs/02.gif)

---

## Table of Contents

1. [Overview](#overview)
2. [Related Projects](#related-projects)
3. [Installation](#installation)

---

## Overview

### Background

This is a group project with an emphasis on service oriented architecture. Each team member (4) was assigned one or two services for the audibles.com product page.
The services were created in React, node/express, and MonogoDB or Mysql.
These services were then combined using a reverse proxy.

### Role

- Created the Title service to serve up the title, information, image, audio sample, and background image
[see service](https://github.com/huang-pei-mei/title-service)

- generate and serve data for 100 books

- created the proxy to combine the page

- deployed to ec2 and s3

- implemented page load improvements including gzip compression and lazy loading

- ticketed all work through trello and lead daily standups

## Related Projects

 - [Title Service](https://github.com/huang-pei-mei/title-service) (my service)
 - [Price Service](https://github.com/huang-pei-mei/price-service)
 - [Also Enjoyed Service](https://github.com/huang-pei-mei/also-enjoyed-service)
 - [Summary Service](https://github.com/huang-pei-mei/FEC-Publishers-Summary)
 - [Aggregate Reviews Service](https://github.com/huang-pei-mei/FEC-Agg.Review)
 - [Reviews Service](https://github.com/huang-pei-mei/reviews-service)


## Installation

a .nvmrc file has been included

`npm install`

`npm run server-dev`

*the current version of this proxy connects to deployed s3 buckets for each service. the avalibility of these deployed servers is not guarenteed. It is roccommended to download the related projects and link to the local bundles for development*