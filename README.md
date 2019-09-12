# ResetStyle
Change the style of DOM elements created by editors to suit your framework.

## About

When we use editors like CKEditor, it is common for tables and images to come with standard formation such as borders and fixed size. In these same editors it is possible to include and format the style, but sometimes it is a laborious process and everything is stored in the database. If we change the framework, it will not be possible to change the styles and classes that are stored in the database, so **ResertStyle** can solve this problem.

ResetStyle is a lib written in Javascript, where we inform the elements we need to manipulate, which attributes need to be removed and which ones will be added with a new value.

## Use

Using it is a very simple process, just add the settings in the **elements** constant and then call the **ResetStyle** function passing the parent element.

```
const elements = {
  elementTag : {
    remove : [
      'attr_01',
      'attr_02'
    ],
    add : {
      "attr_01" : "value",
	  "attr_02" : "value",
    }
  }
}
```
## Exemple

### index.html

```
<!doctype html>
<html>
	<head>
		<title>Reset Style Exemple</title>
	</head>
	
	<body>
		<div id="app">
			<table border="1">
				<tr>
					<td>Col 01</td>
					<td>Col 02</td>
					<td>Col 03</td>
				</tr>
			</table>
		</div>
		<script src="resetstyle.min.js"></script>
		<script>
			ResetStyle("app");
		</script>
	</body>
</html>
```

### resetstyle.js

```
const elements = {
	table : {
		remove : [
			'border'
		],
		add : {
		  "style" : "width:100%; background-color: #ede0bb; color: 101c29;"
		}
	}
}
```
