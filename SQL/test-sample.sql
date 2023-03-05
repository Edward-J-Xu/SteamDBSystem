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
where username = 'bob6', password = '123456';


/* Feature: Fill profile information
   Example: user bob6 fill his age as 21 and his language as Mandarin
*/
update user 
set age = 21
where username = 'bob6'
update user
set language = 'Mandarin'
where username = 'bob6';


/* Feature: Buy/own game, remove from wishlist if so
   Example: user 'bob6' bought a game with ID 111
*/
insert into own
values ('bob6', 111);

create trigger delete_from_wishlist after insert on own
referencing new row as nrow
for each row
begin
   delete from wishlist
   where username = nrow.username and game_id = nrow.game_id;
end;

/* Feature: Look up all games the user own
   Example: user bob6 looks up his own list, 
            and shows all games' name, image, genre, language, rating
*/
select name, game_image, genre, language, rating
from own, game
where wishes.game_id = game.game_id
and wishes.usename = 'bob6';


/* Feature: Search game by name, sort by rating by default, and use filter
   Example: searching "car", and then select language 'Finnish'
*/
select name, game_image, genre, language, rating
from game 
where name like '%car%'
and language = 'Finnish'
order by rating desc;


/* Feature: Create review, and update the game rating automatically
   Example: user bob6 reviews game 111 with 4.5 stars
*/
insert into review(username, gid, star_rating)
values ('bob6', 111, 4.5);

create trigger update_rating after insert on review
referencing new row as nrow
for each row
begin
   update game
   set rating = (
      select avg(star_rating) as rating
      from review
      group by review.gid
      where review.gid = nrow.gid
   )
   where game_id = nrow.gid
end;
