# backspace-block

Bower component to block the backspace button from working when user is not on an input field so that the browser doesn't trigger the back button.

## Installation

### bower

```shell
bower install backspace-block
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/backspace-block/backspace-block.js"></script>
```

## Features

After adding this project to your application the backspace key will only be registered by the browser when you are in an input field or a text area. There are no dependancies for this to function properly.

## Credits

This originated from JP Richardson's excellent library [prevent-backspace](https://github.com/jprichardson/prevent-backspace) which was written as a repackaging of an answer to [this](http://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back) StackOverflow question. Prevent-backspace is very useful for anyone using browserifiy or component but I wanted it to be able to be added with bower directly, as well as adding support for blocking when on radio buttons, checkboxes, selects, and submit buttons.

## License

(MIT License)

Copyright 2014, Chris Gruel  <cgruel@gmail.com>


