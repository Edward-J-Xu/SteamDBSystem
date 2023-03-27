/* Feature: Register
   Example: username: bob6  password: 123456
*/
insert into userA (username, name, password, region, age, language, platform)
values ('bob6', 'Bob', '123456', 'Canada', 21, 'English', 'Windows');

select * from userA where username = 'bob6';

/* Feature: Login
   Example: user bob6 input the password 123456
*/
select username from userA
where username = 'bob6' and password = '123456';

/* Feature: Add/Delete Post
   Example: bob6 reviews game with game id 2
*/
insert into post(username, gid, title, postText)
values ('bob6', 2, 'Bobs Review', 'not bad');
select * from post where username = 'bob6';
select * from post where gid = 2;

delete from post
where username = 'bob6';

select * from post where gid = 2;

/* Feature: Add/Delete Comment
*/
insert into comment(comment_body, post_id, username)
values ('This game is fun!', 2, 'bob6');
select * 
from comment natural join (select username, name
			         from userA
			         where username = 'bob6') as T;


/* Feature: Display all the attributes of a user, including the number of posts he made
   Example: user bob6 looks up his own profile
*/
select * from userA where username = 'bob6';

insert into post(username, gid, title, postText)
values ('bob6', 2, 'Bobs Review', 'not bad');

insert into post(username, gid, title, postText)
values ('bob6', 2, 'Bobs 2nd Review', 'kinda bad actually');

insert into post(username, gid, title, postText)
values ('bob6', 1, 'Bobs 3rd Review', 'not bad actually');

select userA.username, count(*) as post_count
from userA join post on userA.username = post.username
where userA.username = 'bob6'
group by userA.username;


/* Feature: Display games in alphabetical order
*/
select * from game 
order by name asc
limit 10





