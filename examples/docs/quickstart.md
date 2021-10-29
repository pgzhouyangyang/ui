##  快速上手

### 引入组件
你可以完整引入整个ui， 或根据需要仅引入部分组件。

#### 完整引入
在 main.js 中写入以下内容：

```
import Vue from 'vue
import TzUi from "tzcx-ui"
import 'tzcx-ui/lib/tzui.css';
Vue.use(TzUi)
```



#### 按需引入
借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```
{
    "presets": [["es2015", { "modules": false }]],
    "plugins": [
        [
            "component",
            {
                "libraryName": "tzcx-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
```
import Vue from 'vue';
import { Ellipsis, Timer } from 'tzcx-ui';
import App from './App.vue';
Vue.component(Ellipsis.name, Ellipsis);
Vue.component(Timer.name, Timer);
/* 或写为
* Vue.use(Ellipsis)
* Vue.use(Timer)
*/
```