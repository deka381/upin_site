<?php
add_action( 'add_attachment', 'my_set_image_meta_upon_image_upload' );
function my_set_image_meta_upon_image_upload( $post_ID ) {
    if ( wp_attachment_is_image( $post_ID ) ) {
        $my_image_title = get_post( $post_ID )->post_title;
        $my_image_title = preg_replace( '%\s*[-_\s]+\s*%', ' ',
        $my_image_title );
        $my_image_title = ucwords( strtolower( $my_image_title ) );
        $my_image_meta = array(
            'ID' => $post_ID,
            'post_title' => $my_image_title,
            'post_content' => $my_image_title,
        );
        update_post_meta( $post_ID, '_wp_attachment_image_alt', $my_image_title );
        wp_update_post( $my_image_meta );
    }
}


function defer_parsing_of_js( $url ) {
    if ( is_user_logged_in() ) return $url; //don't break WP Admin
    if ( FALSE === strpos( $url, '.js' ) ) return $url;
    if ( strpos( $url, 'jquery.js' ) ) return $url;
    if ( strpos( $url, 'jquery.min.js' ) ) return $url;
    return str_replace( ' src', ' defer src', $url );
}
add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10 );



function custom_postcode_validation_filter($result,$tag){

    $name = $tag->name;

    if($name == 'postcode'){

        $bapostcode = $_POST['postcode'];

        if($bapostcode != '') {

            if(!preg_match('/^[0-9]{2}-[0-9]{3}$/', $bapostcode)) {

                $result->invalidate( $tag, "Podaj prawidłowy Kod Pocztowy" );

            }

        }

    }
    return $result;
}   

add_filter( 'wpcf7_validate_text*', 'custom_postcode_validation_filter', 10, 2 );
add_filter( 'wpcf7_validate_text', 'custom_postcode_validation_filter', 10, 2 );

add_filter( 'upload_mimes', function( $types ) {
    $types['csv'] = 'text/csv';
    return $types;
} );




function post_cat( ) { 

    ob_start();
    get_template_part( 'libs/post_cat' );
    return ob_get_clean();
}
add_shortcode( 'post_cat', 'post_cat' ); 

function filter_projects() {
    ?><div class="blog__list"><?php
    $catSlug = $_POST['category']; 
    $post_per_page = $_POST['post_per_page']; 
    $twb = $_POST['twb']; 
    $ajaxposts = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => $post_per_page,
        'category__in' => $catSlug,
        'orderby' => 'date', 
        'order' => 'DESC',
    ]);
    $response = '';
    $response .=  ' <div class="tease tease-post loop__1 loop__text">'. $twb .'</div>';

    if($ajaxposts->have_posts()) { ?>
        <?php
            while($ajaxposts->have_posts()) : $ajaxposts->the_post();
            
            $context['post'] = Timber::get_post( get_the_ID() ); 
            $response .=  Timber::compile( 'tease-post.twig', $context );
            

            endwhile;
        ?> 
        <?php
    } else {
        $response = 'empty';
    }
    echo $response;
    
    exit;
    wp_reset_postdata();
    ?></div>
    <?php
}
  add_action('wp_ajax_filter_projects', 'filter_projects');
  add_action('wp_ajax_nopriv_filter_projects', 'filter_projects');


  function set_posts_per_page_for_towns_cpt( $query ) {


        $term__id = get_queried_object_id();
        if ($term__id == '3'){
            $query->set( 'posts_per_page', '111' );
        }
  }
  add_action( 'pre_get_posts', 'set_posts_per_page_for_towns_cpt' );