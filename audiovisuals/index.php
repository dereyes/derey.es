<!doctype html>
<html lang="en">

<?php include '../include/projects.php'; getJSON('../'); setProjectTag('audiovisuals');?>

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('Audiovisuals', '');
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
		<p>When I was a kid, I was fascinated by the music visualizers that I found in the Windows XP-era Media Player. When I began learning to code, I decided to try making a visualizer as well. In addition to generating .gif and video art, the project allowed me to learn about math, electronics, physics, and music theory.</p>
		<p>This was the first project where I explored the intersections of music, design, and code. I continued this exploration in projects such as <a href="disquiet/index.html">DisQuiet</a>, <a href="arirang/index.html">Arirang</a>, and <a href="gato/index.html">Gato</a>.</p>
        
        <h2>Samples</h2>
   		
   		<img src="audiovisuals/images/AudioVisuals (1).gif" alt="“Viernes” by Omar Rodriguez Lopez and Ximena Sariñana">
   		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">“Viernes” by Omar Rodriguez Lopez and Ximena Sariñana</p>
  	
  		<img src="audiovisuals/images/AudioVisuals (3).gif" alt="“L’Via L’Viaquez” by The Mars Volta">
   		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">“L’Via L’Viaquez” by The Mars Volta</p>
   		
   		<img src="audiovisuals/images/AudioVisuals (2).gif" alt="“Irene” by Caribou">
   		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">“Irene” by Caribou</p>
   
  		<img src="audiovisuals/images/AudioVisuals (5).gif" alt="“Linne (Black XS Session)” by Shugo Tokumaru">
   		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">“Linne (Black XS Session)” by Shugo Tokumaru</p>
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
