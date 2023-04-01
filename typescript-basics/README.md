## Install Typescript Globally

<code>sudo npm install -g typescript</code>

<code>npm install --location=global typescript</code>

## For Windows only

- Open PowerShell as Adminsitrator.
- Execute command: <code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned</code>

## To verify if typescript installed correctly
<code>tsc -version</code>

## Compile typescript, same filename with extension .js will be created under same folder

$ tsc index.ts
$ tsc --watch index.ts

## Create tsconfig.json

$ tsc init
Now you can modify outDir and rootDir as needed, and then run below command to compile all files under src folder:
$ tsc

## Run Javascript file:

$ cd ./dist
$ node index.js
