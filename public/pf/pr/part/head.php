<?php
if ( isset($pageName) == false ) {
    $pageName = '';
}
?>

<!DOCTYPE html>
<html lang="en">

<head data-fullpage-index="0">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>폴로스터즈</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.css">

    <link rel="stylesheet" href="common.css">
    <script src="common.js"></script>

</head>

<body>
    <div class="side-bar">
        <div class="logo"><a href="http://localhost:8077/pf/pr/public/index.php"><img src="https://yousangyeop.github.io/img1/pr_img/logo.png" alt=""></a></div>
        <ul class="menu-bar">
            <li class="menu-1 <?=$pageName == 'about' ? 'active' : ''?>"><a href="about.php">about</a></li>
            <li class="menu-2 <?=$pageName == 'onlineShop' ? 'active' : ''?>"><a href="onlineShop.php">online shop</a></li>
            <li class="menu-3 <?=$pageName == 'wholesale' ? 'active' : ''?>"><a href="wholesale.php">wholesale</a></li>
            <li class="menu-4 <?=$pageName == 'class' ? 'active' : ''?>"><a href="class.php">class</a></li>
            <li class="menu-5 <?=$pageName == 'notice' ? 'active' : ''?>"><a href="notice.php">notice</a></li>
        </ul>
    </div>