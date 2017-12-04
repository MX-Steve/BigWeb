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
(1) 组件  
将需要反复使用的代码块封装在一个组件中，然后像插入html一样，插入到网页中，render来渲染组件

注意：组件名要全驼峰，要大写

	let HelloMsg = React.createClass({
			handleClick(){
				console.log(111);
			},
            render(){
                return <button onClick={this.handleClick}>ClickMe</button>
            }
    });
    ReactDOM.render(
            <div>
                <HelloMsg></HelloMsg>
            </div>,
            document.getElementById("example")
    );

（2）复合组件  
组件间的嵌套组成一个根组件，被称作组件树

 (3) 组件间通信

	①父到子props down：
	父：<son tips = "something" />
	子：<div>{this.props.tips}</div>
	②子到父events up：
	父：<son myCallback = {this.rcvMsg} />
		rcvMsg(data){console.log(data);}//父组件创建方法接收子组件值
	子：<button onClick={this.handleClick}>click</button>
		handleClick(){
			this.props.myCallback("dsadf");
		}
	
 (4)children属性：
	
this.props.children得到调用组件时，标签内缩写的元素：有一个是对象，没有，是null，多个，是数组

	React.Children.map(
		this.props.children,
		function(child){
			
		}
	);

示例：

		let MyList = React.createClass({
            render(){
                return <ul>
                    {
                        React.Children.map(
                            this.props.children,
                            function(child) {
                                return child;
                            }
                        )
                    }
                </ul>
            }
        });
        ReactDOM.render(
            <MyList>
                <li>test01</li>
                <li>test02</li>
                <li>test03</li>
            </MyList>,
            document.getElementById("example")
        );

### 4. refs:reference引用/参考 ###

		let MyComponent = React.createClass({
            handleClick(){
				//通过refs找到想要的标签 this.refs.myInput
                console.log(this.refs.myInput.value);
                this.refs.myInput.style.color="red";
            },
            render(){
                return <div>
                    <input type="text" ref="myInput"/>
                    <button onClick={this.handleClick}>获取输入的值</button>
                </div>
            }
        });
### 5. state：状态 ###

初始化：  

	getInitialState(){
        return {
           btnStatus:false
        };
    }

读取：
	
	let status = this.state.btnStatus;

写：

	this.setState(
		{
         btnStatus:!status
	    },
		function(){
			状态成功设置完成后会调用的方法
		}
	);//这个方法是异步的

注意：不要在render方法中，做任何状态的设置。

### 6. lifecycle 生命周期 ###

对应的生命周期的某个阶段对应的处理函数(钩子函数)

mount  
	
	componentWillMount:组件将要挂载
	componentDidMount:组件挂载结束

update  
	
	componentWillUpdate:组件将要更新
	componentDidUpdate:组件已经更新

unmount  
	
	componentWillUnmount:组件将要解绑

注意事项：

	①如果要使用ref去寻找元素，必须等到componentDidMount
	②在componentWill/DidUpdate的处理函数中是由参数的，分别对应的是准备更新/更新之前的props和state
	③在一个组件中，建议：
		将生命周期的处理函数 一般都是放在组件的上面，
		其次自定的方法，
		最下边是render方法
	④ style={{opacity:this.state.opacity}}//双花括号设置样式

### 7.表单受控组件 ###

是一些表单元素，如果指定value/checked/selected,那么就是表单受控元素(现象：针对表单操作的结果是不对的)

当一个组件有多个状态时，需要修改某一个状态时，就写要修改的就可以

解决思路：
	
	1.初始化状态
	2.将状态的值 绑定到value等属性上
	3.在对应onChange上处理
