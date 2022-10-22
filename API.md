# 接口文档

## 目录：

[1、注册](#1注册)<br/>
[2、登录](#2登录)<br/>
[3、退出登录](#3退出登录)<br/>
[4、获得用户数量](#4获得用户数量)<br/>

## 接口列表：

### 1、注册

#### 请求URL:  
```
/user/register
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userName      |Y       |String  |用户名 |
|password      |Y       |String  |密码 |
|secondPassword      |Y       |String  |确认密码 |
|email      |Y       |String  |邮箱 |
|isAccept      |Y       |Boolean  |是否同意服务协议，true：同意，false：不同意 |

#### 返回示例：

```javascript
{
  "code": 200,
  "message": "用户注册成功"
}
```

### 2、登录

#### 请求URL:  
```
/user/login
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userName      |Y       |String  |用户名 |
|password      |Y       |String  |密码 |

#### 返回示例：

```javascript
{
  "code": 200,
  "message": "登录成功"
}
```

### 3、退出登录

#### 请求URL:  
```
/user/logout
```

#### 请求方式: 
```
POST
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "message": "退出成功"
}
```

###  4、获得用户数量

#### 请求URL:  
```
/user/count
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "message": "请求成功",
  "data": {
    "count": 3
  }
}
```