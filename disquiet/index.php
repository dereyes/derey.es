<!doctype html>
<html lang="en">

<?php include '../include/projects.php'; getJSON('../'); setProjectTag('disquiet');?>

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('DisQuiet Prototype', '');
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
		<img src="disquiet/images/2.JPG" alt="An early, clock-inspired iteration of an accessible musical interface">
		<i class="fa fa-caret-up" aria-hidden="true"></i><p class="caption">An early, clock-inspired iteration of an accessible musical interface</p>
		<p>The emotional health of incoming American college freshman hit an all-time low in 2014<sup>1</sup>. Half of all college students report “overwhelming anxiety”<sup>2</sup>. Each year, 1100 students take their own lives.</p>
		<p>For my Design Honors project at UC Davis, I asked <b>“How might I use interactive design to improve the lives of emotionally struggling students?”</b>.</p>
		<p>The result, an app named DisQuiet, is based on the principle of Dialectical Behavioral Therapy that an engaging, creative, multisensory distractions can help people survive moments when depression and anxiety are overwhelming.</p>
		<p>The app turns a user's touches, taps, and scribbles into harmonious musical loops, regardless of their musical experience. DisQuiet shows how we can expand the definitions of interactive design, human-centered design, and experience design to address core human issues.</p>
        <h2>Process</h2>
		<img src="disquiet/images/6.JPG" alt="A graph of responses to a survey question">
		
		<h3>Primary research</h3>
		<p>After framing the challenge and defining my audience, I surveyed UC Davis students on their musical preferences during emotional distress to get a sense of what people might listen for to relieve emotional distress. Responses were varied, and included esponses such as “Debussy”, “Kanye West”, “cacophonous”, “Bossa Nova”, and “Ukulele!”.</p>
		<img src="disquiet/images/3.JPG" alt="A later iteration, which was used in user testing">
		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">A later iteration, which was used in user testing</p>
		<p>After initial reading and surveying, I began iterating accessible musical interfaces and conducting user testing. One tester at the 2016 UC Davis Undergraduate Research Conference commented:</p>
		<blockquote>“I feel like I could use this for hours”.</blockquote>
		<img src="disquiet/images/4.JPG" alt="A monophonic melody sequencer">
		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">A monophonic melody sequencer</p>
		
		<h3>Secondary research</h3>
		<p>I collected work from a variety of fields to develop a wide and nuanced view of the issues. I read about Design for Meaningful Experiences, Human-Centered Design, Dialectical Behavioral Therapy, mindfulness, and more.</p>
		<img src="disquiet/images/heroDisQuiet.gif" alt="The last iteration">
		<i class="fa fa-caret-up" aria-hidden="true"></i>
		<p class="caption">The last iteration</p>
		<p>This was the first project where I explored the intersections of music, design, code, and mental health. I continued this exploration in projects such as <a href="gato/index.html">Gato</a>.</p>
        
        <p><sup>1</sup>According to the Higher Education Research Institute at UCLA</p>
   		<p><sup>2</sup>According to the American College Health Association</p>
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
