## Install Typescript Globally

$ sudo npm install -g typescript
$ npm install --location=global typescript

## For WIN only

1. open PowerShell as Adminsitrator
2. run "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned"

## To verify

$ tsc -v

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
