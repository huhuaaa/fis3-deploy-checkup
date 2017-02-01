# fis3-deploy-checkup

>fis3的deploy插件,用于检验发布脚本的资源大小校验。

## install

```
npm install -g fis3-deploy-checkup
```

##  config

```
fis.media("**.js", {
    deploy: fis.plugin("checkup", {
        maxSize: 1024
    })
})
```