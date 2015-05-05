**Level One DevOps Test**

Complete the following goals in any desired toolset and/or scripting language:

**Objectives**

Automate the configuration of a set of local virtual machines to match the following setup. Ideally, this configuration will go from zero to provisioned in a single command:

Web Server:
- Running a common Linux distribution (Debian / Fedora / CentOS are ideal)
- Running nginx listening on port 8888
- The content served by nginx should be from the following URL: https://github.com/marr75/interview/tree/master/DevOpsEngineer/leveltwo/www
- The content should be served on the webserver from the subdomain "test", and the directory "leveltwo". Example on localhost would be: "http://test.localhost/leveltwo"

Logging Server:
- Receiving and archiving error and access logs from nginx on the Web Server 

Requirements:
- Submit working sample along with a short description on how to use the solution
- Answer the following questions in a few paragraphs
  - Why did you choose this solution?
  - What are the best and worst aspects of this solution?
  - Why would automating a task like this be helpful?
