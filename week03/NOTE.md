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

### JavaScript 构成
* Atom 原子性
* Expression 表达式语法
* Statement 声明式语法
* Structure 结构
* Program/Module 项目/模块

#### Atom
##### 语法
* 简单语句
    * Expression Statement 表达式语句
    * Empty Statement 空语句
    * Debugger Statement 调试模式语句
    * Throw Statement 抛异常语句
    * Continue Statement 继续执行语句
    * Break Statement 中断执行语句
    * Return Statement 返回语句
* 组合语句
    * Block Statement 块语句
    * If Statement if 条件判断语句
    * Switch Statement switch 条件判断语句
    * Iteration Statement 迭代语句
    * With Statement with 语句
    * Labelled Statement 标签化语句
    * Try Statement try 异常语句
* 声明
    * Function Declaration 函数声明
    * Generator Declaration 生成器声明
    * Async Function Declaration 异步函数声明
    * Async Generator Declaration 异步生成器声明
    * Variable Declaration 变量声明
    * Class Declaration 类声明
    * Lexical Declaration 词法声明
#### 运行时
* Completion Record 完成时记录
    * [[type]]: normal, break, continue, return, or throw
    * [[value]]: Types
    * [[target]]: label
* Lexical Environment 词法环境

## Object In JavaScript
在 JavaScript 运行时，原生对象的描述只需要关注`原型`和`属性`两个部分

### Object 包括
* Function Object 函数对象
* Special Object 特殊对象，包括Array, Object.prototype
* Host Object 宿主对象 


