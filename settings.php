<?php

class Liane_Form_Settings {
  function __construct() {
    add_action( 'admin_menu', array($this, 'admin_menu' ) );
    add_action( 'admin_init', array($this, 'register_settings' ) );
  }
  function admin_menu() {
    add_options_page(
      'Liane Form Settings',
      'Liane Form',
      'manage_options',
      'liane_form',
      array( $this, 'settings_page' )
    );
  }
  function settings_page() {
    ?>
    <div class="wrap">
      <h1>Liane Form</h1>
      <form action="options.php" method="post">
        <?php
        settings_fields( 'liane_form_settings' );
        do_settings_sections( 'liane_form' );
        ?>
        <input
          type="submit"
          name="submit"
          class="button button-primary"
          value="<?php esc_attr_e( 'Save' ); ?>"
        />
      </form>
    </div>
    <?php
  }
  function register_settings() {
    register_setting(
      'liane_form_settings',
      'liane_form_settings',
      array( $this, 'validate_settings' )
    );

    add_settings_section(
      'default',
      '',
      array( $this, 'render_section' ),
      'liane_form'
    );

    add_settings_field(
      'server',
      'Server',
      array( $this, 'render_server_field' ),
      'liane_form',
      'default'
    );
    add_settings_field(
      'id',
      'Campaign ID',
      array( $this, 'render_id_field' ),
      'liane_form',
      'default'
    );
    add_settings_field(
      'shortcode',
      'Form shortcode',
      array($this, 'render_shortcode_field'),
      'liane_form',
      'default'
    );
    add_settings_field(
      'shortcode_compact',
      'Compact form shortcode',
      array($this, 'render_shortcode_compact_field'),
      'liane_form',
      'default'
    );
  }
  function render_section() {
    echo "<p>Setup your Liane server and campaign ID to embed forms using the shortcode.</p>";
  }
  function render_text_field($name) {
    $options = get_option( 'liane_form_settings' );
    printf(
      '<input type="text" name="%s" value="%s" />',
      esc_attr( 'liane_form_settings[' . $name . ']' ),
      esc_attr( $options[$name] )
    );
  }
  function render_server_field() {
    return $this->render_text_field('server');
  }
  function render_id_field() {
    return $this->render_text_field('id');
  }
  function render_shortcode_field() {
    echo '<p><code>[liane_form]</code></p>';
    echo '<p class="description">Paste this shortcode anywhere on a page or post</p>';
  }
  function render_shortcode_compact_field() {
    echo '<p><code>[liane_form compact="1"]</code></p>';
    echo '<p class="description">Compact version for leads</p>';
  }
  function validate_settings($input) {
    $output = array();

    // Sanitize text field
    $server = sanitize_text_field($input["server"]);
    $id = sanitize_text_field($input["id"]);

    // Validate server url
    $server = filter_var($server, FILTER_VALIDATE_URL);

    if(!$server) {
      add_settings_error('liane_form', '400', 'You must provide a valid URL for the server', 'error');
    } else {
      $output['server'] = $server;
    }

    // Validate ID
    if(strlen($id) > 17 || !preg_match('/^[\w\d]{17}$/', $id)) {
      add_settings_error('liane_form', '400', 'You must provide a valid Campaign ID', 'error');
    } else {
      $output['id'] = $id;
    }

    return $output;
  }
}

if(class_exists('Liane_Form_Settings')) {
  new Liane_Form_Settings();
}
