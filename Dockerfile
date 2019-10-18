FROM node
RUN mkdir /api
WORKDIR /api
COPY ./ /api
RUN npm install
EXPOSE 3000
CMD ["node", "app/index.js"]