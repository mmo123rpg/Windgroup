jQuery(document).ready(function() {

    $('select').change(function() {
        if ($(this).children('option:first-child').is(':selected')) {
            $(this).addClass('placeholder');
        } else {
            $(this).removeClass('placeholder');
        }
    });

    $('[data-tooltip="true"]').tooltip({
        'container': 'body'
    });

    $.fn.modal.prototype.constructor.Constructor.DEFAULTS.backdrop = 'static';

    // Menu Toggle
    jQuery('.menu-collapse').click(function() {
        if (!$('body').hasClass('hidden-left')) {
            if ($('.mainwrapper').hasClass('collapsed')) {
                $('.mainwrapper').removeClass('collapsed');
                $container.masonry();
            } else {
                $(' .mainwrapper').addClass('collapsed');
                $('.children').hide(); // hide sub-menu if leave open
                $container.masonry();
            }
        } else {
            if (!$('body').hasClass('show-left')) {
                $('body').addClass('show-left');
            } else {
                $('body').removeClass('show-left');
            }
        }
        return false;
    });

    function main_height() {
        var block_height = ($(window).innerHeight()) - 165;
        var card_view = ($(window).innerHeight()) - 320;
        $('.mainwrapper, .mainpanel').css('min-height', block_height);
        $('.tab-card-view').css('min-height', card_view);
    }

    $("#checkAll").change(function() {
        $(".checkbox-1 input:checkbox").prop('checked', $(this).prop("checked"));
    });
    $("#checkAll2").change(function() {
        $(".checkbox-2 input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#checkAll3").change(function() {
        $(".checkbox-3 input:checkbox").prop('checked', $(this).prop("checked"));
    });


    main_height();

    // For Media Queries
    jQuery(window).resize(function() {
        hideMenu();
    });

    hideMenu(); // for loading/refreshing the page
    function hideMenu() {
        if ($(window).width() <= 1200) {
            $('.mainwrapper').addClass('collapsed');
        } else {
            $('.mainwrapper').removeClass('collapsed');
        }

    }

    var menuLeft = document.getElementById('cbp-spmenu-s1'),
        showLeftPush = document.getElementById('showLeftPush'),
        body = document.body;
    showLeftPush.onclick = function() {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toright');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
    };

    jQuery('.cbp-spmenu .dropdown > a').click(function() {
        if (!jQuery(this).next().is(':visible'))
            jQuery(this).next().slideDown('fast');
        else
            jQuery(this).next().slideUp('fast');
        return false;
    });

    $('input[id=lefile1]').change(function() {
        $('#get-file-input1').val($(this).val());
    });
    $('input[id=lefile2]').change(function() {
        $('#get-file-input2').val($(this).val());
    });
    $('input[id=lefile3]').change(function() {
        $('#get-file-input3').val($(this).val());
    });
    $('input[id=lefile4]').change(function() {
        $('#get-file-input4').val($(this).val());
    });
    $('input[id=lefile5]').change(function() {
        $('#get-file-input5').val($(this).val());
    });
    $('input[id=lefile6]').change(function() {
        $('#get-file-input6').val($(this).val());
    });
    $('input[id=lefile7]').change(function() {
        $('#get-file-input7').val($(this).val());
    });
    $('input[id=lefile8]').change(function() {
        $('#get-file-input8').val($(this).val());
    });
    $('input[id=lefile9]').change(function() {
        $('#get-file-input9').val($(this).val());
    });
    $('input[id=lefile10]').change(function() {
        $('#get-file-input10').val($(this).val());
    });

    $(".edit-shop-detail1").click(function() {
        $(".disabled-shop-detail1 input,.disabled-shop-detail1 select,button,.disabled-shop-detail1 textarea").prop('disabled', false);
        $(".hide-shop-detail1,.disabled-shop-detail1 .asterisk").show();
        $("button").removeClass("disabled");
        $(".disabled-shop-detail1 .pointer-none").removeClass('pointer-none');
        $(".disabled-shop-detail1 .form-image").parent().css({
            "border":"1px solid #ccc",
            "text-align":"center",
            "width":"100%"
        });

    });
    $(".edit-shop-detail2").click(function() {
        $(".disabled-shop-detail2 input,.disabled-shop-detail2 select,.disabled-shop-detail2 textarea").prop('disabled', false);
        $(".hide-shop-detail2,.disabled-shop-detail2 .asterisk,.disabled-shop-detail2 .input-group-addon").show();
        $(".disabled-shop-detail2 .form-image").css("border","1px solid #ccc");
        $(".chosen-select").trigger("chosen:updated");
    });
    $(".edit-shop-information1").click(function() {
        $(".disabled-shop-information1 input,.disabled-shop-information1 select,.disabled-shop-information1 textarea").prop('disabled', false);
        $(".hide-shop-information1,.disabled-shop-information1 .asterisk").show();
        $(".location-checked").addClass("hide");
        $(".disabled-shop-information1 .pointer-none").removeClass('pointer-none');
        $(".disabled-shop-information1 .form-image").parent().css({
            "border":"1px solid #ccc",
            "text-align":"center",
            "width":"100%"
        });
    });
    $(".edit-shop-information2").click(function() {
        $(".disabled-shop-information2 input,.disabled-shop-information2 select,.disabled-shop-information2 textarea").prop('disabled', false);
        $(".hide-shop-information2,.disabled-shop-information2 .asterisk,.disabled-shop-information2 .input-group-addon").show();
        $(".disabled-shop-information2 .form-image").css("border","1px solid #ccc");
        $(".chosen-select").trigger("chosen:updated");
    });
    

    $('.expand-detail').click(function() {
        var $this = $(this);
        if ($this.hasClass('expand-detail')) {
            $this.removeClass('expand-detail').addClass('collapse-detail').text('Collapse All');
            $('.tree-detail li>input[type=checkbox]').prop("checked", true);
        } else {
            $this.removeClass('collapse-detail').addClass('expand-detail').text('Expand All');
            $('.tree-detail li>input[type=checkbox]').prop("checked", false);
        }
        return false;
    });

    $('.expand-add').click(function() {
        var $this = $(this);
        if ($this.hasClass('expand-add')) {
            $this.removeClass('expand-add').addClass('collapse-add').text('Collapse All');
            $('.tree-add li>input[type=checkbox]').prop("checked", true);
        } else {
            $this.removeClass('collapse-add').addClass('expand-add').text('Expand All');
            $('.tree-add li>input[type=checkbox]').prop("checked", false);
        }
        return false;
    });

    $('.expand-approve').click(function() {
        var $this = $(this);
        if ($this.hasClass('expand-approve')) {
            $this.removeClass('expand-approve').addClass('collapse-approve').text('Collapse All');
            $('.tree-approve li>input[type=checkbox]').prop("checked", true);
        } else {
            $this.removeClass('collapse-approve').addClass('expand-approve').text('Expand All');
            $('.tree-approve li>input[type=checkbox]').prop("checked", false);
        }
        return false;
    });

    $('.expand-all').click(function() {
        var $this = $(this);
        if ($this.hasClass('collapse-all')) {
            $this.text('Expand all');
            $('.panel-collapse.in')
                .collapse('hide');
            $this.removeClass('collapse-all');
        } else {
            $this.text('Collapse all');
            $('.panel-collapse:not(".in")')
                .collapse('show');
            $this.addClass('collapse-all');
        }
    });

    $('#accordion').on('show.bs.collapse hide.bs.collapse', function(obj) {
        var $this = $(this);
        var $expand = $('.expand-all');
        if (obj.type == "show") {
            $expand.text('Collapse all').addClass('collapse-all');
        } else {
            if ($('.collapse.in').not(obj.target).length == 0) {
                $expand.text('Expand all').removeClass('collapse-all');
            }
        }
    });

    jQuery('.rootwizard').bootstrapWizard();

    var table1 = $('#table1').DataTable();
    var table2 = $('#table2').DataTable();

    $('.dataTable').DataTable({
        destroy: true,
        "searching": false,
        "paging": true,
        "iDisplayLength": 20
    });
    $('.dataTable2').DataTable({
        "filter": false,
        "paging": true,
        "iDisplayLength": 5
    });

    jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
    $('#redeem-close').on('click',function() {
       $('#redeem,#issue-gift').modal('hide');
    });
    $('#issue-close').on('click',function() {
       $('#confirm-issue,#issue-voucher').modal('hide');
    });

    // $('#table1 tbody').on('click', 'tr', function() {
    //     if ($(this).hasClass('selected')) {
    //         $(this).removeClass('selected');
    //     } else {
    //         table1.$('tr.selected').removeClass('selected');
    //         $(this).addClass('selected');
    //     }
    // });

    // $('#UpdateData').click(function() {
    //     var row = table1.row('.selected');
    //     var rowNode = row.node();
    //     row.remove().draw();
    //     $('.table-issue2,.btn-issue2').show();
    //     table2.row.add( [
    //        'PSPVC001',
    //        '$5 Dollars Cash Voucher',
    //        '200',
    //        '5.00',
    //        'Prefix',
    //        '12489',
    //        'Description',
    //        '<a href="#" class="link-blue" data-toggle="modal" data-target="#confirm-remove">Remove</a>'

    //     ] ).draw();
    // });



$('.datetimepicker').datetimepicker({
    format: "DD/MM/YYYY"
});
$('.timepicker').datetimepicker({
    format: 'LT'
});



var $container = $('.grid');
$container.masonry({
    columnWidth: '.card',
    itemSelector: '.card',
    gutter: 40,
    isFitWidth: true,
});

$('[data-toggle=tab]').each(function() {
    var $this = $(this);

    $this.on('shown.bs.tab', function() {
        $container.masonry();
        main_height();
    });
});


$(".btn-select-voucher").hover(function() {
    $('.dropdown-menu-voucher li').removeClass('active')
});

$('#mySelect').on('change', function(e) {
    $('#myTab li a').eq($(this).val()).tab('show');
});
$('#mySelect2').on('change', function(e) {
    $('#myTab2 li a').eq($(this).val()).tab('show');
});
$('#mySelect3').on('change', function(e) {
    $('#myTab3 li a').eq($(this).val()).tab('show');
});
$('#mySelect-payment').on('change', function(e) {
    $('#myTab-payment li a').eq($(this).val()).tab('show');
});
jQuery('.panel-heading').click(function() {
    if ($('.panel-heading').attr('aria-expanded') == 'false') {
        $('.member-edit').show();
    } else {
        $('.member-edit').hide();
    }
});

$("button").click(function() { $(".dropdown-width").css("width", $(".quicksearch-width").width()); });
$("button").click(function() { $(".dropdown-width2").css("width", $(".quicksearch-width2").width()); });
$("button").click(function() { $(".dropdown-width3").css("width", $(".quicksearch-width3").width()); });
$("button").click(function() { $(".dropdown-width4").css("width", $(".quicksearch-width4").width()); });

$('.dropdown-stop').on('click', function(event) {
    event.stopPropagation();
});
$('.acidjs-css3-treeview li:not(:has(> ul))').addClass("child-node");

$('.country_v1-query,.country_v1-query2').typeahead({
    minLength: 1,
    maxItem: 15,
    hint: true,
    highlight: false,
    source: {
        data: [
            "Far East", "CMA", "Plaza Singapura"
        ]
    },
    callback: {
        onInit: function(node) {

        }
    }
});

$(".flip").flip();

[].slice.call(document.querySelectorAll('button.progress-button')).forEach(function(bttn) {
new ProgressButton(bttn, {
    callback: function(instance) {
        var progress = 0,
            interval = setInterval(function() {
                progress = Math.min(progress + Math.random() * 0.1, 1);
                instance._setProgress(progress);

                if (progress === 1) {
                    instance._stop(1);
                    clearInterval(interval);
                }
            }, 200);
    }
});
});

    $(".chosen-select").chosen();

    $('.colorselector_1').colorselector({
          callback: function (value, color, title) {
              $(".colorColor1").val(color);
          }
    });
    $('.colorselector_2').colorselector({
          callback: function (value, color, title) {
              $(".colorColor2").val(color);
          }
    });
    $('.colorselector_3').colorselector({
          callback: function (value, color, title) {
              $(".colorColor3").val(color);
          }
    });
    $('.colorselector_4').colorselector({
          callback: function (value, color, title) {
              $(".colorColor4").val(color);
          }
    });
    $('.colorselector_5').colorselector({
          callback: function (value, color, title) {
              $(".colorColor5").val(color);
          }
    });

    $('.color-picker3 .dropdown-colorselector').after( '<div class="selector-name">Voucher Color</div>' );
    $('.color-picker4 .dropdown-colorselector').after( '<div class="selector-name">Voucher Color</div>' );
    $('.color-picker5 .dropdown-colorselector').after( '<div class="selector-name">Company Color</div>' );

    $(".color-picker3 .color-btn").click(function() {
        $(".color-picker3 .selector-name").hide();
    });
    $(".color-picker4 .color-btn").click(function() {
        $(".color-picker4 .selector-name").hide();
    });
    $(".color-picker5 .color-btn").click(function() {
        $(".color-picker5 .selector-name").hide();
    });

});
