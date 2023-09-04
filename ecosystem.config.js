/**
 * Author: Meng
 * Date: 2023-
 * Desc: 启动文件
 * https://pm2.fenxianglu.cn/docs/general/deployment-system
 * 
 * pm2 ecosystem 在当前项目下生成配置文件
# Start all applications
pm2 start ecosystem.config.js
# Stop all
pm2 stop ecosystem.config.js
# Restart all
pm2 restart ecosystem.config.js
# Reload all
pm2 reload ecosystem.config.js
# Delete all
pm2 delete ecosystem.config.js

重新启动应用程序：
$ pm2 restart api
$ pm2 restart all
$ pm2 restart app1 app3 app4 // 启动多个应用
停止指定的应用程序：
$ pm2 stop api
$ pm2 stop [process_id]
$ pm2 stop all
删除应用程序：
$ pm2 delete api
$ pm2 delete all
列出应用程序
$ pm2 list
$ pm2 [list|ls|l|status]
监控内存和CPU：
$ pm2 monit
查看应用程序数据：
$ pm2 show [id|name]

pm2 deploy ecosystem.config.js prod setup
pm2 start ecosystem.config.js --env prod
$ pm2 start process.json --env prod
$ pm2 restart process.json --env test
 */

module.exports = {
  apps: [{
    name: "nestshop",
    script: "./dist/main.js",
    // instances: 2,
    // exec_mode: "cluster",
    // watch: true,
    // increment_var: 'PORT',
    env: {
      PORT: 8097,
      NODE_ENV: "test"
    },
    env_prod: {
      PORT: 80,
      NODE_ENV: "prod"
    },
    env_test: {
      PORT: 8097,
      NODE_ENV: "test"
    }
  }],
  // 部署配置
  deploy: {
    test: {
      // key: "/path/to/some.pem", // path to the public key to authenticate
      user: "root",              // 登录远程服务器的用户名
      host: "10.19.18.37",    // 远程服务器的IP或hostname，此处可以是数组同步部署多个服务器
      ref: "origin/main",    // 远端名称及分支名
      repo: "git@gitee.com:dx_meng/qinglan-nest.git", // git仓库地址
      path: "/home/nestshop/server/test", // 远程服务器部署目录，需要填写user具备写入权限的目录
      'post-deploy': "pm2 startOrRestart pm2.json --env test", // 部署后需要执行的命令，
      env: {
        NODE_ENV: "test"
      }
    }
  }
}

