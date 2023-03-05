create table userA
(
    username varchar(15) primary key not null,
    name varchar(30),
    password varchar(60) not null,
    region varchar(30),
    age numeric(2, 0) check(age >= 0),
    language varchar(30),
    platform varchar(30),
    profile_picture varchar(2048)
);

create table friend
(
    follower varchar(15) not null,
    followee varchar(15) not null,
    primary key(follower, followee),
    foreign key(follower) references userA(username),
    foreign key(followee) references userA(username)
);

create table game
(
    game_id int not null primary key,
    name varchar(60) unique not null,
    genre varchar(30) not null,
    language varchar(30) not null,
    platform varchar(30) not null,
    developer varchar(30) not null,
    release_year smallint not null,
    release_month smallint not null,
    release_day smallint not null,
    rating numeric(2, 1),
    current_price int not null check(current_price >= 0),
    game_image varchar(2048)
);

create table wishlist
(
    username varchar(15) not null,
    gid int not null,
    desire_rating numeric(2, 0) not null,
    primary key(username, gid),
    foreign key(username) references userA(username),
    foreign key(gid) references game(game_id)
);

create table own
(
    username varchar(15) not null,
    gid int not null,
    primary key(username, gid),
    foreign key(username) references userA(username),
    foreign key(gid) references game(game_id)
);

create table review
(
    username varchar(15) not null,
    gid int not null,
    star_rating numeric(2,1) not null,
    review_body varchar(512),
    primary key(username, gid),
    foreign key(username) references userA(username),
    foreign key(gid) references game(game_id)
);

create table comment
(
    username varchar(15) not null,
    gid int not null,
    comment_id int not null,
    commenter varchar(15),
    comment_body varchar(512),
    primary key(username, gid, comment_id),
    foreign key(username, gid) references review(username, gid),
    foreign key(commenter) references userA(username)
);


