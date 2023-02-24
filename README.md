# vue
vue前置学习
![image-20230224110145214](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224110145214.png)

# es6模块化

node.js遵循了commonJS的模块化实现

- 导入其他模块使用requires()方法
- 模块对外共享成员使用module.exports对象

模块化的好处：

大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己

![image-20230224111307501](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224111307501.png)

es6模块化规范是浏览器端与服务器端通用的模块化开发规范。他的出现极大的降低了前端开发者的模块化学习成本，开发者不需要额外学习amd、cmd或commonjs等模块化规范。

定义

- 每个js文件是一个独立模块
- 导入其他模块import
- 共享模块export

在node.js体验es6模块化

node.js默认仅支持commonjs模块化规范，基于nodejs体验学习模块化需要进行如下步骤：

1. 确保安装了v14.15.1及以上版本的node.js
2. 在package.json的根节点中添加"type":"module"节点



![image-20230224112006894](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224112006894.png)

npm init -y初始化包管理器生成package.json

![image-20230224112705151](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224112705151.png)

es6模块化用法：

- 默认导入和默认导出 export default||import 名称 from 模块
  - 默认导出只能存在一个，导入只要合法名称可以任意命名
- 按需导入和导出 export 按需导出的成员export 对象||import {}from 模块
  - 每个模块可以使用多个按需导出
  - 导出导入名称对应
  - as重命名，原名称失效
  - 按需导入和默认导入可以一起使用
- 直接导入并执行模块中的代码

# promise

![image-20230224132514197](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224132514197.png)

1. #### promise是一个构造函数

   1. 我们可以创建promise的实例const p=new promise()
   2. new出来的peomise实例对象，代表一个异步操作

2. #### promise.prototype上包含一个.then()方法(console.dir(promise))

   1. 每一个new出来的实例对象都可以通过原型链的方式访问到.then()方法，例如p.then()

3. #### .then()方法用来预先指定成功和失败的回调函数

   1. p.then(成功的函数,失败的函数)
   2. p.then(result=>{},error={})
   3. 调用.then()方法时，成功的函数必选，失败的函数可选

### 基于回调函数按顺序读取文件内容

![image-20230224135209846](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224135209846.png)

npm i then-fs 安装then-fs

![image-20230224135359440](C:\Users\14280\AppData\Roaming\Typora\typora-user-images\image-20230224135359440.png)

上述代码无法保证文件的读取顺序，需要做进一步改进

#### then方法的特性

如果上一个.hen()方法中返回了一个新的promise实例对象，则可以通过下一个.then()继续进行处理。通过.then()方法的链式调用，就解决了回调地狱的问题

then-fs同时使用两个readFile会根据链式调用，先调用两个方法的头节点然后依次遍历两个链表（交叉遍历，而不是先后遍历）

### .catch捕获异常

捕获异常会抛弃在.catch()之前的.then()方法，.catch()之后的方法不受影响

### promise.all()方法

promise.all()方法会发起并行的promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then()操作（等待机制）。

### race()方法

发起并行的promise异步操作，只要如何一个异步操作完成，就立即执行下一步.then()操作（赛跑机制）。

### 基于promise封装读文件的方法

要求

1. 方法的名称为getFile
2. 方法接收一个形参fpath，表示要读取的文件的路径
3. 方法的返回值为promise实例对象

创建具体的异步操作，则需要在new promise()构造函数期间，传递一个function函数，将具体的异步操作定义到function函数内部。

### 获取.then的两个实参

通过.then()指定的成功和失败的回调函数，可以在function的形参中进行接收

# async/await

async/await是es8引入的新语法，用来简化promise异步操作。在async/await出现之前，开发者只能通过链式.then()方法处理promise异步操作。

1. 方法内使用了await，方法必须被async修饰
2. 在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行

