<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>블로그</title>
    <link rel="icon" href="../resource/img/favicon.ico">
    <link rel="icon" href="../resource/img/blog.logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
    <link rel="stylesheet" href="/resource/common.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/resource/common.js"></script>
</head>

<body>
    <div class="mobile-top-bar visible-sm-down flex">
        <a href="#" onclick="return false;" class="btn-toggle-mobile-side-bar flex-as-c">
            <div></div>
            <div></div>
            <div></div>
        </a>
    </div>
    <div class="mobile-side-bar-bg visible-sm-down"></div>
    <div class="mobile-side-bar visible-sm-down">
        <nav class="menu-box-1">
            <ul>
                <li><a href="#" class="block">History</a></li>

                <li><a href="#" class="block">Coffee</a>
                    <ul>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">Delivery</a></li>
                    </ul>
                </li>
                <li><a href="#" class="block">Notice</a></li>
                <ul>
                    <li><a href="#">inquiry</a></li>
                    <li><a href="#">information</a></li>
                </ul>
                <li><a href="#" class="block">SNS</a>
                    <ul>
                        <li><a href="https://github.com/yousangyeop" target="_blank" class="block">GITHUB</a></li>
                        <li><a href="www.facebook.com/profile.php?id=100003823120605" target="_blank"
                                class="block">FACEBOOK</a></li>
                        <li><a href="https://www.instagram.com/yeobb/" class="block">INSTA</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    <div class="top-bar visible-md-up">
        <div class="con height-100p flex">
            <a href="/" class="logo flex flex-ai-c">
                <img src="../resource/img/blog.logo.png" alt="" width="40">
            </a>
            <nav class="menu-box-1 flex flex-1-0-0">
                <ul class="flex flex-1-0-0">
                    <li class="flex-1-0-0 flex"><a href="/" class="flex flex-1-0-0 flex-ai-c flex-jc-c">History</a></li>
                    <li class="flex-1-0-0 flex"><a href="/list.php"
                            class="flex flex-1-0-0 flex-ai-c flex-jc-c">Coffee</a>
                        <ul>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Delivery</a></li>
                        </ul>
                    </li>
                    <li class="flex-1-0-0 flex"><a href="/aboutMe.php"
                            class="flex flex-1-0-0 flex-ai-c flex-jc-c">Notice
                        </a>
                        <ul>
                            <li><a href="#">inquiry</a></li>
                            <li><a href="#">information</a></li>
                        </ul>
                    </li>
                    <li class="flex-1-0-0 flex">
                        <a href="#" class="flex flex-1-0-0 flex-ai-c flex-jc-c">SNS</a>
                        <ul>
                            <li>
                                <a href="https://github.com/yousangyeop" target="_blank">
                                    GITHUB
                                </a>
                            </li>
                            <li>
                                <a href="www.facebook.com/profile.php?id=100003823120605" target="_blank">
                                    FACEBOOK
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/yeobb/" target="_blank">
                                    INSTA
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="slider">
        <div class="slides">
            <div class="active" style="background-image: url(./resource/img/slide1.jpg);"></div>
            <div style="background-image: url(./resource/img/slide2.jpg);"></div>
            <div style="background-image: url(./resource/img/slide3.jpg);"></div>
        </div>
        <div class="side-bars">
            <div><span><i class="fa fa-angle-left"></i></span></div>
            <div><span><i class="fa fa-angle-right"></i></span></div>
        </div>
    </div>