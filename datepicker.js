
'use strict';



$(function() {
	$(".calendar").datepicker({
		dateFormat: "dd/mm/yy",
		firstDay: 1
	});

	$(document).on("click", ".datepicker .input", function(e) {
		var $me = $(this),
				$parent = $me.parents(".datepicker");
		$parent.toggleClass("open");
	});

	$(".calendar").on("change", function() {
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents(".datepicker");
		$parent.find(".result").children("span").html($selected);
	});
});


