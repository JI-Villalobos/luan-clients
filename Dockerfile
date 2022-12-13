FROM node:18

COPY [".", "/usr/src"]

WORKDIR /usr/src

RUN yarn install

#ENV DATABASE_URL="mysql://fmipuebl_desarrollo:10144149MYTEST@fmipueblito.com:3306/fmipuebl_other_carlos_clients?useSSL=false"

#EXPOSE 3000

#VOLUME [ "/usr/src", ]

CMD ["yarn", "dev"]