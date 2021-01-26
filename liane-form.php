<?php

/**
 * Plugin Name: Liane Form
 * Plugin URI: https://github.com/lianetoolkit/liane-form-wpplugin
 * Description: Embed Liane Forms
 * Version: 0.1.1
 * Author: Instituto Update
 * Author URI: https://institutoupdate.org.br
 */

class Liane_Form {
  function __construct() {
    add_action( 'wp_footer', array( $this, 'wp_footer' ) );
    add_shortcode( 'liane_form' , array( $this, 'shortcode' ) );
  }
  function wp_footer() {
    wp_enqueue_script( 'liane-form', plugin_dir_url(__FILE__) . 'liane-form.js', array(), '0.1.1' );
  }
  function shortcode($atts) {
    $a = shortcode_atts( array(
      'url' => '',
      'id' => '',
      'allow_non_secure' => "0"
    ), $atts );

    $url = filter_var($a['url'], FILTER_VALIDATE_URL);
    $allow_non_secure = filter_var($a['allow_non_secure'], FILTER_VALIDATE_BOOLEAN);

    // Validate non-empty required atts
    if(!$url || !$a['id']) {
      return "Invalid form parameters.";
    }

    // Validate ID match
    if(strlen($a['id']) > 17 || !preg_match('/^[\w\d]{17}$/', $a['id'])) {
      return "Invalid form parameters.";
    }
    ob_start();
    ?>
    <div
      class="liane-form"
      data-url="<?php echo $url; ?>"
      data-campaignId="<?php echo $a['id']; ?>"
      <?php if($allow_non_secure) : ?>
        data-allowNonSecure="true"
      <?php endif; ?>
    >
    </div>
    <?php
    return ob_get_clean();
  }
}

if(class_exists('Liane_Form')) {
  $liane_form = new Liane_Form();
}
