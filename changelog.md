# Changelog

## v 1.0.5:

* Reorganized and created bower package.

## v 1.0.4:

* Responsive: Reposition on window resize
* `destroy` method: Use $('.has-tip').frosty('destroy') to unbind events and remove the tooltips. Useful for cleanup in single page applications.
* `smartPosition` option: Override this to disable the tooltips smart position check. i.e. if it's overflowing off the screen, don't reposition it. I don't remember where I used this :O