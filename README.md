Laravel Elixir MJML
==================

[MJML](https://mjml.io/documentation/#getting-started) is a cool little tool for making responsive and inlined emails
in a simplier fashion. This library simply allows you to use it in 
[Laravel Elixir](https://laravel.com/docs/5.2/elixir) with zero fuss. Converting any .mjml templates into blade 
files (please bare in mind blade markup found in mjml files may sometimes break and it's best to stick to 
simple variable echos).

Install
-------

In your Laravel Project's base folder run:

```ssh
npm install --save-dev elixir-mjml
```

Then edit your gulpfile.js to contain the following:

```javascript
var elixir = require('laravel-elixir');
require('elixir-mjml');

elixir.config.email = {
    mjml: {
        folder: 'mjml'
    }
};

elixir(function(mix) {
    mix.mjml();
});

```

All the MJML should be placed in a folder called mjml inside the assets folder. When the gulp task is run it will
create the output blade files in your view resources folder. **The folder structure and files will be placed in keeping
to where your mjml is e.g. email/test.mjml will be made into email/test.blade.php, this act will overwrite previous
templates if the files match.**

You can modify the src, output and engine of the task in your gulpfile.js, like so:

```javascript
var mjmlEngine = require('mjml')

elixir(function(mix) {
    mix.mjml('**/*.mjml', 'resources/views', mjmlEngine);
});
```

Run
----

Simply run *gulp* or *gulp mjml* to make the magic happen.

Author & License
------

The MIT License (MIT)

Copyright (c) 2016 [Peter Fox](http://www.peterfox.me)
