import React from "react";

export default (
  <form
    target="_blank"
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
  >
    <input type="hidden" name="business" value="jakubmacioszek@gmail.com" />
    <input type="hidden" name="cmd" value="_cart" />
    <input type="hidden" name="display" value="1" />{" "}
    <input
      type="image"
      name="submit"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif"
      alt="View cart"
    />
    <img
      alt=""
      width="1"
      height="1"
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
    />
  </form>
);
