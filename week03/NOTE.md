# 第三周总结
## Javascript 数据类型
* Number
* String 
* Boolean
* Object
* Undefined
* Null
* Symbol

### Number 语法
* Decimal Literal 十进制字符
* Binary Integer Literal 二进制整数字符
* Octal Integer Literal 八进制整数字符
* Hex Integer Literal 十六进制整数字符

#### Number 练习
[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

`Number.MAX_SAFE_INTEGER` 常量表示在 JavaScript 中最大的安全整数（maxinum safe integer)（253 - 1）。

`MAX_SAFE_INTEGER` 是一个值为 9007199254740991的常量。因为Javascript的数字存储使用了IEEE 754中规定的双精度浮点数数据类型，而这一数据类型能够安全存储 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 之间的数值（包含边界值）。

`Number.MAX_SAFE_INTEGER.toString(16) = 1fffffffffffff`

### String 语法
* Character 字符
* Code Point 码点
* Encoding 编码

#### 例如
字符 a，对应的码点是97，对应的二进制编码是1100001
> 二进制、八进制、十进制都是用数字表示，十六进制是用数字和字母来表示

在将一个字符转为十六进制或者八进制时，都需要先获取码点，然后将码点转换为所需的进制

#### String 码点
* ASCII
* Unicode
* UCS
* GB
    * GB2312
    * GBK(GB13000)
    * GB18030
* ISO-8859
* BIG5
#### String 语法
* "abc" 双引号
* 'abc' 单引号
* \`abc\` 反引号


