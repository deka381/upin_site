<?php
/**
 * SPDX-FileCopyrightText: 2012-2020 Jared Novack and contributors
 * SPDX-License-Identifier: MIT
 * SPDX-FileCopyrightText: 2017-2020 Johannes Siipola
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($composer_autoload)) {
    require_once $composer_autoload;
    if (class_exists('Timber')) {
        $timber = new Timber\Timber();
    }
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if (!class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' .
            esc_url(admin_url('plugins.php#timber')) .
            '">' .
            esc_url(admin_url('plugins.php')) .
            '</a></p></div>';
    });

    add_filter('template_include', function ($template) {
        return get_stylesheet_directory() . '/no-timber.html';
    });
    return;
}

Timber::$dirname = ['dist/templates', 'dist'];

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;

/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site
{
    /** Add timber support. */
    public function __construct()
    {
        $this->require_libs();
        add_action('after_setup_theme', [$this, 'theme_supports']);
        add_filter('timber/context', [$this, 'add_to_context']);
        add_filter('timber/twig', [$this, 'add_to_twig']);
        add_action('init', [$this, 'register_post_types']);
        add_action('init', [$this, 'register_taxonomies']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        parent::__construct();
    }
    /** This is where you can register custom post types. */
    public function register_post_types()
    {
    }
    /** This is where you can register custom taxonomies. */
    public function register_taxonomies()
    {
    }

    /** This is where you add some context
     *
     * @param string $context context['this'] Being the Twig's {{ this }}.
     */
    public function add_to_context($context)
    {
        $context['options'] = get_fields('options');
        $context['szablon'] = get_fields('options')['theme'];
        $context['komunikaty_do_popupow'] = get_fields('options')['komunikaty_do_popupow'];
        $context['text_under_foot'] = get_field('tresci_na_home');
        $context['menus'] = [
            'menu_header' => new Timber\Menu('menu_header'),
        ];
        $context['menuc'] = [
            'menu_footer' => new Timber\Menu('polityka'),
        ];
        $context['foo'] = 'bar';
        $context['stuff'] = 'I am a value set in your functions.php file';
        $context['notes'] =
            'These values are available everytime you call Timber::context();';
        $context['menu'] = new Timber\Menu();
        $context['site'] = $this;
        return $context;
    }

    public function theme_supports()
    {
        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', [
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ]);

        /*
         * Enable support for Post Formats.
         *
         * See: https://codex.wordpress.org/Post_Formats
         */
        //add_theme_support('post-formats', [
        //    'aside',
        //    'image',
        //    'video',
        //    'quote',
        //    'link',
        //    'gallery',
        //    'audio',
        //]);

        add_theme_support('menus');
    }

    /** This Would return 'foo bar!'.
     *
     * @param string $text being 'foo', then returned 'foo bar!'.
     */
    public function myfoo($text)
    {
        $text .= ' bar!';
        return $text;
    }

    /** This is where you can add your own functions to twig.
     *
     * @param string $twig get extension.
     */
    public function add_to_twig($twig)
    {
        $twig->addExtension(new Twig\Extension\StringLoaderExtension());
        $twig->addFilter(new Twig\TwigFilter('myfoo', [$this, 'myfoo']));
        $twig->addFunction(new Timber\Twig_Function('get_posts_ids', 'get_posts_ids'));
        $twig->addFunction(new Timber\Twig_Function('get_produkt_ids', 'get_produkt_ids'));
        return $twig;
    }

    private function require_libs(){
        require_once 'libs/head_scripts.php';
        require_once 'libs/options.php';
        require_once 'libs/menus.php';
        require_once 'libs/extends.php';
        require_once 'libs/cpt.php';
    }

    public function enqueue_scripts() { 
        wp_enqueue_style(
            'style',
            get_template_directory_uri() . '/dist/style.css',
            [],
            $this->get_file_hash('/dist/style.css')
        );
        wp_enqueue_script(
            'scripts',
            get_template_directory_uri() . '/dist/script.js',
            [],
            $this->get_file_hash('/dist/script.js'),
            true
        );
    }

    public static function get_file_hash($file)
    {
        $hash = @md5_file(get_template_directory() . $file);
        if ($hash) {
            return $hash;
        }
        return null;
    }

} 

    function get_posts_ids($limit,$offset){
            
        $posts = Timber::get_posts([
            'post_type' => 'post',
            'posts_per_page' => $limit,
            'order' => 'DESC',
            'offset' => $offset
            
        ]);
        $ids = [];
        if($posts) foreach($posts as $post) $ids[] = $post->ID;
        return $ids;
    }
new StarterSite();