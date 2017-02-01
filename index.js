var fs = require("fs")
/**
 * 常用单位转换输出
 * @param  number byte 文件字节长度
 * @return string
 */
var normal = function(byte){
    var f = byte / 1014
    var tmp = 0
    if(f > 1){
        tmp = f / 1024
        if(tmp > 1){
            f = tmp
            return f.toFixed(2) + 'MB'
        }else{
            return f.toFixed(2) + 'KB'
        }
    }else{
        return byte + 'B'
    }
}

var checkFile = function(file, options){
    var subpath = file.subpath
    var length = file.getContent().length
    if(length > options.maxSize) {
        process.stdout.write(
          '\r Checkup warning -'.red.bold +
          subpath.replace(/^\//, '') +
          ' >> '.red.bold +
          normal(length) +
          '\n'
        );
    }
}

module.exports = function(options, modified, total, next){
    modified.forEach(function(file){
        checkFile(file, options)
    })
    next()
};