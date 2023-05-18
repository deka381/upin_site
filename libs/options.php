<?php
if( function_exists('acf_add_options_page')){
	acf_add_options_page([
        'page_title' => __('Szablon', 'upin'),
        'page_slug' => 'szablon',
        'icon_url' => 'dashicons-admin-customizer',
        'position' => 3.1337,
    ]);
}  
if( function_exists('acf_add_options_page')){
	acf_add_options_page([
        'page_title' => __('popups', 'upin'),
        'page_slug' => 'popups',
        'icon_url' => 'dashicons-admin-customizer',
        'position' => 3.1337,
    ]);
}  