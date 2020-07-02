<?php
include "../part/head.php";

// 전화번호 세팅
$dbHost = "site1.blog.oa.gg";
$dbPort = 3306;
$dbId = "site1";
$dbPw = "sbs123414";
$dbName = 'site1';

// 전화걸기
$dbConn = mysqli_connect($dbHost, $dbId, $dbPw, $dbName, $dbPort) or die("DB CONNECTION ERROR");

// 전화연결이 성공했다면 이 부분 실행됨

$cateItemId = 5;

$sql = "
SELECT name
FROM cateItem
WHERE id = '{$cateItemId}'
";
$rs = mysqli_query($dbConn, $sql);
$row = mysqli_fetch_assoc($rs);
$cateItemName = $row['name'];

// 상대방에게 할말 적기
$sql = "
SELECT *
FROM article
WHERE cateItemId = '{$cateItemId}'
ORDER BY id DESC
";

// 말하고 응답받기
$rs = mysqli_query($dbConn, $sql);
$rows = [];
while ( true ) {
    $row = mysqli_fetch_assoc($rs);
    if ( $row == null ) {
        break;
    }
    $rows[] = $row;
}
?>
<link rel="stylesheet" href="/resource/hobby.css">

<div><?=$cateItemName?> 게시물 리스트</div>

<nav class="list-box-1 flex flex-ai-c">
    <ul class="flex">
        <?php foreach ( $rows as $row ) { ?>
        <li>
            <a href="detail.php?id=<?=$row['id']?>">
                <img src="<?=$row['thumbImgUrl']?>" alt="" >
                <div class="title"><?=$row['title']?></div>
            </a>
        </li>
        <?php } ?>
    </ul>
</nav>

<?php
include "../part/foot.php";
?>