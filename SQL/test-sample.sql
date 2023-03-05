/* Feature: Register
   Example: username: bob6  password: 123456
*/
insert into userA (username, password)
values ('bob6', '123456');

select * from userA where username = 'bob6';

/* Feature: Login
   Example: user bob6 input the password 123456
*/
select username from userA
where username = 'bob6' and password = '123456';

/* Feature: Fill profile information
   Example: user bob6 fill his age as 21 and his language as Mandarin
*/
update userA
set age = 21
where username = 'bob6';
update userA
set language = 'Mandarin'
where username = 'bob6';
select * from userA where username = 'bob6';

/* Feature: Insert into owned games
*/
insert into own
values ('bob6', 112);
select * from own where username = 'bob6';

/* Feature: Look up all games the user own
   Example: user bob6 looks up his own list, 
            and shows all games' name, image, genre, language, rating
*/
select name, game_image, genre, language, rating
from own, game
where own.gid = game.game_id
and own.username = 'bob6';

/* Feature: Search game by name, sort by rating by default, and use filter
   Example: searching "car", and then select language 'English'
*/
select name, game_image, genre, language, rating
from game 
where name like '%car%'
and language = 'English'
order by rating desc;

/* Feature: Create review
*/
insert into review(username, gid, star_rating)
values ('bob6', 112, 4.5);
select * from review where username = 'bob6';
select * from game where game_id = 112;

/* Feature: Create comment
   Example: user bob6 comments game 111 with "This game is fun!"
*/
insert into comment(username, gid, comment_id, commenter, comment_body)
values ('bob6', 112, 10, 'bob6', 'This game is fun!');
select * from comment where username = 'bob6' and gid = 112;
