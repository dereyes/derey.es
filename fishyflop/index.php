<!doctype html>
<html lang="en">

<?php include '../include/projects.php'; getJSON('../'); setProjectTag('fishyflop');?>

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('Fishy Flop', '');
  ?>
</head>

<body>
  <?php include '../include/loading.php';?>
  <div id="content">
    <section class="tiles">
      <?php include '../include/header.php';?>
    </section>
    <section class="tiles">
      <div class="tileText col-100">
        <?php projectInfo()?>
        <h2>Concept</h2>
        <p><i>Fishy Flop</i> is a fin-tastic mobile game by The Fishy Flop Team. The game combines the physics of games like <i>Angry Birds</i> with the quirky controls of games like <i>QWOP</i>.</p>
        <p>I ensured that the game featured intuitive interfaces and vibrant, contemporary visuals.</p>
        <h2>The Fishy Flop Team</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/brian-mah-633b39126/">Brian Mah</a>, Lead Developer</li>
          <li><a href="https://www.linkedin.com/in/alex-jungroth-561282112/">Alex Jungroth</a>, Developer</li>
          <li>Daniel Schlesinger, Developer</li>
          <li><a href="https://jordanhmusic.com/">Jordan Henderson</a>, Music, Audio</li>
          <li>Me, Visuals and Interfaces</li>
        </ul>

        <h2>Samples</h2>
        <img src="fishyflop/images/7.jpg" alt="world 2 assets">
        <img src="fishyflop/images/1.jpg" alt="world 1 assets">
        <img src="fishyflop/images/2.jpg" alt="world 1 assets">
        <i class="fa fa-caret-up" aria-hidden="true"></i>
        <p class="caption">Two styles were established to differentiate background and foreground elements.</p>
        <img src="fishyflop/images/3.jpg" alt="ui assets">
        <img src="fishyflop/images/5.jpg" alt="world 1 assets">
        <img src="fishyflop/images/4.jpg" alt="world 2 assets">
        <img src="fishyflop/images/6.jpg" alt="world 2 assets">
        <img src="fishyflop/images/8.jpg" alt="world 2 assets">
        <img src="fishyflop/images/9.jpg" alt="world 2 assets">
        <img src="fishyflop/images/10.jpg" alt="world 2 assets">
        <i class="fa fa-caret-up" aria-hidden="true"></i>
        <p class="caption">Many elements were designed to be seamlessly tiled.</p>
      </div>
      <div class="tileText col-100 row-auto">
        <?php projectClickouts(); ?>
      </div>
    </section>
    <section class="tiles">
      <?php include '../include/footer.php';?>
    </section>
  </div>
</body>

</html>
