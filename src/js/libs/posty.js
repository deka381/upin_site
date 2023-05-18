import $ from 'jquery';

$('.catclick').on('click', function(){
  $('.cat-list li').addClass('first');
});

$('.cat-list_item').on('click', function() {
  $('.cat-list_item').each(function(){
    $(this).parent().removeClass('first');
  });
  $(this).parent().addClass('first');
  var twb = $('.loop__text').html();
    const catsar = [];
    var ppp = '7';
      if ($(this).hasClass('active')){ 
        $(this).removeClass('active');
      } else{
        $(this).addClass('active');
      }
      var self = $(this);
      $('.cat-list_item').each(function(){
        if($(this).hasClass('active')){
          // console.log($(this).text());
          catsar.push($(this).data('slug'));
        }else{
          // var def = $(this).data('slug');
          // catsar.splice(catsar.indexOf(def), 1);  
        }
      });
      if ($(this).hasClass('allcat')){
        var allcatslug = $(this).data('slug');
        var strx   = allcatslug.split(',');
        var array = [];
        array = array.concat(strx);

        $('.cat-list_item').each(function(){
          if ($(this).hasClass('allcat')){

          }else{
            $(this).removeClass('active');
          }
        });

        
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          dataType: 'html',
          data: {
            action: 'filter_projects',
            category: array,
            post_per_page: ppp,
            twb: twb,
          },
          success: function(res) {
            $('.project-tiles').html(res);
          }
        });
    }else{
        $('.allcat').removeClass('active');
          $.ajax({
            type: 'POST',
            url: '/wp-admin/admin-ajax.php',
            dataType: 'html',
            data: {
              action: 'filter_projects',
              category: catsar,
              post_per_page: ppp,
              twb: twb,
            },
            success: function(res) {
              $('.project-tiles').html(res);
            }
          });

      } 
      $('.blog_more').show();
    });




    $('.blog_more').on('click', function() {
      var twb = $('.loop__text').html();
      $(this).hide();
        const catsar = [];
        var ppp = '99';

        $('.cat-list_item').each(function(){
          
          if($(this).hasClass('active')){

            catsar.push($(this).data('slug'));
          }


        });
        if ($('.allcat').hasClass('active')){
          var allcatslug = $('.allcat').data('slug');
          var strx   = allcatslug.split(',');
          var array = [];
          array = array.concat(strx); 
          $.ajax({
            type: 'POST',
            url: '/wp-admin/admin-ajax.php',
            dataType: 'html',
            data: {
              action: 'filter_projects',
              category: array,
              twb: twb,
              post_per_page: ppp,
            },
            success: function(res) {
              $('.project-tiles').html(res);
            }
          });
        }else{
            $.ajax({
              type: 'POST',
              url: '/wp-admin/admin-ajax.php',
              dataType: 'html',
              data: {
                action: 'filter_projects',
                category: catsar,
                post_per_page: ppp,
                twb: twb,
              },
              success: function(res) {
                $('.project-tiles').html(res);
              }
            });
        } 

  
      });


      $('.wpcf7-acceptance label input').on('change', function(){
        $(this).parent().toggleClass("active");
      });