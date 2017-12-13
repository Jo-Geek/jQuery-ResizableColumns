# jQuery-ResizableColumns
_A jQuery plugin to make your table columns resizable_

#### jQuery.fixTableHeader.js
* Resize columns in table
* Super Light: just 1kb

[View a JsFiddle here](https://jsfiddle.net/jo_Geek/y1qa7hbr/)

## Invoking the plugin
```
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
- invoke plugin on the above table
> $('#tbResizable').resizableColumns();

## Important
- Resizable handlers are `append()` to all the table `th`s.
- Make sure your put your headers inside the `<thead>` tag.
