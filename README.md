# 考试微服务

1. answer 可以直接调用 exam 中的服务
2. libs 里面放着 redis 等公共服务
3. 可以生成 prisma 文档
- 执行 prisma generate
```js
generator docs {
  provider = "node node_modules/prisma-docs-generator"
  output   = "../generated/docs"
}

generator json {
  provider = "prisma-json-schema-generator"
  output   = "../generated/json"
}
```
4. 文件可读流接口返回
```js
 async getTxt() {
    const filePath = join(__dirname, '1.txt'); // 替换为你的文件路径
    const fileStream = createReadStream(filePath);

    return new StreamableFile(fileStream, {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      disposition: 'attachment; filename=exported-data.xlsx',
    });
  }
```
