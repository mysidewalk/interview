Overview
========

Create an automated solution for the installation and configuration of a PostgreSQL instance on a Linux distribution of your preference.

Please leverage any scripting or configuration management tool that best suit implemention of the requirements.

Any prerequisites to running your script/solution should be clearly defined (e.g. name of linux distribution used, configuration management tool required, package repositories required, and any other idiosyncracies beyond a base installation of the given linux distro)

Requirements
------------

Configure the PostgreSQL instance such that:

  - it is running version 9.3.x of PostgreSQL
  - a tablespace exists named "pgdata"
  - a database exists named "demodb"
  - the "demodb" database has a PostGIS extension version 2.0 or higher enabled
  - a user named "testuser" owns and has full access to the "demodb" database
