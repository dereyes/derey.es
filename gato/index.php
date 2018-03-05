<!doctype html>
<html lang="en">

<?php include '../include/projects.php'; getJSON('../'); setProjectTag('gato');?>

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('Gato', '');
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
        <p>The purpose of the grant was to create art that could help make babies and children school-ready. I designed a multi-layered experience that engaged the developing senses of babies, the playfulness of children, and the emotional development of their caretakers.</p>
        <p>The piece features a 20-foot stuffed cat, motion-reactive projected visuals, and music that changes depending on a visitor's position in the space.</p>
        <h2>Process</h2>
        <img src="gato/images/Sequence01_2.gif" alt="Kinect depth vision proof-of-concept">
        <i class="fa fa-caret-up" aria-hidden="true"></i>
   		<p class="caption">Using the XBox Kinect to create motion-reactive visuals in the Unity game engine</p>
        <img src="gato/images/20170515_162042(0).jpg" alt="kinect vision">
   		<p>The giant cat was inspired by the work of childhood psychologist DW Winnicott. He theorised that our childhood relationships to soft toys deepen our relationships to reality and ourselves, and prepare us to be emotionally mature adults.</p>
   		<p>It is meant to remind adults of what it was like to be small, and to have a stuffed companion. Young visitors have enjoyed climbing over the cat and cuddling with it while watching the projection. Some children have spent over an hour with the cat.</p>
   		<img src="gato/images/gatoHero.gif" alt="projection imagery">
   		<i class="fa fa-caret-up" aria-hidden="true"></i>
   		<p class="caption">Imagery in the projection tells the story of twenty-something reconnecting with their childhood selves.</p>
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
