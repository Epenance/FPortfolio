<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width,initial-scale=1,maximum-scale=1" name="viewport" />
    <link href="css/screen.css" media="all" rel="stylesheet" type="text/css" />
    <title></title>
  </head>
  <body>
    <div id="menu-burger">
      <div class="vlign">
        <span class="frame-topbar-burger"></span>
      </div>
    </div>
    <div id="sidebar">
      <div id="logo_box">
        <a href="#">
          <div class="desk">
            <span class="frame-MHlogo"></span>
          </div>
          <div class="mob">
            <span class="frame-MHlogo"></span>
          </div>
        </a>
      </div>
      <div id="sidebar_backdrop">
        <nav id="sidebar_content_wrapper">
          <?php include('sidebar.php') ?>
        </nav>
      </div>
    </div>
    <div id="site">
      <div id="content">
        <?php include('profile.php') ?><?php include('myskills.php') ?>
      </div>
    </div>
    <script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.1.min.js"></script>
    <script src="js/fancy.js"></script>
  </body>
</html>
