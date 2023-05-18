<?php
if ( ! function_exists('produkty') ) {

    // Register Custom Post Type
    function produkt() {
    
        $labels = array(
            'name'                  => _x( 'produkty', 'Post Type General Name', 'upin' ),
            'singular_name'         => _x( 'produkt', 'Post Type Singular Name', 'upin' ),
            'menu_name'             => __( 'produkty', 'upin' ),
            'name_admin_bar'        => __( 'produkty', 'upin' ),
            'archives'              => __( 'Item Archives', 'upin' ),
            'attributes'            => __( 'Item Attributes', 'upin' ),
            'parent_item_colon'     => __( 'Parent Item:', 'upin' ),
            'all_items'             => __( 'Wszystkie produkty', 'upin' ),
            'add_new_item'          => __( 'Dodaj nową produkt', 'upin' ),
            'add_new'               => __( 'Dodaj nowy', 'upin' ),
            'new_item'              => __( 'Nowy', 'upin' ), 
            'edit_item'             => __( 'Edytuj', 'upin' ),
            'update_item'           => __( 'Update Item', 'upin' ),
            'view_item'             => __( 'Zobacz', 'upin' ),
            'view_items'            => __( 'Zobacz wszystkie', 'upin' ),
            'search_items'          => __( 'Szukaj', 'upin' ),
            'not_found'             => __( 'Nie znaleziono', 'upin' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'upin' ),
            'featured_image'        => __( 'Featured Image', 'upin' ),
            'set_featured_image'    => __( 'Set featured image', 'upin' ),
            'remove_featured_image' => __( 'Remove featured image', 'upin' ),
            'use_featured_image'    => __( 'Use as featured image', 'upin' ),
            'insert_into_item'      => __( 'Insert into item', 'upin' ),
            'uploaded_to_this_item' => __( 'Uploaded to this item', 'upin' ),
            'items_list'            => __( 'Items list', 'upin' ),
            'items_list_navigation' => __( 'Items list navigation', 'upin' ),
            'filter_items_list'     => __( 'Filter items list', 'upin' ),
        );
        $args = array(
            'label'                 => __( 'produkt', 'upin' ),
            'description'           => __( 'Post Type Description', 'upin' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'thumbnail', 'trackbacks', 'revisions', 'custom-fields', 'page-attributes', 'post-formats', 'excerpt' ),
            'taxonomies'            => array( 'kategoria-produkty' ),
            'hierarchical'          => true,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
        );
        register_post_type( 'produkt', $args );
    
    }
    add_action( 'init', 'produkt', 0 );
    
    }


    
 

    if ( ! function_exists( 'kategoria_produkty' ) ) {

// Register Custom Taxonomy
function kategoria_produkty() {

	$labels = array(
		'name'                       => _x( 'Kategoria produkty', 'Taxonomy General Name', 'upin' ),
		'singular_name'              => _x( 'kategoria produkty', 'Taxonomy Singular Name', 'upin' ),
		'menu_name'                  => __( 'Kategoria produkty', 'upin' ),
		'all_items'                  => __( 'All Items', 'upin' ),
		'parent_item'                => __( 'Parent Item', 'upin' ),
		'parent_item_colon'          => __( 'Parent Item:', 'upin' ),
		'new_item_name'              => __( 'New Item Name', 'upin' ),
		'add_new_item'               => __( 'Add New Item', 'upin' ),
		'edit_item'                  => __( 'Edit Item', 'upin' ),
		'update_item'                => __( 'Update Item', 'upin' ),
		'view_item'                  => __( 'View Item', 'upin' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'upin' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'upin' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'upin' ),
		'popular_items'              => __( 'Popular Items', 'upin' ),
		'search_items'               => __( 'Search Items', 'upin' ),
		'not_found'                  => __( 'Not Found', 'upin' ),
		'no_terms'                   => __( 'No items', 'upin' ),
		'items_list'                 => __( 'Items list', 'upin' ),
		'items_list_navigation'      => __( 'Items list navigation', 'upin' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'kategoria-produkty', array( 'produkt' ), $args );

}
add_action( 'init', 'kategoria_produkty', 0 );

}
function get_produkt_ids($limit,$offset,$cat){
    $posts = Timber::get_posts([

        'post_type' => 'produkt',
        'posts_per_page' => $limit,
        'order' => 'ASC',
        'offset' => $offset,
        'kategoria-produkty' => $cat

    ]);
    $ids = [];
    if($posts) foreach($posts as $post) $ids[] = $post->ID;
    return $ids;
}


