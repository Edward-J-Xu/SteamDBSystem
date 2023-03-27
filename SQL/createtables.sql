create table userA
(
    id int not null auto_increment primary key,
    username varchar(15) unique not null,
    name varchar(30),
    password varchar(60) not null,
    region varchar(30),
    age numeric(2, 0) check(age >= 0),
    language varchar(30),
    platform varchar(30)
);

create table game
(
    game_id int not null auto_increment primary key,
    name varchar(60) unique not null,
    description text not null,
    genre varchar(30) not null,
    language varchar(30) not null,
    platform varchar(30) not null,
    developer varchar(100) not null,
    release_year smallint not null,
    release_month smallint not null,
    release_day smallint not null,
    rating numeric(2, 1),
    current_price DOUBLE PRECISION not null check(current_price >= 0),
    game_image varchar(2048)
);

create table post
(
    id int not null auto_increment primary key,
    username varchar(15) not null,
    gid int not null,
    title varchar(512) not null,
    postText varchar(512) not null,
    foreign key(username) references userA(username),
    foreign key(gid) references game(game_id)
);

create table comment
(
    id int not null auto_increment primary key,
    comment_body varchar(512) not null,
    post_id int not null,
    username varchar(15) not null,
    foreign key(username) references userA(username),
    foreign key(post_id) references post(id)
);

create table likes
(
    post_id int not null,
    user_id int not null,
    primary key(post_id, user_id),
    foreign key(post_id) references post(id),
    foreign key(user_id) references userA(id)
);

create table own
(
    username varchar(15) not null,
    gid int not null,
    primary key(username, gid),
    foreign key(username) references userA(username),
    foreign key(gid) references game(game_id)
);
