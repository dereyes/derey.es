<!doctype html>
<html lang="en">

<?php include '../include/projects.php'; getJSON('../'); setProjectTag('arirang');?>

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('Arirang Visualization', '');
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
        <h2>Process</h2>
        <p>Violinist and songwriter Joe Kye enlisted me to design and code a live audio visualization to accompany his song “Arirang”. The song was inspired by his life as a Korean immigrant and a Korean folk song of the same name. I worked to not just visualize Joe's music, but to visualize the the story behind the song as well.</p>
        <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/BGNPpXtEd7C/embed/?cr=1&amp;v=7&amp;wp=747#%7B%22ci%22%3A0%2C%22os%22%3A1839.4%7D" allowtransparency="true" frameborder="0" height="343" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: rgb(255, 255, 255); border: 1px solid rgb(219, 219, 219); margin: 1px 1px 12px; max-width: 658px; width: calc(100% - 2px); border-radius: 4px; box-shadow: none; display: block; padding: 0px;"></iframe>
        <p>Joe and I met while I was collaborating on a visualization with Jiayi and Shih-Wen Young for a different song. Above is a video of us testing my code for that project. A week before the performance, I was charged with developing the visuals for “Arirang” on my own.</p>
        <img src="arirang/images/1.jpg" alt="The spritesheet used in the visualization">
        <p>The visualization combined pre-rendered sprites created in Adobe Illustrator with elements generated live within Processing. Each element was created or modified using audio input from Joe's performance.</p>
        <p>Joe had heard the folk song as a child, when his mother would hum it as she carried him on her back. The project gave us an opportunity to learn more about the song's history and significance, which helped us add meaning to the performance and visualization.</p>
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
