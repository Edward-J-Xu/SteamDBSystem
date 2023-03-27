-- Inserting some users data into userA table
INSERT INTO userA (username, name, password, region, age, language, platform) VALUES 
('john123', 'John Smith', 'password123', 'USA', 35, 'English', 'PC'),
('jane456', 'Jane Doe', 'password456', 'Canada', 28, 'French', 'Xbox'),
('bob789', 'Bob Johnson', 'password789', 'Mexico', 42, 'Spanish', 'PlayStation');


INSERT INTO game (name, description, genre, language, platform, developer, release_year, release_month, release_day, rating, current_price, game_image) VALUES
('The Isle', 'abc', 'Simulation', 'English', 'WIN', 'Afterthought LLC', 2015, 12, 1, 3.8, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/376210/header.jpg'),
('Fragile Allegiance', 'abc', 'Strategy', 'English', 'WIN', 'Interplay Entertainment', 2015, 6, 30, 3.8, 6.1, 'https://steamcdn-a.akamaihd.net/steam/apps/383100/header.jpg'),
('Mad Combat Marines', 'abc', 'Indie', 'English', 'WIN', 'FreezeNova', 2016, 7, 13, 3.6, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/485370/header.jpg'),
('Rituals in the Dark', 'abc', 'Simulation', 'English', 'LNX', 'ebi-hime', 2019, 11, 20, 3.2, 8.0, 'https://steamcdn-a.akamaihd.net/steam/apps/1118880/header.jpg'),
('Gunmetal Arcadia', 'abc', 'Adventure', 'French', 'MAC', 'Minor Key Games', 2017, 2, 7, 3.8, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/332270/header.jpg'),
('Pipe Push Paradise', 'abc', 'Indie', 'Portuguese - Brazil', 'LNX', 'Corey Martin', 2018, 1, 18, 4.0, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/721390/header.jpg'),
('Invisible Mind', 'abc', 'Indie', 'Russian', 'WIN', 'VGstudio', 2016, 8, 10, 4.2, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/502090/header.jpg'),
('CyberThreat', 'abc', 'Action', 'Spanish - Spain', 'WIN', 'Enigmatic', 2016, 8, 18, 4.3, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/516590/header.jpg'),
('Iron Brigade', 'abc', 'Strategy', 'German', 'WIN', 'Double Fine Productions', 2012, 8, 13, 4.0, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/115120/header.jpg'),
('East Tower - Takashi (East Tower Series Vol. 2)', 'abc', 'Casual', 'Japanese', 'WIN', 'ROSEVERTE', 2015, 5, 27, 4.0, 6.9, 'https://steamcdn-a.akamaihd.net/steam/apps/356540/header.jpg'),
('TableTop Soccer', 'abc', 'Casual', 'English', 'MAC', 'Dancing Developers', 2016, 4, 22, 3.8, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/453710/header.jpg'),
('Dyno Adventure', 'abc', 'Indie', 'English', 'WIN', 'aresarx', 2016, 9, 26, 4.2, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/525600/header.jpg'),
('Bayla Bunny', 'abc', 'Casual', 'English', 'WIN', 'EnsenaSoft', 2016, 6, 13, 3.2, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/489900/header.jpg'),
('Caesar™ IV', 'abc', 'Simulation', 'English', 'WIN', ' Inc.', 2016, 8, 29, 3.5, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/517810/header.jpg'),
('Sine Mora EX', 'abc', 'Action', 'French', 'WIN', 'Digital Reality', 2017, 8, 8, 3.6, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/606730/header.jpg'),
('Shallow Space', 'abc', 'Early Access', 'English', 'LNX', 'Special Circumstances', 2015, 10, 21, 3.0, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/305840/header.jpg'),
('Cosmic Dust & Rust', 'abc', 'Strategy', 'English', 'WIN', '16bit Nights', 2016, 5, 17, 3.8, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/473560/header.jpg'),
('Neon Warp', 'abc', 'Indie', 'Portuguese - Brazil', 'WIN', 'Axel Sonic', 2016, 7, 29, 4.0, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/485920/header.jpg'),
('Gunlok', 'abc', 'Strategy', 'English', 'WIN', 'Rebellion', 2019, 12, 3, 4.0, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/254900/header.jpg'),
('Song of the Deep', 'abc', 'Adventure', 'Portuguese - Brazil', 'WIN', 'Insomniac Games', 2016, 7, 11, 3.7, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/460700/header.jpg'),
('Clutch', 'abc', 'Action', 'English', 'WIN', 'Targem Games', 2009, 7, 20, 2.7, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/35310/header.jpg'),
('MechaNika', 'abc', 'Indie', 'Italian', 'WIN', 'Mango Protocol', 2015, 7, 16, 3.6, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/384680/header.jpg'),
('Dead End Job', 'abc', 'Indie', 'Arabic', 'WIN', 'Ant Workshop Ltd', 2019, 12, 13, 2.5, 19.5, 'https://steamcdn-a.akamaihd.net/steam/apps/827610/header.jpg'),
('Hentai energy II', 'abc', 'Indie', 'Portuguese', 'WIN', 'Crew Lab', 2019, 6, 7, 2.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/1085560/header.jpg'),
('Zombie Panic In Wonderland DX', 'abc', 'Indie', 'English', 'WIN', 'Akaoni Studio', 2019, 11, 6, 3.5, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/1173850/header.jpg'),
('Pyroblazer®', 'abc', 'Racing', 'English', 'WIN', 'Eipix', 2008, 11, 13, 3.7, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/21500/header.jpg'),
('Lifeline', 'abc', 'Indie', 'Simplified Chinese', 'WIN', '3 Minute Games', 2017, 3, 16, 1.0, 4.6, 'https://steamcdn-a.akamaihd.net/steam/apps/585290/header.jpg'),
('Akin', 'abc', 'Casual', 'English', 'WIN', 'ThinkOfGames', 2016, 6, 6, 3.5, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/487370/header.jpg'),
('MiniOne Racing', 'abc', 'Racing', 'English', 'WIN', 'Frogames', 2015, 7, 1, 4.2, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/380000/header.jpg'),
('Mini Ninjas', 'abc', 'Adventure', 'English', 'WIN', 'IO Interactive', 2009, 9, 8, 3.5, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/35000/header.jpg'),
('Red Wake Carnage', 'abc', 'Indie', 'English', 'WIN', 'Racing Bros', 2017, 8, 31, 1.5, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/656610/header.jpg'),
('Deadly 30', 'abc', 'Indie', 'English', 'WIN', 'Ignatus Zuk and Gonzalo Villagomez', 2014, 1, 8, 2.7, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/264730/header.jpg'),
('Theatre of War', 'abc', 'Strategy', 'Russian', 'WIN', '1C Entertainment', 2010, 7, 9, 4.0, 4.6, 'https://steamcdn-a.akamaihd.net/steam/apps/46290/header.jpg'),
('Freespace 2', 'abc', 'Action', 'English', 'WIN', 'Volition Inc', 2014, 6, 6, 4.3, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/273620/header.jpg'),
('LUNA The Shadow Dust', 'abc', 'Adventure', 'Hungarian', 'MAC', 'Lantern Studio', 2020, 2, 13, 4.0, 20.7, 'https://steamcdn-a.akamaihd.net/steam/apps/465100/header.jpg'),
('Sacred Earth - Promise', 'abc', 'RPG', 'English', 'WIN', 'Sacred Star Team', 2018, 10, 23, 4.0, 14.9, 'https://steamcdn-a.akamaihd.net/steam/apps/938100/header.jpg'),
('Fated Souls 3', 'abc', 'Action', 'English', 'WIN', 'Warfare Studios', 2017, 3, 10, 4.0, 8.0, 'https://steamcdn-a.akamaihd.net/steam/apps/602790/header.jpg'),
('VThree', 'abc', 'Action', 'English', 'WIN', '2xMilk', 2017, 2, 28, 1.0, 9.2, 'https://steamcdn-a.akamaihd.net/steam/apps/567320/header.jpg'),
('Pavel Quest', 'abc', 'Indie', 'English', 'WIN', ' LLC', 2015, 5, 13, 3.0, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/366460/header.jpg'),
('Maximum Override', 'abc', 'Casual', 'English', 'WIN', 'Alientrap', 2017, 3, 9, 3.9, 8.0, 'https://steamcdn-a.akamaihd.net/steam/apps/389220/header.jpg'),
('TowerFall Ascension', 'abc', 'Indie', 'English', 'MAC', 'Matt Thorson', 2014, 3, 11, 4.2, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/251470/header.jpg'),
('Mr. Bree+', 'abc', 'Indie', 'Spanish - Spain', 'WIN', 'TawStudio Entertainment', 2014, 5, 1, 2.8, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/264220/header.jpg'),
('Real Boxing™', 'abc', 'Sports', 'German', 'WIN', 'Vivid Games S.A.', 2014, 7, 2, 3.5, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/296770/header.jpg'),
('BoxEngine', 'abc', 'Indie', 'English', 'WIN', 'Mashiro', 2018, 3, 18, 2.5, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/814890/header.jpg'),
('SquareCells', 'abc', 'Indie', 'English', 'MAC', 'Matthew Brown', 2015, 12, 7, 3.8, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/416770/header.jpg'),
('Block Story™', 'abc', 'Action', 'German', 'WIN', 'MindBlocks Studio', 2015, 12, 10, 3.9, 1.7, 'https://steamcdn-a.akamaihd.net/steam/apps/270110/header.jpg'),
('FINAL FANTASY VII', 'abc', 'RPG', 'French', 'WIN', 'Square Enix', 2013, 7, 4, 4.4, 13.8, 'https://steamcdn-a.akamaihd.net/steam/apps/39140/header.jpg'),
('LEGO® Marvel Super Heroes 2', 'abc', 'Action', 'French', 'MAC', 'Feral Interactive (Mac)', 2017, 11, 14, 4.1, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/647830/header.jpg'),
('Tiny Brains', 'abc', 'Action', 'Spanish - Spain', 'WIN', 'Spearhead Games', 2013, 12, 11, 2.8, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/253690/header.jpg'),
('Predynastic Egypt', 'abc', 'Indie', 'Japanese', 'MAC', 'Clarus Victoria', 2016, 10, 10, 3.2, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/461620/header.jpg'),
('City Play', 'abc', 'Strategy', 'English', 'WIN', 'FrameLineNetwork', 2016, 5, 19, 3.2, 4.6, 'https://steamcdn-a.akamaihd.net/steam/apps/422270/header.jpg'),
('Dude, Stop', 'abc', 'Casual', 'English', 'LNX', 'Team HalfBeard', 2018, 6, 1, 3.0, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/574560/header.jpg'),
('Mount Wingsuit', 'abc', 'Action', 'English', 'WIN', 'Ninja Whale Studios', 2016, 8, 25, 3.8, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/501110/header.jpg'),
('Forgotten, Not Lost - A Kinetic Novel', 'abc', 'Casual', 'Russian', 'WIN', 'Afterthought Studios', 2016, 4, 1, 3.2, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/457490/header.jpg'),
('Tanzia', 'abc', 'Action', 'English', 'WIN', 'Arcanity Inc', 2019, 3, 28, 3.7, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/369700/header.jpg'),
('Pool Nation', 'abc', 'Simulation', 'German', 'WIN', 'Cherry Pop Games', 2013, 10, 18, 3.8, 8.0, 'https://steamcdn-a.akamaihd.net/steam/apps/254440/header.jpg'),
('Prey', 'abc', 'Action', 'Polish', 'WIN', 'Arkane Studios', 2017, 5, 4, 4.1, 34.5, 'https://steamcdn-a.akamaihd.net/steam/apps/480490/header.jpg'),
('Penarium', 'abc', 'Action', 'French', 'WIN', 'Self Made Miracle', 2015, 9, 22, 2.9, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/307590/header.jpg'),
('AdvertCity', 'abc', 'Simulation', 'English', 'WIN', 'VoxelStorm', 2015, 6, 5, 3.0, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/365800/header.jpg'),
('KILL la KILL -IF', 'abc', 'Action', 'Korean', 'WIN', 'Arc System Works', 2019, 7, 25, 2.5, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/922500/header.jpg'),
('Nutlope', 'abc', 'Adventure', 'English', 'WIN', 'Killbox Graphics', 2016, 6, 22, 3.8, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/465190/header.jpg'),
('Polyology', 'abc', 'Indie', 'French', 'WIN', 'Gridlock Interactive', 2016, 3, 28, 3.8, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/450650/header.jpg'),
('Black Desert Online', 'abc', 'Massively Multiplayer', 'Spanish - Spain', 'WIN', 'Pearl Abyss', 2017, 5, 24, 3.3, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/582660/header.jpg'),
('1943 Megami Strike', 'abc', 'Casual', 'English', 'WIN', 'GameUS Inc', 2016, 2, 24, 4.0, 10.3, 'https://steamcdn-a.akamaihd.net/steam/apps/440810/header.jpg'),
('Super Naughty Maid 2', 'abc', 'Casual', 'English', 'WIN', 'KENZsoft', 2019, 6, 20, 4.7, 18.4, 'https://steamcdn-a.akamaihd.net/steam/apps/1097880/header.jpg'),
('Battle Brothers', 'abc', 'Indie', 'English', 'WIN', 'Overhype Studios', 2017, 3, 24, 3.9, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/365360/header.jpg'),
('Cruel Arena', 'abc', 'Action', 'English', 'WIN', 'Panda Studio', 2015, 8, 18, 3.2, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/381140/header.jpg'),
('Project G', 'abc', 'Indie', 'English', 'WIN', 'Nebula Interactive', 2016, 5, 13, 3.0, 9.2, 'https://steamcdn-a.akamaihd.net/steam/apps/465670/header.jpg'),
('Normality', 'abc', 'Action', 'English', 'WIN', 'Gremlin Interactive', 2015, 10, 9, 3.6, 1.0, 'https://steamcdn-a.akamaihd.net/steam/apps/400370/header.jpg'),
('The Mysterious Cities of Gold', 'abc', 'Casual', 'Swedish', 'WIN', 'Neko Entertainment', 2013, 11, 20, 4.1, 13.8, 'https://steamcdn-a.akamaihd.net/steam/apps/261940/header.jpg'),
('Jack Keane', 'abc', 'Adventure', 'English', 'WIN', 'Deck13', 2008, 6, 27, 3.3, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/12340/header.jpg'),
('Ninja Avenger Dragon Blade', 'abc', 'Violent', 'English', 'WIN', 'Meow Studios', 2017, 3, 17, 0.5, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/603790/header.jpg'),
('THOTH', 'abc', 'Action', 'Polish', 'WIN', 'Carlsen Games', 2016, 10, 7, 3.9, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/510620/header.jpg'),
('Contractors', 'abc', 'Casual', 'Polish', 'WIN', 'Caveman Studio', 2018, 12, 14, 4.0, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/963930/header.jpg'),
('Prisoner', 'abc', 'Adventure', 'English', 'WIN', 'Polovey Alexander', 2017, 7, 17, 3.5, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/653210/header.jpg'),
('Jockey Rush', 'abc', 'Action', 'English', 'WIN', 'Strategic Designs Ltd.', 2016, 7, 15, 4.1, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/500680/header.jpg'),
('Space Empires V', 'abc', 'Strategy', 'English', 'WIN', 'Malfador Machinations', 2006, 10, 16, 3.5, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/1690/header.jpg'),
('Sinking Island', 'abc', 'Adventure', 'French', 'WIN', 'White Birds Productions', 2014, 12, 5, 3.1, 9.2, 'https://steamcdn-a.akamaihd.net/steam/apps/333430/header.jpg'),
('Countless Rooms of Death', 'abc', 'Indie', 'English', 'WIN', 'HCP Games', 2015, 1, 9, 1.5, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/341380/header.jpg'),
('Flowers -Le volume sur ete-', 'abc', 'Casual', 'English', 'WIN', 'Innocent Grey', 2018, 7, 26, 2.9, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/858940/header.jpg'),
('The Hong Kong Massacre', 'abc', 'Action', 'English', 'WIN', 'VRESKI', 2019, 1, 21, 2.3, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/741510/header.jpg'),
('Munin', 'abc', 'Adventure', 'Turkish', 'WIN', 'Gojira', 2014, 6, 10, 3.2, 0.6, 'https://steamcdn-a.akamaihd.net/steam/apps/281750/header.jpg'),
('MEMETYPER', 'abc', 'Simulation', 'English', 'WIN', 'Yury Chadaev', 2017, 9, 27, 0.5, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/699940/header.jpg'),
('Dream', 'abc', 'Adventure', 'German', 'WIN', 'HyperSloth', 2015, 7, 31, 3.4, 10.3, 'https://steamcdn-a.akamaihd.net/steam/apps/229580/header.jpg'),
('Chronicle of Innsmouth', 'abc', 'Adventure', 'Spanish - Spain', 'WIN', 'Umberto Parisi (rmonic79)', 2017, 5, 5, 3.0, 14.9, 'https://steamcdn-a.akamaihd.net/steam/apps/420180/header.jpg'),
('Crystal Caves', 'abc', 'Action', 'English', 'MAC', '3D Realms (Apogee Software)', 2014, 5, 5, 3.9, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/358260/header.jpg'),
('Offworld Trading Company', 'abc', 'Simulation', 'French', 'MAC', 'Mohawk Games', 2016, 4, 28, 3.9, 34.5, 'https://steamcdn-a.akamaihd.net/steam/apps/271240/header.jpg'),
('Chronus Arc', 'abc', 'Adventure', 'English', 'WIN', 'Hit-Point Co.', 2018, 11, 14, 4.5, 14.9, 'https://steamcdn-a.akamaihd.net/steam/apps/831650/header.jpg'),
('Panzer Corps Gold', 'abc', 'Strategy', 'German', 'WIN', 'The Lordz Games Studio', 2014, 3, 12, 4.0, 34.5, 'https://steamcdn-a.akamaihd.net/steam/apps/268400/header.jpg'),
('Zombie Ballz', 'abc', 'Indie', 'English', 'WIN', 'Almighty Games', 2017, 2, 10, 1.5, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/581970/header.jpg'),
('Snow Moto Racing Freedom', 'abc', 'Simulation', 'Portuguese - Brazil', 'WIN', 'Zordix AB', 2017, 4, 11, 4.2, 14.9, 'https://steamcdn-a.akamaihd.net/steam/apps/587400/header.jpg'),
('Desert Ashes', 'abc', 'Indie', 'English', 'MAC', 'Nine Tales Digital', 2014, 11, 10, 3.9, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/324420/header.jpg'),
('AL･FINE', 'abc', 'Casual', 'Japanese', 'WIN', 'CrimsonRabbit', 2016, 11, 11, 2.8, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/545330/header.jpg'),
('Vitrum', 'abc', 'Casual', 'English', 'WIN', '9heads Game Studios', 2014, 4, 22, 2.5, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/291270/header.jpg'),
('Iron Marines', 'abc', 'Strategy', 'Italian', 'MAC', 'Ironhide Game Studio', 2019, 5, 15, 4.0, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/931280/header.jpg'),
('City Builder', 'abc', 'Casual', 'English', 'WIN', 'Cow Corp.', 2018, 5, 27, 0.5, 0.6, 'https://steamcdn-a.akamaihd.net/steam/apps/843780/header.jpg'),
('Eternal Champions™', 'abc', 'Action', 'English', 'LNX', 'SEGA', 2010, 9, 13, 4.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/34288/header.jpg'),
('Duck Game', 'abc', 'Indie', 'English', 'WIN', 'Landon Podbielski', 2015, 6, 4, 3.8, 14.9, 'https://steamcdn-a.akamaihd.net/steam/apps/312530/header.jpg'),
('Bulb Boy', 'abc', 'Indie', 'English', 'WIN', 'Bulbware', 2015, 10, 29, 3.6, 10.3, 'https://steamcdn-a.akamaihd.net/steam/apps/390290/header.jpg'),
('Z Dawn', 'abc', 'Strategy', 'Portuguese', 'LNX', 'GoldenGod Games', 2019, 12, 6, 1.0, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/872680/header.jpg'),
('Aces of the Luftwaffe - Squadron', 'abc', 'Indie', 'German', 'WIN', 'HandyGames', 2018, 7, 24, 3.5, 4.3, 'https://steamcdn-a.akamaihd.net/steam/apps/859350/header.jpg'),
('Escape The Pacific', 'abc', 'Adventure', 'German', 'WIN', 'Gamers4Gamers Team', 2018, 2, 23, 1.5, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/655290/header.jpg'),
('Deadfall Tropics', 'abc', 'Indie', 'English', 'WIN', 'Studio Jimothy', 2018, 5, 10, 2.0, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/842770/header.jpg'),
('One More Line', 'abc', 'Action', 'English', 'LNX', 'SMG Studio', 2015, 8, 28, 3.7, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/356890/header.jpg'),
('60 Parsecs!', 'abc', 'Adventure', 'Russian', 'WIN', 'Robot Gentleman', 2018, 9, 18, 2.3, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/646270/header.jpg'),
('Chaos Drift', 'abc', 'RPG', 'English', 'WIN', 'OmniStorm Gaming', 2017, 3, 2, 3.2, 13.8, 'https://steamcdn-a.akamaihd.net/steam/apps/596530/header.jpg'),
('Mars 2030', 'abc', 'Simulation', 'English', 'WIN', 'FMG Labs', 2017, 7, 31, 4.5, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/510850/header.jpg'),
('The Journey Back', 'abc', 'Adventure', 'German', 'MAC', 'Erwin Wolf', 2015, 8, 12, 3.9, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/393550/header.jpg'),
('Enemy Front', 'abc', 'Action', 'Italian', 'WIN', 'CI Games', 2014, 6, 10, 2.6, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/256190/header.jpg'),
('Rage Quest', 'abc', 'Strategy', 'English', 'MAC', 'Nicholas Fisher', 2017, 11, 8, 1.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/709290/header.jpg'),
('SCORE', 'abc', 'Early Access', 'English', 'MAC', 'TecEh! Studios', 2016, 7, 5, 3.2, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/438310/header.jpg'),
('Midnight Carnival', 'abc', 'Casual', 'English', 'WIN', 'Delusional Games', 2016, 11, 22, 1.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/546980/header.jpg'),
('Last Heroes', 'abc', 'Casual', 'English', 'WIN', 'Warfare Studios', 2015, 11, 13, 3.9, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/370710/header.jpg'),
('Space Drifters 2D', 'abc', 'Indie', 'English', 'WIN', 'Matthew Coyle', 2016, 3, 28, 2.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/377570/header.jpg'),
('Black Mesa', 'abc', 'Adventure', 'French', 'LNX', 'Crowbar Collective', 2020, 3, 6, 4.1, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/362890/header.jpg'),
('Spirits', 'abc', 'Strategy', 'English', 'WIN', 'Spaces of Play UG', 2012, 9, 4, 2.4, 4.6, 'https://steamcdn-a.akamaihd.net/steam/apps/210170/header.jpg'),
('Soccer Rage', 'abc', 'Sports', 'German', 'WIN', 'Stamina-Games', 2015, 6, 2, 3.8, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/356510/header.jpg'),
('Son of a Witch', 'abc', 'Action', 'Ukrainian', 'LNX', 'Bigosaur', 2018, 5, 16, 3.5, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/539400/header.jpg'),
('The Repopulation', 'abc', 'Massively Multiplayer', 'English', 'WIN', 'IF Studios', 2014, 12, 22, 3.8, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/322300/header.jpg'),
('Fist Of Heaven & Hell', 'abc', 'Action', 'English', 'LNX', 'Victor Martinelli', 2019, 6, 28, 5.0, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/1000650/header.jpg'),
('Infliction', 'abc', 'Indie', 'Spanish - Spain', 'WIN', 'Caustic Reality', 2018, 10, 17, 2.3, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/692100/header.jpg'),
('Rocket Ski Racing', 'abc', 'Indie', 'English', 'WIN', 'nocanwin', 2016, 10, 13, 4.3, 3.4, 'https://steamcdn-a.akamaihd.net/steam/apps/471730/header.jpg'),
('Explomania', 'abc', 'Casual', 'English', 'WIN', 'Render System', 2018, 2, 22, 1.5, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/656440/header.jpg'),
('Calm Down, Stalin - VR', 'abc', 'Indie', 'Russian', 'WIN', 'Cartboard Games', 2019, 9, 12, 2.0, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/1133990/header.jpg'),
('Mind Dead', 'abc', 'Indie', 'English', 'LNX', 'GBROSSOFT', 2016, 8, 16, 3.3, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/442190/header.jpg'),
('Touhou Luna Nights', 'abc', 'Adventure', 'French', 'WIN', 'Vaka Game Magazine', 2019, 2, 25, 4.1, 20.7, 'https://steamcdn-a.akamaihd.net/steam/apps/851100/header.jpg'),
('Messiah', 'abc', 'Violent', 'English', 'WIN', 'Shiny Entertainment', 2017, 1, 16, 3.2, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/577980/header.jpg'),
('Yakuza 0', 'abc', 'RPG', 'English', 'WIN', 'SEGA', 2018, 8, 1, 4.3, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/638970/header.jpg'),
('Industry Transporters', 'abc', 'Simulation', 'German', 'WIN', 'Markus Fick', 2015, 8, 31, 4.5, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/376150/header.jpg'),
('Train of Afterlife', 'abc', 'Casual', 'English', 'WIN', 'Zeiva Inc', 2015, 1, 13, 2.7, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/342360/header.jpg'),
('Pulstar', 'abc', 'Indie', 'English', 'LNX', 'Concave Studio', 2014, 6, 11, 3.6, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/280460/header.jpg'),
('SimCity™ 4 Deluxe Edition', 'abc', 'Simulation', 'Danish', 'MAC', 'EA - Maxis', 2010, 7, 20, 3.9, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/24780/header.jpg'),
('Farming Giant', 'abc', 'Simulation', 'German', 'WIN', 'Actalogic', 2013, 11, 6, 4.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/259910/header.jpg'),
('aMAZE', 'abc', 'Casual', 'English', 'WIN', 'Blender Games', 2017, 3, 14, 3.0, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/604780/header.jpg'),
('Brickfest', 'abc', 'Indie', 'English', 'LNX', 'Nathan Best', 2018, 5, 3, 3.5, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/845940/header.jpg'),
('Venture Kid', 'abc', 'Action', 'Simplified Chinese', 'WIN', 'Snikkabo AS', 2018, 5, 3, 2.3, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/437690/header.jpg'),
('PC Building Simulator', 'abc', 'Indie', 'German', 'WIN', 'Claudiu Kiss', 2019, 1, 29, 3.2, 23.0, 'https://steamcdn-a.akamaihd.net/steam/apps/621060/header.jpg'),
('Newfound Courage', 'abc', 'Simulation', 'English', 'MAC', 'Cafe Empty', 2019, 3, 22, 4.0, 10.3, 'https://steamcdn-a.akamaihd.net/steam/apps/893790/header.jpg'),
('Megabyte Punch', 'abc', 'Adventure', 'English', 'MAC', 'Team Reptile', 2013, 10, 15, 3.8, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/248550/header.jpg'),
('Crawl', 'abc', 'RPG', 'English', 'WIN', 'Powerhoof', 2017, 4, 11, 3.9, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/293780/header.jpg'),
('Cubesis', 'abc', 'Casual', 'English', 'WIN', 'Wonderful Tree Studio', 2014, 8, 22, 3.3, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/318440/header.jpg'),
('KARAKARA2', 'abc', 'Casual', 'Traditional Chinese', 'WIN', 'calme', 2017, 11, 10, 4.0, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/745850/header.jpg'),
('BLACKHOLE', 'abc', 'Indie', 'French', 'WIN', 'FiolaSoft Studio', 2015, 2, 27, 3.3, 10.3, 'https://steamcdn-a.akamaihd.net/steam/apps/322680/header.jpg'),
('Firefight!', 'abc', 'Casual', 'English', 'WIN', 'Megalithic Mainframe', 2020, 1, 16, 3.6, 2.3, 'https://steamcdn-a.akamaihd.net/steam/apps/1204630/header.jpg'),
('Damage Inc. Pacific Squadron WWII', 'abc', 'Action', 'Spanish - Spain', 'WIN', 'Trickstar Games', 2012, 8, 28, 1.3, 46.0, 'https://steamcdn-a.akamaihd.net/steam/apps/215390/header.jpg'),
('Helium', 'abc', 'Indie', 'Russian', 'WIN', 'rocketship', 2017, 3, 10, 1.5, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/433900/header.jpg'),
('Professional Farmer 2014', 'abc', 'Simulation', 'Norwegian', 'WIN', 'PlayWay S.A.', 2013, 11, 27, 4.2, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/258880/header.jpg'),
('Iron Crypticle', 'abc', 'Action', 'English', 'WIN', 'Confused Pelican', 2017, 7, 12, 4.0, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/548680/header.jpg'),
('Copter and Sky', 'abc', 'Action', 'English', 'WIN', 'Kopnin Pavel', 2016, 7, 21, 3.8, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/499610/header.jpg'),
('Diaper Dash®', 'abc', 'Simulation', 'English', 'MAC', 'Zemnott', 2009, 8, 12, 1.6, 11.5, 'https://steamcdn-a.akamaihd.net/steam/apps/37230/header.jpg'),
('Oik', 'abc', 'Casual', 'Traditional Chinese', 'WIN', 'Crew Lab', 2017, 2, 14, 3.3, 1.1, 'https://steamcdn-a.akamaihd.net/steam/apps/588970/header.jpg'),
('Royal Defense', 'abc', 'Indie', 'Portuguese - Brazil', 'WIN', 'Good Games', 2014, 11, 10, 4.2, 5.7, 'https://steamcdn-a.akamaihd.net/steam/apps/291170/header.jpg'),
('Mystik Belle', 'abc', 'Action', 'Italian', 'LNX', 'Last Dimension', 2015, 5, 22, 4.1, 17.2, 'https://steamcdn-a.akamaihd.net/steam/apps/332610/header.jpg');

-- Inserting data for post
INSERT INTO post (username, gid, title, postText) VALUES
('john123', 1, 'Love Super Adventure!', 'I just finished the main story, and it was awesome!'),
('jane456', 2, 'Racing Legends multiplayer', 'Looking for people to play Racing Legends multiplayer with.');

-- Inserting data for comment
INSERT INTO comment (comment_body, post_id, username) VALUES
('I totally agree! Super Adventure is great!', 1, 'john123'),
('I would love to play Racing Legends multiplayer!', 2, 'jane456');

-- Inserting data for likes
INSERT INTO likes (post_id, user_id) VALUES
(1, 1),
(1, 2),
(2, 3);

-- Inserting data for own
INSERT INTO own (username, gid) VALUES
('john123', 1),
('john123', 2),
('jane456', 1);