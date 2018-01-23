## 欢迎进入我的插件文档 ##

**该插件** 依赖于jquery,使用之前,先引入jquery,再引入myUI.js.
<link rel="stylesheet" href="myUI.css">
<style>
	.box{height:500px;overflow:hidden}
</style>

### 一.下拉列表插件 ###

<div id="my-dropdown" class="dropdown">
    <a href="#" class="dropdown-btn" data-trigger="dropdown">Dropdown</a>
    <ul class="dropdown-menu fade">
	    <li class="item"><a href="#">Action</a></li>
      <li class="item"><a href="#">Another action</a></li>
      <li class="item"><a href="#">Something else here</a></li>
	    <li class="item"><hr></li>
      <li class="item"><a href="#">Separated link</a></li>
    </ul>
</div>

功能源代码

	<div id="my-dropdown" class="dropdown">
	    <a href="#" class="dropdown-btn" data-trigger="dropdown">Dropdown</a>
	    <ul class="dropdown-menu fade">
		    <li class="item"><a href="#">Action</a></li>
		    <li class="item"><a href="#">Another action</a></li>
		    <li class="item"><a href="#">Something else here</a></li>
		    <li class="item"><hr></li>
	        <li class="item"><a href="#">Separated link</a></li>
   		</ul>
	</div>



[查看功能源代码]()
### 二.手风琴插件 ###

<div class="box">
	<div class="accordion">
		<div class="title" data-trigger="accordion">《西游记》简介</div>
		<div class="content fade in">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aliquid, culpa nobis neque totam laboriosam similique provident. Consectetur, ipsam reprehenderit eveniet! Minus, sunt labore commodi sequi ipsa explicabo fugit laboriosam.	
		</div>
		<div class="title" data-trigger="accordion">《水浒传》简介</div>
		<div class="content fade">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, ducimus aspernatur ipsam quidem nemo maiores distinctio unde perferendis incidunt architecto quasi aperiam iure tempora voluptatibus accusantium dolore cum ullam itaque!
		</div>
		<div class="title" data-trigger="accordion">《红楼梦》简介</div>
		<div class="content fade">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nisi, at, officiis, earum ut ipsam voluptatem magnam facere labore esse error fugiat laborum praesentium qui velit provident voluptatum porro consequuntur?
		</div>
	</div>
</div>

- **Bold** (`Ctrl+B`) and *Italic* (`Ctrl+I`)
- Quotes (`Ctrl+Q`)
- Code blocks (`Ctrl+K`)
- Headings 1, 2, 3 (`Ctrl+1`, `Ctrl+2`, `Ctrl+3`)
- Lists (`Ctrl+U` and `Ctrl+Shift+O`)

### See your changes instantly with LivePreview ###

Don't guess if your [hyperlink syntax](http://markdownpad.com) is correct; LivePreview will show you exactly what your document looks like every time you press a key.

### Make it your own ###

Fonts, color schemes, layouts and stylesheets are all 100% customizable so you can turn MarkdownPad into your perfect editor.

### A robust editor for advanced Markdown users ###

MarkdownPad supports multiple Markdown processing engines, including standard Markdown, Markdown Extra (with Table support) and GitHub Flavored Markdown.

With a tabbed document interface, PDF export, a built-in image uploader, session management, spell check, auto-save, syntax highlighting and a built-in CSS management interface, there's no limit to what you can do with MarkdownPad.

<script src="../jquery-1.11.3.js"></script>
<script src="myUI.js"></script>