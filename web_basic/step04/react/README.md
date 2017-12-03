# react开发 #

### 1. JSX ###

借鉴了XML标签打开与关闭的优点，提高了组件的可读性；JSX中可以直接使用HTML标签，赋予React强大的表现能力，方便进行代码的开发，最早是受php中一个插件库的影响。

	注意：JSX不是一种新的语言，只不过是允许在js中编写html

### 2. react hello world ###
react 小模板

	 ReactDOM.render(
            <div>
                <h1>Hello React {3+6}</h1>
                <p>it is a paragraph</p>
            </div>,
            document.getElementById("example")
    );

### 3. react 组件 ###
将需要反复使用的代码块封装在一个组件中，然后像插入html一样，插入到网页中，render来渲染组件

注意：组件名要全驼峰，要大写

	let HelloMsg = React.createClass({
            render(){
                return <button>ClickMe</button>
            }
    });
    ReactDOM.render(
            <div>
                <HelloMsg></HelloMsg>
            </div>,
            document.getElementById("example")
   );