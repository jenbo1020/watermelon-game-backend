FROM node:16

# 开始编译代码并移动文件
RUN npm config set registry https://registry.npmmirror.com

# npm install
ADD package*.json /src/
WORKDIR /src
RUN npm i


# build
ADD . /src
RUN npm run build

RUN rm -rf /app \
    && mv dist /app \
    && mv node_modules /app/ \
    && rm -rf /src

EXPOSE 3000

WORKDIR /app
CMD node index.js
