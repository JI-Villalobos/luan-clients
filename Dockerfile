FROM node:18

COPY [".", "/usr/src"]

WORKDIR /usr/src

RUN yarn install

EXPOSE 3000

VOLUME [ "/usr/src", ]

CMD ["yarn", "dev"]