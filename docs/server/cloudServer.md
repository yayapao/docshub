---
id: cloudServer
title: Cloud Server
sidebar_label: CloudServer
slug: /cloudServer/
---

## 通用技能

### 进程服务

**启停服务**

- `service --status-all` 查看所有服务
- `service [server-name] stop` 停止服务
- `service [server-name] start` 启动服务
- `service [server-name] restart` 重启服务
- `service [server-name] status` 查看服务状态

---

**TOP 查看当前系统运行情况**
`top` 查看当前系统进程信息，也可以通过 `ps -aux` 来查看

按照内存占用排序：按下 `M`

按照 CPU 占用排序，按下 `P`

---

**Client 的 url 工具 -- curl**
执行 `curl https://www.xxx.com` 就可以发出一个 GET 请求，服务器返回值会在命令行内输出

- `-A` 表示请求头内 `user-agent`
- `-H` 表示请求头
- `-b` 用来像服务器发送 cookie，比如 `curl -b 'key=value' https://www.xxx.com`
- `-d` 用来表示 post 请求的 body 内容
- `-G` 用来构造 URL 的查询参数，比如 `curl -G -d 'key1=v1' -d 'k2=v2' https://www.xxx.com`，表示发送一个 GET 请求，`https://www.xxx.com?key1=v1&key2=v2`，如果不指定  -G，则会发送一个 POST 请求


### 格式化时间

`time=$(date "+%Y%m%d-%H%M%S")` 格式化当前时间，注意 `date` 后面加空格



### 解决端口占用

**查看端口占用情况**

`ps` 查看系统内进程，可以看到 pid 信息

- `ps -e` 展示所有进程
- `ps -aux` 显示所有包含其他使用者的进程

`lsof` （list open files）列出当前系统打开文件的工具

- `lsof -i:3000` 查看 3000 端口占用情况

`netstat -tunlp` 用于显示 tcp，udp 的端口和进程等相关情况

- `t(tcp)` 展示 TCP 相关的选项
- `u(udp)` 展示 UDP 相关的选项
- `n` 拒绝显示别名，能显示数字则展示数字
- `l` 列出在 Listen 的服务状态
- `p` 显示相关链接的程序名 

上述命令结合 `grep` 来查找指定信息

执行 `kill -9 [pid]` 来关闭指定 pid 的进程


### 文件可执行权限

系统内，读、写和可执行权限对应的数字如下所示：

- `r(read)` = 4
- `w(write)` = 2
- `x(execute)` = 1
- no permissions = 0

权限的设置实际上就是上面的数字求和，比如：

- 7(4 + 2 + 1) 读、写、可执行

为文件设置最高权限，在文件的上级目录内执行 `sudo chmod -R 777 [targetFileName]`， `-R` 表示递归（recursive），即所有子文件同步设置权限


### 目录相关

1. `cd ～` 进入当前用户目录，`cd /` 进行系统根目录
2. `ls -al` 查看目录下文件的详细信息
3. `du -sh *` 查看每个目录的大小


## shells


### 命名规则

命名只能使用英文字母，数字和下划线，首个字符不能以数字开头

中间不能有空格，可以使用下划线

不能使用标点符号

不能使用bash里的关键字（可用help命令查看保留关键字）


### 文件操作

1. `pwd` 打印当前文件路径
2. `find -name [name]` 全局搜索
3. `whereis [filename]` 查看路径
4. `mkdir [filename]` 在当前目录下创建一个文件夹
5. `rm -rf [filepath]` 删除指定目录下的文件夹及其目录下的所有文件
6. `rm -f [file]` 删除文件
7. `cp [filename] [path]` 复制指定文件到指定目录
8. `mv filename newfilename` 重命名文件或者文件目录

**压缩 / 解压文件**

1. `zip -r xxx.zip xxx` 压缩指定文件夹为 .zip 文件
2. `unzip xxx.zip` 直接解压指定文件，输出到当前目录
3. `zip xxx.zip 1.txt 2.txt` 将 1.txt 和 2.txt 压缩为 xxx.zip
4. `unzip xxx.zip -d /home` 将 xxx.zip 解压到 /home 目录下

<b>通过 tar 命令</b>

- `tar -zcvf target.tar.gz [package files]` 进行压缩
- `tar -zxvf target.tar.gz` 解压文件


### 创建并行命令

例如两个命令 `npx babel src --watch --out-dir dist` 和 `npx nodemon dist/index.js` 都不会主动退出，会继续保持，监听相应文件的变化

此时如果希望在一个脚本是同时执行上面的两个命令，只需要用到并行命令

一个解决方案是：将 `&` 放在一个命令末尾，可以将这个命令放到后台执行。放到后台后主进程将继续向下执行，后台命令将与主进程并行执行

与 `&` 相对，将 `&&` 放在一个命令末尾，与什么都没有单纯换行实际效果相同，等待这个命令执行完后才继续执行下面的命令


### 获取传参

`$?` 获取上一步返回参数

变量是一个键值对，直接访问变量名返回的是变量名，通过 `${变量名}` 访问其值

```sh
name = "YlonelY"
# 通过 ${...} 使用变量
echo ${name}
# readonly 设置变量只读
readonly read_name = "cool"
# 删除变量，只读变量不能删除
unset name
# 定义数组，通过换行或者空格进行分隔
array=(value0 value1 value2 value3)
# 获取元素个数
length=${#array[*]}
# 获取所有元素
${array[*]}
# 获取元素值
valuen=${array[n]}
```


### Function

1. 函数传参通过空格进行分隔
2. 函数内通过 `$` 来获取传递参数，比如 `$1` 用来获取第一个传参

```sh
# declare function
# 3 params 1. title 2. array options 3. array's length
function READ_USER_INPUT() {
  title=$1
  options=$2
  maxValue=$3
  echo "${title}"
  for option in ${options[*]}; do
    echo "${option}"
  done
  read sort
  return ${sort}
}

# call the function
options_value=("1.start" "2.stop" "3.list")
READ_USER_INPUT "this is title" "${options_value[*]}" ${#options_value[*]}

# get the return value
option_select=$?
```

### 大小判断

大于(greater than) `-gt`

小于(less than) `-lt` 

大于或等于(greater than or equal) `-ge`

小于或等于(less than or equal) `-le`

不相等(not equal) `-ne`

### 类型判断

**数字类型判断**

```sh
# 判读输入值是否为一个数字，如果为0，则证明是一个数字类型
expr $sort "+" 10 &> /dev/null
if [[ $? -eq 0 ]]; then
	# statements...
```

**字符串判断**

```shell
a="abc"
b="cde"

# = / != 判断是否相等
[$a=$b]

# -z 判断字符串长度是否为 0
[-z $a]

# -n 判断字符串长度是否不为 0
[-n $a]

# $ 判断字符串是否为空
[$a]
```

### if elif 判断

`fi` 用于终止代码块

```sh
if [[ $option_select -eq 1 ]]; then
	# statements...
elif [[ $option_select -eq 1 ]]; then
	# statements...
fi
```



## 常用工具

### VIM

命令模式:


[删除]
- `dd` 快速删除当前行
- `ndd` 比如 `3dd` 开始删除当前三行内容

[复制]
- `yy` 快速复制当前行
- `nyy` 快速复制当前 n 行内容
- `p` 粘贴内容
- `ggdG` 删除所有内容，`gg` 光标置于首行，`d` 删除，`G` 光标置于文件末尾行

[回退]
- `u` 回退内容

[搜索]
- 通过 `/` 进入搜索模式，通过 `n/N` 来跳转到下一个/上一个


### wget

`wget --version` 查看是否安装 wget

wget 是一个从网络上自动下载文件的自由工具，支持通过 HTTP、HTTPS、FTP 三个最常见的 TCP/IP协议 下载，并可以使用 HTTP 代理

ubuntu 通常内置 `yum` 和 `apt-get`

- `apt-get update`
- `apt-get install xxx`

### FTP 服务

[Linux 云服务器搭建 FTP 服务](https://cloud.tencent.com/document/product/213/10912)

两个 FTP 客户端工具
- [Cyberduck](https://cyberduck.io/)
- [FileZilla](https://filezilla-project.org/download.php?platform=osx)


### Node.js

<b>建议通过 [volta](https://github.com/volta-cli/volta) 来管理 node.js 的环境</b>

这里同样介绍常规 node.js 环境的搭建步骤

这里以安装 node 环境为例进行说明，其他环境的安装类似，可以参考[自定义安装](https://cloud.tencent.com/document/product/213/38237)

- `cd root` 进入根目录
- `wget https://nodejs.org/dist/v12.13.1/node-v12.13.1-linux-x64.tar.xz` 下载安装包
- `tar xvf node-v12.13.1-linux.tar.xz` 解压 node 文件
- `ln -s /root/node-v12.13.1-linux-x64/bin/node /usr/local/bin/node` 建立 node 命令的软链接
- `ln -s /root/node-v12.13.1-linux-x64/bin/npm /usr/local/bin/npm` 建立 npm 命令的软链接


### 软硬链接

在上文中，我们通过软链接来做了一个指向绝对路径的“快捷方式”，这里我们简单区分一下软/硬链接的概念：

- 硬链接：其 `inode`(可以理解为指针) 都指向同一个文件在内存中的区块，这意味着改变链接文件，另一个文件也会同步改变，`ln file hard`
- 软链接：保存了其代表文件的绝对路径，在内存上有自己独立的区块，访问时会替换自身路径


## QA

Q1: 服务器上，安装 pm2 时，npm install 卡在 sill install loadIdealTree？

```
1. 更换 npm 源 `https://registry.npm.taobao.org/` 
2. 删除 package-lock.json, node_modules 后，重新安装
```

Q2: [NPM not installing package. Hostname/IP address doesn't match certificate's altnames?](https://stackoverflow.com/questions/52128212/npm-not-installing-package-hostname-ip-address-doesnt-match-certificates-altn)

```shell
# 获取 www.npmjs.com ip
dig www.npmjs.com @1.1.1.1
# 配置 hosts 文件
vim /etc/hosts

104.16.92.83 registry.npmjs.org

# 或者更换源，注意 http/https 区别
npm config set registry http://registry.npmjs.org
```

Q3: 在服务器上拉取代码特别慢？

```
解决思路类似 Q2，通过配置 hosts 来指定 ip
通过 https://fastly.net.ipaddress.com/ 来查看：
1. github.com
2. github.global.ssl.fastly.net
的 ip 地址

之后将其添加到 hosts 文件内，最后执行 `sudo /etc/init.d/network restart` 刷新设置
```

Q4: 如何查看 npm 全局的安装路径？

```shell
# 通过 npm 配置信息进行查看
npm config get registry
```