Theme.js中在抽象的变量和实际的变量上都可以选择两种操作



```extend``` 扩展，将传入的值与Builtin的值合并

```replace``` 替换，将传入的值作为最终生成样式的依据

something like:



```js
//theme.js

module.exports={
    ...
    variables:{
        color:{
            replace:{
                color1: "#ddbbcc",
                color2: "#aaddbb",
                color3: "#aabbcd"
            }
        },
        gap:{
            extend:{
            	large: "10rem",
                small: "1rem"
        	}
        },
        
        
    }
    ...
}
```

replace或者extend只能写一个，如果都写的话，那么replace生效，将忽略extend



抽象的变量先进行```extend```或者```replace```的操作，然后是具体的变量再进行```extend```或者```replace```操作，比如

```js
module.exports= {
    variables:{
        gap:{
            extend:{
                large: "10rem",
                small: "1rem"
            }
        }
    },
    detailVariables:{
        margin:{
            extend:{
                1: "64px",
                2: "128px"
            }
        }
    }    
}
```

在 ```detailVariables```中的变量，不在存在以下处理：

自动添加```nagetiveTag```

