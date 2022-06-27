<?php
/**
 * Plugin Name:         Learning React
 * Plugin URI:          https://github.com/RatulHasan/learning-react
 * Description:         Learning React
 * Version:             1.0.0
 * Requires PHP:        5.6
 * Requires at least:   6.0
 * Author:              Ratul Hasan
 * Author URI:          https://ratuljh.wordpress.com/
 * License:             GPL-2.0-or-later
 * License URI:         https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:         learning-react
 * Domain Path:         /languages
 *
 * @package WordPress
 */

// To prevent direct access, if not define WordPress ABSOLUTE PATH then exit.
if ( ! defined( 'ABSPATH' ) ) {
    exit();
}

final class Learning_React{
    /**
     * @var \Learning_React|null
     */
    private static ?Learning_React $instance = null;

    /**
     * Constructor.
     */
    private function __construct() {
        $this->init_hooks();
    }

    /**
     * Initialize hooks.
     */
    public function init_hooks() {
		// Add menu to the admin panel.
	    add_action( 'admin_menu', [ $this, 'add_menu' ] );

		// Enqueue scripts and styles.
	    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

	/**
	 * Add menu to the admin panel.
	 */
	public function add_menu() {
		add_menu_page(
			'Learning React',
			'Learning React',
			'manage_options',
			'learning-react',
			[ $this, 'render_page' ],
			'dashicons-book-alt',
			30
		);
	}

	/**
	 * Render page.
	 */
	public function render_page() {
		?>
		<div id="root" class="wrap">
			<h1>Learning React</h1>
			<p>
				<a href="https://www.ratuljh.wordpress.com/" target="_blank">
					Ratul Hasan
				</a>
			</p>
		</div>
		<?php
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue_scripts() {
		wp_enqueue_script(
			'learning-react-script',
			plugins_url( 'build/static/js/main.d2e8ccd6.js', __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . 'build/static/js/main.d2e8ccd6.js' ),
			true
		);
	}

	/**
	 * Get instance.
	 *
	 * @return \Learning_React|null
	 */
	public static function get_instance()
	: ?Learning_React {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

    /**
     * Initializes the WeDevs_Dokan() class
     *
     * Checks for an existing WeDevs_WeDevs_Dokan() instance
     * and if it doesn't find one, creates it.
     */
    public static function init()
    : Learning_React {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }

        return self::$instance;
    }

}

/**
 * Load the plugins when all the plugins are loaded.
 * @since DOKAN_PRO_SINCE
 *
 * @return void
 */
function learning_react() {
    Learning_React::init();
}

// Hit start.
learning_react();