<?php
//assembles the <head> of each page, including optional script tags
    function head($pageTitle='', $moreScripts='') {
      echo '
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
      ';
        //if a page title is specified, use it
        if ($pageTitle != '') {
            echo "<title>Darin E. Reyes / $pageTitle</title>";
        } else {
            echo '<title>Darin E. Reyes</title>';
        }
        echo "
        <!--libs-->
        <!--jquery-->
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <!--typekit-->
        <script src='https://use.typekit.net/ftq0ggh.js'></script>
        <script>
            try {
                Typekit.load({
                    async: true
                });
            } catch (e) {}
        </script>
        <!--Favicon-->
        <link rel='shortcut icon' href='images/favicon.png' type='image/png'/>
        <!--Google analytics-->
        <script>
            console.log('analytics');
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-85708609-1', 'auto');
            ga('send', 'pageview');
        </script>
        <!--fontawesome-->
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
        
        <!--css-->
   	    <link rel='stylesheet' href='css/loading.css'/>
        <link rel='stylesheet' href='css/components.css'/>
        <link rel='stylesheet' href='css/typography.css'/>
        <link rel='stylesheet' href='css/utilities.css'/>
        <link rel='stylesheet' href='css/structure.css'/>
        <link rel='stylesheet' href='css/header.css'/>
        ";
        //if more scripts are specified, add them
        if ($moreScripts != '') {
            echo $moreScripts;
        }
    }
?>
