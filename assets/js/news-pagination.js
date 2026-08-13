$(document).ready(function () {
  var $table = $('#news-table');
  var $items = $table.find('.news-item');
  var $pagination = $('#news-pagination');

  if ($items.length === 0) {
    return;
  }

  var perPage = parseInt($table.data('news-per-page'), 10) || 5;
  var totalPages = Math.ceil($items.length / perPage);
  var currentPage = 1;

  function showPage(page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    currentPage = page;

    $items.each(function (index) {
      var itemPage = Math.floor(index / perPage) + 1;
      if (itemPage === currentPage) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    renderPagination();
  }

  function renderPagination() {
    if (totalPages <= 1) {
      $pagination.empty();
      return;
    }

    var html = '';

    html += '<li class="page-item' + (currentPage === 1 ? ' disabled' : '') + '">';
    html += '<a class="page-link" href="#" data-page="' + (currentPage - 1) + '" aria-label="Previous">';
    html += '<span aria-hidden="true">&laquo;</span>';
    html += '</a></li>';

    for (var i = 1; i <= totalPages; i++) {
      html += '<li class="page-item' + (i === currentPage ? ' active' : '') + '">';
      html += '<a class="page-link" href="#" data-page="' + i + '">' + i + '</a>';
      html += '</li>';
    }

    html += '<li class="page-item' + (currentPage === totalPages ? ' disabled' : '') + '">';
    html += '<a class="page-link" href="#" data-page="' + (currentPage + 1) + '" aria-label="Next">';
    html += '<span aria-hidden="true">&raquo;</span>';
    html += '</a></li>';

    $pagination.html(html);
  }

  $pagination.on('click', 'a.page-link', function (e) {
    e.preventDefault();
    var page = parseInt($(this).data('page'), 10);
    showPage(page);
  });

  showPage(1);
});
