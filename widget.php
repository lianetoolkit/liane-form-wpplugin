<?php

class Liane_Form_Widget extends WP_Widget {
  function __construct() {
    parent::__construct(
      "liane_form_widget",
      "Liane Form",
      array(
        "description" => "Display your campaign form."
      )
    );
  }
  // Creating widget front-end
  public function widget( $args, $instance ) {
    $title = apply_filters( "widget_title", $instance["title"] );
    echo $args["before_widget"];
    if( !empty($title) )
      echo $args["before_title"] . $title . $args["after_title"];
    echo do_shortcode('[liane_form compact="1"]');
    echo $args["after_widget"];
  }

  // Creating widget Backend
  public function form( $instance ) {
    if( isset( $instance["title"] ) ) {
      $title = $instance["title"];
    } else {
      $title = "Be part of our campaign!";
    }
    ?>
    <p>
      <label for="<?php echo $this->get_field_id( "title" ); ?>">
        <?php _e("Title"); ?>
      </label>
      <input
        class="widefat"
        type="text"
        id="<?php echo $this->get_field_id( "title" ); ?>"
        name="<?php echo $this->get_field_name( "title" ); ?>"
        value="<?php echo esc_attr( $title ); ?>"
      />
    </p>
    <?php
   }

  // Updating widget replacing old instances with new
  public function update( $new_instance, $old_instance ) {
    $instance = array();
    $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
    return $instance;
  }
}

function liane_form_load_widget() {
  register_widget( "Liane_Form_Widget" );
}
add_action("widgets_init", "liane_form_load_widget");
