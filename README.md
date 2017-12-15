# jQuery-ResizableColumns
_A jQuery plugin to make your table columns resizable_

#### jQuery.fixTableHeader.js
* Resize columns in table
* Super Light: just 1kb

[View a JsFiddle here](https://jsfiddle.net/jo_Geek/y1qa7hbr/)


### Note:
- Works on `Microsoft Edge 41.16299.15.0` and `Firefox 57.0.2` with `jQuery 1.9`

- Works on `Internet Explorer 11` and `Google Chrome 63.0.3239.108` with `jQuery 3.2.1`.<br>
  In lower versions of jQuery.. resize works but its kinda faulty.
  
## Invoking the plugin
```html
<table id="tbResizable">
  <thead>
    <tr>
      <th>col 1</th>
      <th>col 2</th>
      ...
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content</td>
      <td>Conent</td>
      ...
      ...
    </tr>
  </tbody>
</table>
```
Invoke plugin on the above table
```javascript
$('#tbResizable').resizableColumns();
```

## Important
- Resizable handlers are `append()` to all the table `th`s.
- Make sure your put your headers inside the `<thead>` tag.
