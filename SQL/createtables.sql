create table user 
(
    username varchar(15) primary key not null,
    name varchar(30),
    password varchar(60) not null,
    region varchar(30)
    age numeric(2, 0) check(age >= 0),
    language varchar(30),
    platform varchar(30),
    profile_picture varchar(2048),
);

create table friend
(
    follower int not null,
    followee int not null,
    primary key(follower, followee),
    foreign key(follower) references user,
    foreign key(followee) references user
);

create table game
(
    game_id int not null primary key auto_increment,
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
    usename int not null,
    gid int not null,
    desire_rating numeric(2, 0) not null,
    primary key(usename, gid),
    foreign key(usename) references user,
    foreign key(gid) references game
);

create table own
(
    usename int not null,
    gid int not null,
    primary key(usename, gid),
    foreign key(usename) references user,
    foreign key(gid) references game
);

create table review
(
    usename int not null,
    gid int not null,
    star_rating numeric(2,1) not null,
    primary key(usename, gid),
    foreign key(usename) references user,
    foreign key(gid) references game
);

create table comment
(
    usename int not null,
    gid int not null,
    comment_id int not null,
    comment_body varchar(512),
    (usename, gid) references review
);