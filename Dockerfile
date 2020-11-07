#Pull the image
FROM node:10.22

#create the app directory
WORKDIR /usr/src/app

#ensure the package.json and package-lock.json are copied
COPY package*.json ./

#Install app dependencies
RUN npm install

#Copy project
COPY . .

#Expose port
EXPOSE 8080

#runtime command
CMD ["npm", "run", "serve"]
