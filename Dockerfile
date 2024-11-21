FROM node:16

# 开始编译代码并移动文件
RUN npm config set registry https://registry.npmmirror.com

# npm install
WORKDIR .
RUN npm i

EXPOSE 3000

CMD node index.js
