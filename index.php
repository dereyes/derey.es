<!doctype html>
<html lang="en">
<?php include '/include/projects.php'; getJSON(''); ?>

<head>
  <base href="" />
  <?php
    include '/include/head.php';
    head('Home', '');
  ?>
</head>

<body>
  <?php include '/include/loading.php';?>
  <div id="content">
    <section class="tiles">
      <?php include '/include/header.php';?>
      <?php include '/include/footer.php';?>
    </section>
    <section class="tiles">
      <div class="tileTitle">
        <h1>Latest<br><i class="fa fa-caret-down" aria-hidden="true"></i></h1>
      </div>
      <?php projectTile('gato'); ?>
      <a class="tileBigText col-lg-2" style="background:url('gato/images/gatoVideoPreview.gif');background-position:center;" href="https://vimeo.com/243570108">
        <div class="tileBigTextInfo">
          <h1>Watch the mini-doc on Vimeo</h1>
        </div>
      </a>
    </section>
    <section class="tiles">
      <div class="tileTitle">
        <h1>Upcoming <i class="fa fa-caret-down" aria-hidden="true"></i></h1>
      </div>
      <div class="tileText">
        <p>3/10<br>Concert visualization<br>w/ Joe Kye<br>Sofia Tsakopoulous Center for the Arts, Sacramento, CA</p>
        <a class="button" href="https://www.ticketfly.com/event/1617985-joe-kye-sacramento/">Tickets</a>
      </div>
      <div class="tileText">
        <p>4/19<br>Concert visualization<br>w/ The Hot Baked Goods<br>Crocker Art Museum, Sacramento, CA</p>
        <a class="button" href="https://www.crockerart.org/event/1560/2018-04-19">Tickets</a>
      </div>
    </section>
    <section class="tiles">
      <div class="tileTitle">
        <h1>2017<br><i class="fa fa-caret-down" aria-hidden="true"></i></h1>
      </div>
      <?php projectTile('breathe'); ?>
    </section>
    <section class="tiles">
      <div class="tileTitle">
        <h1>2016<br><i class="fa fa-caret-down" aria-hidden="true"></i></h1>
      </div>
      <?php projectTile('fishyflop'); ?>
      <?php projectTile('arirang'); ?>
      <?php projectTile('disquiet'); ?>
    </section>
    <section class="tiles">
      <div class="tileTitle">
        <h1>2015<br><i class="fa fa-caret-down" aria-hidden="true"></i></h1>
      </div>
      <?php projectTile('audiovisuals'); ?>
    </section>
  </div>
</body>

</html>
