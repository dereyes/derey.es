<!doctype html>
<html lang="en">

<head>
  <base href="../" />
  <?php
    include '../include/head.php';
    head('Contact', '');
  ?>
</head>

<body>
  <?php include '../include/loading.php';?>
  <div id="content">
    <section class="tiles">
      <?php include '../include/header.php';?>
    </section>
    <section class="tiles">
      <div class="tileText col-100 row-auto">
        <h1>Contact</h1>
        <form id="gform" method="POST" class="full" action="https://script.google.com/macros/s/AKfycbw3OqF_yQ8S1gdTuYfLyZzbsuCunk3iZi0sjvdwcARh_XocHwjt/exec">
          <table>
            <tr>
              <td>
                <label for="name"><h3>Name</h3></label>
              </td>
              <td>
                <input id="name" name="name">
              </td>
            </tr>
            <tr>
              <td>
                <label for="message"><h3>Message</h3></label>
              </td>
              <td>
                <textarea id="message" name="message" rows="6"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label for="email"><h3>Email</h3></label>
              </td>
              <td>
                <input id="email" name="email" type="email" value="" required="">
                <span id="email-invalid" style="visibility:hidden">
        Must be a valid email address</span>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button>Send</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class="tileText col-100 row-auto" style="display:none;" id="thankyou_message">
        <p>Message sent.</p>
      </div>
      <!-- submit the form using AJAX -->
      <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
    </section>
    <section class="tiles">
      <?php include '../include/footer.php';?>
    </section>
  </div>
</body>

</html>
