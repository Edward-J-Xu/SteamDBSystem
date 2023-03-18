use steamdb;

create table if not exists posts
(
    id          int primary key auto_increment,
    title       varchar(50)  not null,
    postText    varchar(500) not null,
    username    varchar(15) not null
);

create table if not exists users
(
    id       int primary key auto_increment,
    username varchar(15) unique not null,
    password varchar(60) not null
);

create table if not exists comments
(
    id           int primary key auto_increment,
    comment_body varchar(500) not null,
    post_id      int not null,
    username     varchar(15) not null,
    constraint   fk_post_id foreign key (post_id) references posts (id) on delete cascade
);

create table if not exists likes
(
    id           int primary key auto_increment,
    post_id      int not null,
    user_id      int not null,
    constraint   like_post_id foreign key (post_id) references posts (id) on delete cascade,
    constraint   like_user_id foreign key (user_id) references users (id) on delete cascade
);
