<?php
$projects =[];
$projectTag = '';
$p = [];

function getJSON($pathModifier){
  //get projects json
  $json = file_get_contents($pathModifier.'json/projects.json');
  //decode
  $GLOBALS['projects'] = json_decode($json, true);
}

function setProjectTag($tag){
  $GLOBALS['projectTag'] = $tag;
  
  foreach ($GLOBALS['projects'] as $array => $p) {
    if ($p['projectTag'] == $tag) {
      $GLOBALS['p'] = $p;
    }
  }
  
  //$GLOBALS['p'] = $GLOBALS['projectTag'][$tag];
}

function projectTile ($tag){
  foreach ($GLOBALS['projects'] as $array => $p) {
    if ($p['projectTag'] == $tag) {
      echo "
      <a id='{$p['projectTag']}' class='tileProject' style='
        background:url(\"{$p['preview']}\");
        background-position: center;
        background-size: cover;
      ' href='{$p['projectTag']}/index.php'>
        <div class='tileProjectInfo'>
          <h2>{$p['title']}</h2>
          <p>{$p['subtitle']}</p>
        </div>
      </a>
      ";
    }
  }
}

//setProjectTag needs to be set before these can work:
function projectInfo (){
  echo "
    <h1>{$GLOBALS['p']['title']}</h1>
    <p>{$GLOBALS['p']['subtitle']}</p>
    {$GLOBALS['p']['hero']}
  ";
  if ($GLOBALS['p']['heroCaption'] != '') {
    echo "<i class='fa fa-caret-up' aria-hidden='true'></i><p class='caption'>{$GLOBALS['p']['heroCaption']}</p>";
  }
  echo "<table>";
  if ($GLOBALS['p']['client'] != '') {
    echo "
      <tr>
        <td>
          <h3>Client</h3>
        </td>
        <td>
          <p>{$GLOBALS['p']['client']}</p>
        </td>
      </tr>
    ";
  }
  if ($GLOBALS['p']['role'] != '') {
    echo "
      <tr>
        <td>
          <h3>Role</h3>
        </td>
        <td>
          <p>{$GLOBALS['p']['role']}</p>
        </td>
      </tr>
    ";
  }
  if ($GLOBALS['p']['tools'] != '') {
    echo "
      <tr>
        <td>
          <h3>Tools</h3>
        </td>
        <td>
          <p>{$GLOBALS['p']['tools']}</p>
        </td>
      </tr>
    ";
  }
  if ($GLOBALS['p']['status'] != '') {
    echo "
      <tr>
        <td>
          <h3>Status</h3>
        </td>
        <td>
          <p>{$GLOBALS['p']['status']}</p>
        </td>
      </tr>
    ";
  }
  echo "</table>";
}

function projectCLickouts() {
  //find the index of $p, make buttons for the ones before and after it unless it's last or first in the list
  for($i = 0; $i < sizeof($GLOBALS['projects']); $i++) {
    //find this project's index in the JSON file
    $pIndex;
    if ($GLOBALS['projects'][$i]['projectTag'] == $GLOBALS['projectTag']) {
      $pIndex = $i;
    }
  }
  
  //'previous' button if index is not last
  if ($pIndex < sizeof($GLOBALS['projects'])-1) {
    $prevProjectTag = $GLOBALS['projects'][$pIndex+1]['projectTag'];
    $prevTitle = $GLOBALS['projects'][$pIndex+1]['title'];

    echo "<a class='button' href='{$prevProjectTag}/index.php'>Previous project: {$prevTitle}</a> ";
  }
  //'next' button if index is not first
  if ($pIndex > 0) {
    $nextProjectTag = $GLOBALS['projects'][$pIndex-1]['projectTag'];
    $nextTitle = $GLOBALS['projects'][$pIndex-1]['title'];

    echo "<a class='button' href='{$nextProjectTag}/index.php'>Next project: {$nextTitle}</a>";
  }
}
;?>
