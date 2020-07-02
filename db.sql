# 스키마 생성
DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
USE blog;
# DB 생성
DROP DATABASE IF EXISTS site1;
USE site1;

# 게시물 테이블 생성
DROP TABLE IF EXISTS article;
CREATE TABLE article (
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    updateDate DATETIME NOT NULL,
    title CHAR(255) NOT NULL,
    `body` LONGTEXT NOT NULL
    displayStatus TINYINT(1) UNSIGNED NOT NULL,
    cateItemId INT(10) UNSIGNED NOT NULL,
    title CHAR(250) CHARSET utf8mb4 NOT NULL,
    `body` LONGTEXT CHARSET utf8mb4 NOT NULL
);

# 테스트 데이터 생성
INSERT INTO article SET regDate = NOW(), updateDate = NOW(),
title = '제목1', `body` = '# 내용 1';
INSERT INTO article SET regDate = NOW(), updateDate = NOW(),
title = '제목2', `body` = '# 내용 2';
INSERT INTO article SET regDate = NOW(), updateDate = NOW(),
title = '제목3', `body` = '# 내용 3';
INSERT INTO article SET regDate = NOW(), updateDate = NOW(),
title = '제목4', `body` = '# 내용 4';
# 카테고리 아이템 테이블 생성
DROP TABLE IF EXISTS cateItem;
CREATE TABLE cateItem (
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    `name` CHAR(100) NOT NULL UNIQUE
);

# 카테고리 아이템 추가
INSERT INTO cateItem SET regDate = NOW(), `name` = '일상';
INSERT INTO cateItem SET regDate = NOW(), `name` = 'IT/일반';
INSERT INTO cateItem SET regDate = NOW(), `name` = 'IT/프론트엔드';
INSERT INTO cateItem SET regDate = NOW(), `name` = 'IT/디자인';