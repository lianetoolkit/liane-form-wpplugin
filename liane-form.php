<?php

/**
 * Plugin Name: Liane Form
 * Plugin URI: https://github.com/lianetoolkit/liane-form-wpplugin
 * Description: Embed Liane Forms
 * Version: 0.1.4
 * Author: Instituto Update
 * Author URI: https://institutoupdate.org.br
 */

class Liane_Form {
  function __construct() {
    add_action( 'wp_footer', array( $this, 'wp_footer' ) );
    add_shortcode( 'liane_form' , array( $this, 'shortcode' ) );
  }
  function shortcode($atts) {

    $a = shortcode_atts( array(
      'compact' => false
    ), $atts);

    $options = get_option( 'liane_form_settings' );

    // Validate non-empty required atts
    if(!$options['server'] || !$options['id']) {
      return "Invalid form parameters.";
    }

    // Non secure verification
    $allow_non_secure = true;
    if(substr($options['server'], 0, 5) == 'https')
      $allow_non_secure = false;

    ob_start();
    ?>
    <div
      class="liane-form"
      data-url="<?php echo $options['server']; ?>"
      data-campaignId="<?php echo $options['id']; ?>"
      <?php if($allow_non_secure) : ?>
        data-allowNonSecure="true"
      <?php endif; ?>
      <?php if($a['compact']) : ?>
        data-compact="true"
      <?php endif; ?>
    >
    </div>
    <?php
    return ob_get_clean();
  }
  function wp_footer() {
    wp_enqueue_script( 'liane-form', plugin_dir_url(__FILE__) . 'liane-form.js', array(), '0.1.3' );
  }
}

if(class_exists('Liane_Form')) {
  require_once(plugin_dir_path(__FILE__) . 'settings.php');
  require_once(plugin_dir_path(__FILE__) . 'widget.php');
  $liane_form = new Liane_Form();
}
