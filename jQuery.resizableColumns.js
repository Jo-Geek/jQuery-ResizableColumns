(function($) {
    $.fn.resizableColumns = function() {
      var isColResizing = false;
      var resizingPosX = 0;
      var _table = $(this);
      var _thead = $(this).find('thead');

      _table.css('width', _table.width());
      _thead.find('th:not(:last-child)').each(function() {
        $(this).css('position', 'relative');
        $(this).css('width', $(this).width() + 'px');
        $(this).append("<div class='resizer' style='position:absolute;top:0px;right:-3px;bottom:0px;width:6px;z-index:999;background:transparent;cursor:col-resize'></div>");
      })

      $(document).mouseup(function(e) {
        _thead.find('th').removeClass('resizing');
        isColResizing = false;
        e.stopPropagation();
      })

      _table.find('.resizer').mousedown(function(e) {
        _thead.find('th').removeClass('resizing');
        $(this).closest('th').addClass('resizing');
        resizingPosX = e.pageX;
        isColResizing = true;
        e.stopPropagation();
      })

      _table.mousemove(function(e) {
        if (isColResizing) {

          var _resizing = _thead.find('th.resizing .resizer');

          if (_resizing.length == 1) {

            var _nextRow = _thead.find('th.resizing + th');
            var _pageX = e.pageX || 0;
            var _widthDiff = _pageX - resizingPosX;
            var _setWidth = _resizing.closest('th').width() + _widthDiff;
            var _nextRowWidth = _nextRow.width() - _widthDiff;
            if (resizingPosX != 0 && _widthDiff != 0 && _setWidth > 50 && _nextRowWidth > 50) {
              _resizing.closest('th').css('width', _setWidth + 'px');
              resizingPosX = e.pageX;
              _nextRow.css('width', _nextRowWidth + 'px');
            }

          }
        }
      })
    };
  }
  (jQuery))
