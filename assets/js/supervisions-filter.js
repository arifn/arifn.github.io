$(document).ready(function () {
  var $table = $('#supervisions-table');
  var $rows = $table.find('tbody tr');
  var $levelFilter = $('#filter-level');
  var $statusFilter = $('#filter-status');
  var $yearFilter = $('#filter-year');
  var $resetBtn = $('#filter-reset');
  var $countDisplay = $('#supervision-count');

  function applyFilters() {
    var level = $levelFilter.val();
    var status = $statusFilter.val();
    var year = $yearFilter.val();

    var visibleCount = 0;

    $rows.each(function () {
      var $row = $(this);
      var rowLevel = $row.data('level');
      var rowStatus = $row.data('status');
      var rowYear = String($row.data('year'));

      var levelMatch = !level || rowLevel === level;
      var statusMatch = !status || rowStatus === status;
      var yearMatch = !year || rowYear === year;

      if (levelMatch && statusMatch && yearMatch) {
        $row.show();
        visibleCount++;
      } else {
        $row.hide();
      }
    });

    updateRowNumbers();
    $countDisplay.text(visibleCount);
  }

  function updateRowNumbers() {
    var number = 1;
    $rows.each(function () {
      var $row = $(this);
      if ($row.is(':visible')) {
        $row.find('.row-number').text(number);
        number++;
      }
    });
  }

  function updateYearFilterState() {
    var status = $statusFilter.val();
    if (status === 'Ongoing') {
      $yearFilter.prop('disabled', true).val('');
    } else {
      $yearFilter.prop('disabled', false);
    }
  }

  function resetFilters() {
    $levelFilter.val('');
    $statusFilter.val('');
    $yearFilter.val('').prop('disabled', false);
    applyFilters();
  }

  $levelFilter.on('change', applyFilters);
  $statusFilter.on('change', function () {
    updateYearFilterState();
    applyFilters();
  });
  $yearFilter.on('change', applyFilters);
  $resetBtn.on('click', resetFilters);

  // Initialize
  updateYearFilterState();
});
