/* Feature: Register
   Example: username: bob6  password: 123456
*/
insert into user (username, password)
values ('bob6', '123456');


/* Feature: Login
   Example: user bob6 input the password 123456
*/
select ID, username
from user
where username = 'bob6', password = '123456'


/* Feature: Fill profile information
   Example: user bob6 fill his age as 21 and his language as Mandarin
*/
update user 
set age = 21
where username = 'bob6'
update user
set language = 'Mandarin'
where username = 'bob6'


/* Feature: Buy/own game, remove from wishlist if so
   Example: user with ID 1001 bought a game with ID 22222
*/
insert into owns
values (1001, 22222);
delete from wishes
where user_id = 1001 and game_id = 22222;


/* Feature: Look up all games the user own
   Example: user with ID 1001 looks up his own list, 
            and shows all games' name, image, genre, language, rating
*/
select name, game_image, genre, language, rating
from wishes, game
where wishes.game_id = game.ID
and wishes.user_id = 1001;


/* Feature: Search game by name, sort by rating by default
   Example: searching "horizon"
*/
select name, game_image, genre, language, rating
from game 
where name like '%horizon%'
order by rating desc
