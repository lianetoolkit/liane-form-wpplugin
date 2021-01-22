<?php

/**
 * Plugin Name: Liane Form
 * Plugin URI: https://github.com/liane-toolkit/liane-form-wpplugin
 * Description: Embed Liane Forms
 * Version: 0.1.0
 * Author: Instituto Update
 * Author URI: https://institutoupdate.org.br
 */

class Liane_Form {
  function __construct() {
    add_action( 'wp_footer', array( $this, 'wp_footer' ) );
    add_shortcode( 'liane_form' , array( $this, 'shortcode' ) );
  }
  function wp_footer() {
    wp_enqueue_script( 'liane-form', plugin_dir_url(__FILE__) . 'liane-form.js', array(), '0.1.0' );
  }
  function shortcode($atts) {
    $a = shortcode_atts( array(
      'url' => '',
      'id' => ''
    ), $atts );

    if(!$a['url'] || !$a['id']) {
      return '';
    }

    ob_start();
    ?>
    <div
      class="liane-form"
      data-url="<?php echo $a['url']; ?>"
      data-campaignId="<?php echo $a['id']; ?>"
    >
    </div>
    <?php
    return ob_get_clean();
  }
}

if(class_exists('Liane_Form')) {
  $liane_form = new Liane_Form();
}
