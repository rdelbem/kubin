## Kubin Gallery is an open source vanilla JavaScript gallery app.

### How it works under the hood

Kubin gallery uses ES6 OOP syntax to form its architecture.  
You are more than welcome to contribute, you just have to bare a couple of things in your mind (read the following topics).

Be our guest and take a look on our app: https://rdelbem.github.io/kubin/

### Architecture

The basic archive is in the folder src and it is named App.js. It works as a loader for all the classes involved in the features of the gallery.  
Inside the folder modules, there are four files, they are: Gallery.js, Lightbox.js, Thumbs.js and Options.js.

- Thumbs.js

  > It is the basic and most upleveled class. Thumbs initiate all core features, properties and listeners. It grabs all the options setted in the Options files and equate them to its properties, which are available troughout the app. If you plan on making a feature bare this in mind, you may want to extend this class, if your feature is new and do not maintain a relation to the other classes.

- Gallery.js

  > Gallery is a second rank class, as it cares for the behavior of the displayer div and zoom in and out. In it, it is possible to find methods that update the current image being displayed on the displayer div.

- Lightbox.js

  > As the name sugests, Lightbox class controls the light box. This feature is the prime of Kubin Gallery. In it, there are several event listeners to grab arrow navigation and escape. All listeners are removed as soon as they are no longer useful, so to avoid bloating.

- Options.js
  > This is not a class, this is just a variable equated to an object. The variable setOptions is outed to the most elevated scope, in order to enable the usage of this app in any html page from a remote cdn. In other words, imagine you want to throw a gallery to a project, all you have to do is embed Kubin Gallery to your page with the link https://rdelbem.github.io/kubin/kubin-gallery-v1.js and do not forget the css https://rdelbem.github.io/kubin/kubin-styles-v1.css.

#### Not sure if you want to be part of this project?

Reach me on my e-mail or linkedin, we can chat over your thougts!
