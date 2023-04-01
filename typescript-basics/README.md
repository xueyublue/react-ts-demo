## Install Typescript Globally

<code>sudo npm install -g typescript</code>

<code>npm install --location=global typescript</code>

## For Windows only

- Open PowerShell as Adminsitrator.
- Execute command: <code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned</code>

## To verify if typescript installed correctly

<code>tsc -version</code>

## Compile Typescript File

### Same filename with extension .js will be created under same folder

Option 1: <code>tsc index.ts</code>

Option 2 (watch mode): <code>tsc --watch index.ts</code>

## Create tsconfig.json

<code>tsc init</code>

### Now you can modify outDir and rootDir as needed, and then run below command to compile all files under src folder:

<code>tsc</code>

## Run Compiled Javascript file

<code>cd ./dist</code>

<code>node index.js</code>
