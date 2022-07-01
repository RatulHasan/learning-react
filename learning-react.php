<?php
/**
 * Plugin Name:         Learning React
 * Plugin URI:          https://github.com/RatulHasan/learning-react
 * Description:         Learning React
 * Version:             1.0.0
 * Requires PHP:        7.0
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
	 * Plugin version.
	 *
	 * @var string
	 */
	const VERSION = '1.0.0';

    /**
     * Constructor.
     */
    private function __construct() {
	    $this->define_constants();
        $this->init_hooks();
    }

    /**
     * Initialize hooks.
     *
     * @return void
     */
    public function init_hooks() {
		// Add menu to the admin panel.
	    add_action( 'admin_menu', [ $this, 'add_menu' ] );

		// Enqueue scripts and styles.
	    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

	/**
	 * Defined all the required constants.
	 *
	 * @return void
	 */
	private function define_constants() {
		define( 'LR_VERSION', self::VERSION );
		define( 'LR_FILE', __FILE__ );
		define( 'LR_PATH', __DIR__ );
		define( 'LR_ASSETS', plugins_url( '', LR_FILE ) . '/assets' );
		define( 'LR_ASSETS_REACT', plugins_url( '', LR_FILE ) . '/build' );
	}

	/**
	 * Add menu to the admin panel.
	 *
	 * @return void
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
	 *
	 * @return void
	 */
	public function render_page() {
		// We need to load the React library here otherwise it will not get the DOM element to render.
		wp_enqueue_script( 'learning-react-js' );
		?>
		<div id="root" class="wrap">
			<h1>Learning React</h1>
			<p>
				<a href="https://www.ratulhasan.com/" target="_blank">
					Ratul Hasan
				</a>
			</p>
		</div>
		<?php
	}

	/**
	 * Enqueue scripts and styles.
	 *
	 * @return void
	 */
	public function enqueue_scripts() {
		$index_asset = require LR_PATH . '/build/index.asset.php';
		// First we need to register the React library. Do not enqueue it here.
		wp_register_script(
			'learning-react-js',
			LR_ASSETS_REACT . '/index.js',
			$index_asset['dependencies'],
			$index_asset['version'],
			false
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
     *
     * @return \Learning_React
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
 *
 * @return void
 */
function learning_react() {
    Learning_React::init();
}

// Hit start.
learning_react();