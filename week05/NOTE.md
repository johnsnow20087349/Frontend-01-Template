# 第五周总结
## 概念
* ISO-OSI网络协议



### ISO-OSI 七层网络协议
* 应用层 --> HTTP
* 表示层 --> HTTP
* 会话层 --> HTTP
* 传输层 --> TCP/UDP
* 网络层 --> Internet
* 数据链路层 --> 4G/5G/WIFI
* 物理层 --> 4G/5G/WIFI

TCP与IP的一些基础知识

* 端口

网卡会将数据包转发给具体的端口

* HTTP

HTTP是在TCP的基础上规定了一个request 和 response 模型，必须是一问一答，且是先问后答的模式

TCP 与 HTTP的区别：HTTP必须是一问一答的模式，且server端不得主动给客户端发送消息，而TCP协议则只能保证发送消息的顺序，对于服务端是否有消息回复并不保证，且服务端可以主动给客户端发送消息
