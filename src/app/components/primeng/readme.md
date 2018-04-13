# Instructions for PrimeNG setup

## Dependencies - Packages
```
"primeng": "~5.2.0",             //required: PrimeNG components
"jquery": "~3.2.1",              //optional: schedule (and scroll component?)
"chart.js": "~2.7.1",            //optional: chart
"fullcalendar": "~3.5.1",        //optional: schedule
"moment": "~2.18.1",             //optional: chart and schedule
"quill": "~1.1.8",               //optional: editor
```

## Dependencies - Styles
```
"styles": [
  "../node_modules/primeng/resources/primeng.min.css",        //required: PrimeNG components
  "../node_modules/fullcalendar/dist/fullcalendar.min.css",   //optional: schedule
  "../node_modules/quill/dist/quill.snow.css",                //optional: editor
  "../node_modules/nanoscroller/bin/css/nanoscroller.css",    //optional: nanoscroller
  "styles.scss"                                               //your styles and overrides
],
```

## Dependencies - Scripts
```
"scripts": [
  "../node_modules/jquery/dist/jquery.js",                                //optional: schedule and nanoscroller
  "../node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js",  //optional: nanoscroller
  "assets/layout/js/ripple.js",                                           //optional: ripple effect
  "../node_modules/moment/moment.js",                                     //optional: schedule and charts
  "../node_modules/chart.js/dist/Chart.js",                               //optional: charts
  "../node_modules/fullcalendar/dist/fullcalendar.js",                    //optional: schedule
  "../node_modules/quill/dist/quill.js"                                   //optional: editor
],
```
