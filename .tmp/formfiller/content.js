var FormFiller = function ($, options) {
	var
		wordBank = ['lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit,', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua.', 'enim', 'ad', 'minim', 'veniam,', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat.', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur.', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident,', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum.', 'sed', 'ut', 'perspiciatis,', 'unde', 'omnis', 'iste', 'natus', 'error', 'sit', 'voluptatem', 'accusantium', 'doloremque', 'laudantium,', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa,', 'quae', 'ab', 'illo', 'inventore', 'veritatis', 'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt,', 'explicabo.', 'nemo', 'enim', 'ipsam', 'voluptatem,', 'quia', 'voluptas', 'sit,', 'aspernatur', 'aut', 'odit', 'aut', 'fugit,', 'sed', 'quia', 'consequuntur', 'magni', 'dolores', 'eos,', 'qui', 'ratione', 'voluptatem', 'sequi', 'nesciunt,', 'neque', 'porro', 'quisquam', 'est,', 'qui', 'dolorem', 'ipsum,', 'quia', 'dolor', 'sit,', 'amet,', 'consectetur,', 'adipisci', 'velit,', 'sed', 'quia', 'non', 'numquam', 'eius', 'modi', 'tempora', 'incidunt,', 'ut', 'labore', 'et', 'dolore', 'magnam', 'aliquam', 'quaerat', 'voluptatem.', 'ut', 'enim', 'ad', 'minima', 'veniam,', 'quis', 'nostrum', 'exercitationem', 'ullam', 'corporis', 'suscipit', 'laboriosam,', 'nisi', 'ut', 'aliquid', 'ex', 'ea', 'commodi', 'consequatur?', 'quis', 'autem', 'vel', 'eum', 'iure', 'reprehenderit,', 'qui', 'in', 'ea', 'voluptate', 'velit', 'esse,', 'quam', 'nihil', 'molestiae', 'consequatur,', 'vel', 'illum,', 'qui', 'dolorem', 'eum', 'fugiat,', 'quo', 'voluptas', 'nulla', 'pariatur?', 'at', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus,', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti,', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint,', 'obcaecati', 'cupiditate', 'non', 'provident,', 'similique', 'sunt', 'in', 'culpa,', 'qui', 'officia', 'deserunt', 'mollitia', 'animi,', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga.', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio.', 'Nam', 'libero', 'tempore,', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio,', 'cumque', 'nihil', 'impedit,', 'quo', 'minus', 'id,', 'quod', 'maxime', 'placeat,', 'facere', 'possimus,', 'omnis', 'voluptas', 'assumenda', 'est,', 'omnis', 'dolor', 'repellendus.', 'temporibus', 'autem', 'quibusdam', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet,', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'molestiae', 'non', 'recusandae.', 'itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus,', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'],
		firstNames = ['Aaron', 'Abbot', 'Abdul', 'Abel', 'Abigail', 'Abra', 'Abraham', 'Acton', 'Adam', 'Adara', 'Addison', 'Adele', 'Adena', 'Adria', 'Adrian', 'Adrienne', 'Ahmed', 'Aidan', 'Aiko', 'Aileen', 'Aimee', 'Ainsley', 'Akeem', 'Aladdin', 'Alan', 'Alana', 'Alden', 'Alea', 'Alec', 'Alexa', 'Alexander', 'Alexandra', 'Alexis', 'Alfonso', 'Alfreda', 'Ali', 'Alice', 'Alika', 'Aline', 'Alisa', 'Allegra', 'Allen', 'Allistair', 'Alma', 'Althea', 'Alvin', 'Alyssa', 'Amal', 'Amanda', 'Amaya', 'Amber', 'Amela', 'Amelia', 'Amena', 'Amery', 'Amethyst', 'Amir', 'Amity', 'Amos', 'Amy', 'Anastasia', 'Andrew', 'Angela', 'Angelica', 'Anika', 'Anjolie', 'Ann', 'Anne', 'Anthony', 'Aphrodite', 'April', 'Aquila', 'Arden', 'Aretha', 'Ariana', 'Ariel', 'Aristotle', 'Armand', 'Armando', 'Arsenio', 'Arthur', 'Ashely', 'Asher', 'Ashton', 'Aspen', 'Astra', 'Athena', 'Aubrey', 'Audra', 'Audrey', 'August', 'Aurelia', 'Aurora', 'Austin', 'Autumn', 'Ava', 'Avram', 'Avye', 'Axel', 'Ayanna', 'Azalia', 'Baker', 'Barbara', 'Barclay', 'Barrett', 'Barry', 'Basia', 'Basil', 'Baxter', 'Beatrice', 'Beau', 'Beck', 'Bell', 'Belle', 'Benedict', 'Benjamin', 'Berk', 'Bernard', 'Bert', 'Bertha', 'Bethany', 'Beverly', 'Bevis', 'Bianca', 'Blaine', 'Blair', 'Blake', 'Blaze', 'Blossom', 'Blythe', 'Bo', 'Boris', 'Bradley', 'Brady', 'Branden', 'Brandon', 'Breanna', 'Bree', 'Brenda', 'Brendan', 'Brenden', 'Brenna', 'Brennan', 'Brent', 'Brett', 'Brian', 'Brianna', 'Briar', 'Brielle', 'Britanney', 'Britanni', 'Brittany', 'Brock', 'Brody', 'Brooke', 'Bruce', 'Bruno', 'Bryar', 'Brynn', 'Brynne', 'Buckminster', 'Buffy', 'Burke', 'Burton', 'Byron', 'Cade', 'Cadman', 'Caesar', 'Cailin', 'Cain', 'Cairo', 'Caldwell', 'Caleb', 'Calista', 'Callie', 'Callum', 'Cally', 'Calvin', 'Camden', 'Cameran', 'Cameron', 'Cameron', 'Camilla', 'Camille', 'Candace', 'Candice', 'Cara', 'Carissa', 'Carl', 'Carla', 'Carlos', 'Carly', 'Carol', 'Carolyn', 'Carson', 'Carter', 'Caryn', 'Casey', 'Cassady', 'Cassandra', 'Cassidy', 'Castor', 'Catherine', 'Cathleen', 'Cecilia', 'Cedric', 'Celeste', 'Chadwick', 'Chaim', 'Chancellor', 'Chanda', 'Chandler', 'Chaney', 'Channing', 'Chantale', 'Charde', 'Charissa', 'Charity', 'Charles', 'Charlotte', 'Chase', 'Chastity', 'Chava', 'Chelsea', 'Cherokee', 'Cheryl', 'Chester', 'Cheyenne', 'Chiquita', 'Chloe', 'Christen', 'Christian', 'Christine', 'Christopher', 'Ciara', 'Ciaran', 'Claire', 'Clare', 'Clark', 'Clarke', 'Claudia', 'Clayton', 'Clementine', 'Cleo', 'Clinton', 'Clio', 'Coby', 'Cody', 'Colby', 'Cole', 'Colette', 'Colin', 'Colleen', 'Colorado', 'Colt', 'Colton', 'Conan', 'Connor', 'Constance', 'Cooper', 'Cora', 'Courtney', 'Craig', 'Cruz', 'Cullen', 'Curran', 'Cynthia', 'Cyrus', 'Dacey', 'Dahlia', 'Dai', 'Dakota', 'Dale', 'Dalton', 'Damian', 'Damon', 'Dana', 'Dane', 'Daniel', 'Danielle', 'Dante', 'Daphne', 'Daquan', 'Dara', 'Daria', 'Darius', 'Darrel', 'Darryl', 'Daryl', 'David', 'Davis', 'Dawn', 'Deacon', 'Dean', 'Deanna', 'Deborah', 'Debra', 'Declan', 'Deirdre', 'Delilah', 'Demetria', 'Demetrius', 'Denise', 'Dennis', 'Denton', 'Derek', 'Desirae', 'Desiree', 'Destiny', 'Devin', 'Dexter', 'Diana', 'Dieter', 'Dillon', 'Dolan', 'Dominic', 'Dominique', 'Donna', 'Donovan', 'Dora', 'Dorian', 'Doris', 'Dorothy', 'Drake', 'Drew', 'Driscoll', 'Duncan', 'Dustin', 'Dylan', 'Eagan', 'Eaton', 'Ebony', 'Echo', 'Edan', 'Eden', 'Edward', 'Elaine', 'Eleanor', 'Eliana', 'Elijah', 'Elizabeth', 'Ella', 'Elliott', 'Elmo', 'Elton', 'Elvis', 'Emerald', 'Emerson', 'Emery', 'Emi', 'Emily', 'Emma', 'Emmanuel', 'Erasmus', 'Eric', 'Erica', 'Erich', 'Erin', 'Ethan', 'Eugenia', 'Evan', 'Evangeline', 'Eve', 'Evelyn', 'Ezekiel', 'Ezra', 'Faith', 'Fallon', 'Farrah', 'Fatima', 'Fay', 'Felicia', 'Felix', 'Ferdinand', 'Ferris', 'Finn', 'Fiona', 'Fitzgerald', 'Flavia', 'Fletcher', 'Fleur', 'Florence', 'Flynn', 'Forrest', 'Frances', 'Francesca', 'Francis', 'Fredericka', 'Freya', 'Fritz', 'Fuller', 'Fulton', 'Gabriel', 'Gage', 'Gail', 'Galena', 'Galvin', 'Gannon', 'Gareth', 'Garrett', 'Garrison', 'Garth', 'Gary', 'Gavin', 'Gay', 'Gemma', 'Genevieve', 'Geoffrey', 'George', 'Georgia', 'Geraldine', 'Germaine', 'Germane', 'Giacomo', 'Gil', 'Gillian', 'Ginger', 'Gisela', 'Giselle', 'Glenna', 'Gloria', 'Grace', 'Grady', 'Graham', 'Graiden', 'Grant', 'Gray', 'Gregory', 'Gretchen', 'Griffin', 'Griffith', 'Guinevere', 'Guy', 'Gwendolyn', 'Hadassah', 'Hadley', 'Hakeem', 'Halee', 'Haley', 'Hall', 'Halla', 'Hamilton', 'Hamish', 'Hammett', 'Hanae', 'Hanna', 'Hannah', 'Harding', 'Harlan', 'Harper', 'Harriet', 'Harrison', 'Hasad', 'Hashim', 'Haviva', 'Hayden', 'Hayes', 'Hayfa', 'Hayley', 'Heather', 'Hector', 'Hedda', 'Hedley', 'Hedwig', 'Hedy', 'Heidi', 'Helen', 'Henry', 'Herman', 'Hermione', 'Herrod', 'Hilary', 'Hilda', 'Hilel', 'Hillary', 'Hiram', 'Hiroko', 'Hollee', 'Holly', 'Holmes', 'Honorato', 'Hop', 'Hope', 'Howard', 'Hoyt', 'Hu', 'Hunter', 'Hyacinth', 'Hyatt', 'Ian', 'Idola', 'Idona', 'Ifeoma', 'Ignacia', 'Ignatius', 'Igor', 'Ila', 'Iliana', 'Illana', 'Illiana', 'Ima', 'Imani', 'Imelda', 'Imogene', 'Ina', 'India', 'Indigo', 'Indira', 'Inez', 'Inga', 'Ingrid', 'Iola', 'Iona', 'Ira', 'Irene', 'Iris', 'Irma', 'Isaac', 'Isabella', 'Isabelle', 'Isadora', 'Isaiah', 'Ishmael', 'Ivan', 'Ivana', 'Ivor', 'Ivory', 'Ivy', 'Jack', 'Jackson', 'Jacob', 'Jada', 'Jade', 'Jaden', 'Jael', 'Jaime', 'Jakeem', 'Jamal', 'Jamalia', 'James', 'Jameson', 'Jana', 'Jane', 'Janna', 'Jaquelyn', 'Jared', 'Jarrod', 'Jasmine', 'Jason', 'Jasper', 'Jayme', 'Jeanette', 'Jelani', 'Jemima', 'Jena', 'Jenette', 'Jenna', 'Jennifer', 'Jeremy', 'Jermaine', 'Jerome', 'Jerry', 'Jescie', 'Jessamine', 'Jesse', 'Jessica', 'Jillian', 'Jin', 'Joan', 'Jocelyn', 'Joel', 'Joelle', 'John', 'Jolene', 'Jolie', 'Jonah', 'Jonas', 'Jordan', 'Jordan', 'Jorden', 'Joseph', 'Josephine', 'Joshua', 'Josiah', 'Joy', 'Judah', 'Judith', 'Julian', 'Julie', 'Juliet', 'Justin', 'Justina', 'Justine', 'Kadeem', 'Kaden', 'Kai', 'Kaitlin', 'Kalia', 'Kamal', 'Kameko', 'Kane', 'Kareem', 'Karen', 'Karina', 'Karleigh', 'Karly', 'Karyn', 'Kaseem', 'Kasimir', 'Kasper', 'Katell', 'Katelyn', 'Kathleen', 'Kato', 'Kay', 'Kaye', 'Keane', 'Keaton', 'Keefe', 'Keegan', 'Keelie', 'Keely', 'Keiko', 'Keith', 'Kellie', 'Kelly', 'Kelly', 'Kelsey', 'Kelsie', 'Kendall', 'Kennan', 'Kennedy', 'Kenneth', 'Kenyon', 'Kermit', 'Kerry', 'Kessie', 'Kevin', 'Kevyn', 'Kiara', 'Kiayada', 'Kibo', 'Kieran', 'Kim', 'Kimberley', 'Kimberly', 'Kiona', 'Kirby', 'Kirestin', 'Kirk', 'Kirsten', 'Kitra', 'Knox', 'Kristen', 'Kuame', 'Kyla', 'Kylan', 'Kyle', 'Kylee', 'Kylie', 'Kylynn', 'Kyra', 'Lacey', 'Lacota', 'Lacy', 'Lael', 'Laith', 'Lamar', 'Lana', 'Lance', 'Lane', 'Lani', 'Lara', 'Lareina', 'Larissa', 'Lars', 'Latifah', 'Laura', 'Laurel', 'Lavinia', 'Lawrence', 'Leah', 'Leandra', 'Lee', 'Lee', 'Leigh', 'Leila', 'Leilani', 'Len', 'Lenore', 'Leo', 'Leonard', 'Leroy', 'Lesley', 'Leslie', 'Lester', 'Lev', 'Levi', 'Lewis', 'Libby', 'Liberty', 'Lila', 'Lilah', 'Lillian', 'Lillith', 'Linda', 'Linus', 'Lionel', 'Lisandra', 'Logan', 'Lois', 'Louis', 'Lucas', 'Lucian', 'Lucius', 'Lucy', 'Luke', 'Lunea', 'Lydia', 'Lyle', 'Lynn', 'Lysandra', 'MacKensie', 'MacKenzie', 'Macaulay', 'Macey', 'Macon', 'Macy', 'Madaline', 'Madeline', 'Madeson', 'Madison', 'Madonna', 'Magee', 'Maggie', 'Maggy', 'Maia', 'Maile', 'Maisie', 'Maite', 'Malachi', 'Malcolm', 'Malik', 'Mallory', 'Mannix', 'Mara', 'Marah', 'Marcia', 'Margaret', 'Mari', 'Mariam', 'Mariko', 'Maris', 'Mark', 'Marny', 'Marsden', 'Marshall', 'Martena', 'Martha', 'Martin', 'Martina', 'Marvin', 'Mary', 'Maryam', 'Mason', 'Matthew', 'Maxine', 'Maxwell', 'May', 'Maya', 'McKenzie', 'Mechelle', 'Medge', 'Megan', 'Meghan', 'Melanie', 'Melinda', 'Melissa', 'Melodie', 'Melvin', 'Melyssa', 'Mercedes', 'Meredith', 'Merrill', 'Merritt', 'Mia', 'Micah', 'Michael', 'Michelle', 'Mikayla', 'Minerva', 'Mira', 'Miranda', 'Miriam', 'Moana', 'Mohammad', 'Mollie', 'Molly', 'Mona', 'Montana', 'Morgan', 'Moses', 'Mufutau', 'Murphy', 'Myles', 'Myra', 'Nadine', 'Naida', 'Naomi', 'Nash', 'Nasim', 'Natalie', 'Nathan', 'Nathaniel', 'Nayda', 'Nehru', 'Neil', 'Nell', 'Nelle', 'Nerea', 'Nero', 'Nevada', 'Neve', 'Neville', 'Nicholas', 'Nichole', 'Nicole', 'Nigel', 'Nina', 'Nissim', 'Nita', 'Noah', 'Noble', 'Noel', 'Noelani', 'Noelle', 'Nola', 'Nolan', 'Nomlanga', 'Nora', 'Norman', 'Nyssa', 'Ocean', 'Octavia', 'Octavius', 'Odessa', 'Odette', 'Odysseus', 'Oleg', 'Olga', 'Oliver', 'Olivia', 'Olympia', 'Omar', 'Oprah', 'Ora', 'Oren', 'Ori', 'Orla', 'Orlando', 'Orli', 'Orson', 'Oscar', 'Otto', 'Owen', 'Paki', 'Palmer', 'Paloma', 'Pamela', 'Pandora', 'Pascale', 'Patience', 'Patricia', 'Patrick', 'Paul', 'Paula', 'Pearl', 'Penelope', 'Perry', 'Peter', 'Petra', 'Phelan', 'Philip', 'Phillip', 'Phoebe', 'Phyllis', 'Piper', 'Plato', 'Porter', 'Portia', 'Prescott', 'Preston', 'Price', 'Priscilla', 'Quail', 'Quamar', 'Quemby', 'Quentin', 'Quin', 'Quincy', 'Quinlan', 'Quinn', 'Quinn', 'Quintessa', 'Quon', 'Quyn', 'Quynn', 'Rachel', 'Rae', 'Rafael', 'Rahim', 'Raja', 'Rajah', 'Ralph', 'Rama', 'Ramona', 'Rana', 'Randall', 'Raphael', 'Rashad', 'Raven', 'Ray', 'Raya', 'Raymond', 'Reagan', 'Rebecca', 'Rebekah', 'Reece', 'Reed', 'Reese', 'Regan', 'Regina', 'Remedios', 'Renee', 'Reuben', 'Rhea', 'Rhiannon', 'Rhoda', 'Rhona', 'Rhonda', 'Ria', 'Richard', 'Rigel', 'Riley', 'Rina', 'Rinah', 'Risa', 'Roanna', 'Roary', 'Robert', 'Robin', 'Rogan', 'Ronan', 'Rooney', 'Rosalyn', 'Rose', 'Ross', 'Roth', 'Rowan', 'Ruby', 'Rudyard', 'Russell', 'Ruth', 'Ryan', 'Ryder', 'Rylee', 'Sacha', 'Sade', 'Sage', 'Salvador', 'Samantha', 'Samson', 'Samuel', 'Sandra', 'Sara', 'Sarah', 'Sasha', 'Savannah', 'Sawyer', 'Scarlet', 'Scarlett', 'Scott', 'Sean', 'Sebastian', 'Selma', 'September', 'Serena', 'Serina', 'Seth', 'Shad', 'Shaeleigh', 'Shafira', 'Shaine', 'Shana', 'Shannon', 'Sharon', 'Shay', 'Shea', 'Sheila', 'Shelby', 'Shelley', 'Shellie', 'Shelly', 'Shoshana', 'Sierra', 'Signe', 'Sigourney', 'Silas', 'Simon', 'Simone', 'Skyler', 'Slade', 'Sloane', 'Solomon', 'Sonia', 'Sonya', 'Sophia', 'Sopoline', 'Stacey', 'Stacy', 'Steel', 'Stella', 'Stephanie', 'Stephen', 'Steven', 'Stewart', 'Stone', 'Stuart', 'Suki', 'Summer', 'Susan', 'Sybil', 'Sybill', 'Sydnee', 'Sydney', 'Sylvester', 'Sylvia', 'TaShya', 'Tad', 'Tallulah', 'Talon', 'Tamara', 'Tamekah', 'Tana', 'Tanek', 'Tanisha', 'Tanner', 'Tanya', 'Tara', 'Tarik', 'Tasha', 'Tashya', 'Tate', 'Tatiana', 'Tatum', 'Tatyana', 'Taylor', 'Teagan', 'Teegan', 'Thaddeus', 'Thane', 'Theodore', 'Thomas', 'Thor', 'Tiger', 'Timon', 'Timothy', 'Tobias', 'Todd', 'Travis', 'Trevor', 'Troy', 'Tucker', 'Tyler', 'Tyrone', 'Ulla', 'Ulric', 'Ulysses', 'Uma', 'Unity', 'Upton', 'Uriah', 'Uriel', 'Urielle', 'Ursa', 'Ursula', 'Uta', 'Valentine', 'Vance', 'Vanna', 'Vaughan', 'Veda', 'Velma', 'Venus', 'Vera', 'Vernon', 'Veronica', 'Victor', 'Victoria', 'Vielka', 'Vincent', 'Violet', 'Virginia', 'Vivian', 'Vivien', 'Vladimir', 'Wade', 'Walker', 'Wallace', 'Walter', 'Wanda', 'Wang', 'Warren', 'Wayne', 'Wendy', 'Wesley', 'Whilemina', 'Whitney', 'Whoopi', 'Willa', 'William', 'Willow', 'Wilma', 'Wing', 'Winifred', 'Winter', 'Wyatt', 'Wylie', 'Wynne', 'Wynter', 'Wyoming', 'Xander', 'Xandra', 'Xantha', 'Xanthus', 'Xavier', 'Xaviera', 'Xena', 'Xenos', 'Xerxes', 'Xyla', 'Yael', 'Yardley', 'Yasir', 'Yen', 'Yeo', 'Yetta', 'Yoko', 'Yolanda', 'Yoshi', 'Yoshio', 'Yuli', 'Yuri', 'Yvette', 'Yvonne', 'Zachary', 'Zachery', 'Zahir', 'Zane', 'Zelda', 'Zelenia', 'Zena', 'Zenaida', 'Zenia', 'Zeph', 'Zephania', 'Zephr', 'Zeus', 'Zia', 'Zoe', 'Zorita'],
		lastNames = ['Abbott', 'Acevedo', 'Acosta', 'Adams', 'Adkins', 'Aguilar', 'Aguirre', 'Albert', 'Alexander', 'Alford', 'Allen', 'Allison', 'Alston', 'Alvarado', 'Alvarez', 'Anderson', 'Andrews', 'Anthony', 'Armstrong', 'Arnold', 'Ashley', 'Atkins', 'Atkinson', 'Austin', 'Avery', 'Avila', 'Ayala', 'Ayers', 'Bailey', 'Baird', 'Baker', 'Baldwin', 'Ball', 'Ballard', 'Banks', 'Barber', 'Barker', 'Barlow', 'Barnes', 'Barnett', 'Barr', 'Barrera', 'Barrett', 'Barron', 'Barry', 'Bartlett', 'Barton', 'Bass', 'Bates', 'Battle', 'Bauer', 'Baxter', 'Beach', 'Bean', 'Beard', 'Beasley', 'Beck', 'Becker', 'Bell', 'Bender', 'Benjamin', 'Bennett', 'Benson', 'Bentley', 'Benton', 'Berg', 'Berger', 'Bernard', 'Berry', 'Best', 'Bird', 'Bishop', 'Black', 'Blackburn', 'Blackwell', 'Blair', 'Blake', 'Blanchard', 'Blankenship', 'Blevins', 'Bolton', 'Bond', 'Bonner', 'Booker', 'Boone', 'Booth', 'Bowen', 'Bowers', 'Bowman', 'Boyd', 'Boyer', 'Boyle', 'Bradford', 'Bradley', 'Bradshaw', 'Brady', 'Branch', 'Bray', 'Brennan', 'Brewer', 'Bridges', 'Briggs', 'Bright', 'Britt', 'Brock', 'Brooks', 'Brown', 'Browning', 'Bruce', 'Bryan', 'Bryant', 'Buchanan', 'Buck', 'Buckley', 'Buckner', 'Bullock', 'Burch', 'Burgess', 'Burke', 'Burks', 'Burnett', 'Burns', 'Burris', 'Burt', 'Burton', 'Bush', 'Butler', 'Byers', 'Byrd', 'Cabrera', 'Cain', 'Calderon', 'Caldwell', 'Calhoun', 'Callahan', 'Camacho', 'Cameron', 'Campbell', 'Campos', 'Cannon', 'Cantrell', 'Cantu', 'Cardenas', 'Carey', 'Carlson', 'Carney', 'Carpenter', 'Carr', 'Carrillo', 'Carroll', 'Carson', 'Carter', 'Carver', 'Case', 'Casey', 'Cash', 'Castaneda', 'Castillo', 'Castro', 'Cervantes', 'Chambers', 'Chan', 'Chandler', 'Chaney', 'Chang', 'Chapman', 'Charles', 'Chase', 'Chavez', 'Chen', 'Cherry', 'Christensen', 'Christian', 'Church', 'Clark', 'Clarke', 'Clay', 'Clayton', 'Clements', 'Clemons', 'Cleveland', 'Cline', 'Cobb', 'Cochran', 'Coffey', 'Cohen', 'Cole', 'Coleman', 'Collier', 'Collins', 'Colon', 'Combs', 'Compton', 'Conley', 'Conner', 'Conrad', 'Contreras', 'Conway', 'Cook', 'Cooke', 'Cooley', 'Cooper', 'Copeland', 'Cortez', 'Cote', 'Cotton', 'Cox', 'Craft', 'Craig', 'Crane', 'Crawford', 'Crosby', 'Cross', 'Cruz', 'Cummings', 'Cunningham', 'Curry', 'Curtis', 'Dale', 'Dalton', 'Daniel', 'Daniels', 'Daugherty', 'Davenport', 'David', 'Davidson', 'Davis', 'Dawson', 'Day', 'Dean', 'Decker', 'Dejesus', 'Delacruz', 'Delaney', 'Deleon', 'Delgado', 'Dennis', 'Diaz', 'Dickerson', 'Dickson', 'Dillard', 'Dillon', 'Dixon', 'Dodson', 'Dominguez', 'Donaldson', 'Donovan', 'Dorsey', 'Dotson', 'Douglas', 'Downs', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duke', 'Duncan', 'Dunlap', 'Dunn', 'Duran', 'Durham', 'Dyer', 'Eaton', 'Edwards', 'Elliott', 'Ellis', 'Ellison', 'Emerson', 'England', 'English', 'Erickson', 'Espinoza', 'Estes', 'Estrada', 'Evans', 'Everett', 'Ewing', 'Farley', 'Farmer', 'Farrell', 'Faulkner', 'Ferguson', 'Fernandez', 'Ferrell', 'Fields', 'Figueroa', 'Finch', 'Finley', 'Fischer', 'Fisher', 'Fitzgerald', 'Fitzpatrick', 'Fleming', 'Fletcher', 'Flores', 'Flowers', 'Floyd', 'Flynn', 'Foley', 'Forbes', 'Ford', 'Foreman', 'Foster', 'Fowler', 'Fox', 'Francis', 'Franco', 'Frank', 'Franklin', 'Franks', 'Frazier', 'Frederick', 'Freeman', 'French', 'Frost', 'Fry', 'Frye', 'Fuentes', 'Fuller', 'Fulton', 'Gaines', 'Gallagher', 'Gallegos', 'Galloway', 'Gamble', 'Garcia', 'Gardner', 'Garner', 'Garrett', 'Garrison', 'Garza', 'Gates', 'Gay', 'Gentry', 'George', 'Gibbs', 'Gibson', 'Gilbert', 'Giles', 'Gill', 'Gillespie', 'Gilliam', 'Gilmore', 'Glass', 'Glenn', 'Glover', 'Goff', 'Golden', 'Gomez', 'Gonzales', 'Gonzalez', 'Good', 'Goodman', 'Goodwin', 'Gordon', 'Gould', 'Graham', 'Grant', 'Graves', 'Gray', 'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Griffith', 'Grimes', 'Gross', 'Guerra', 'Guerrero', 'Guthrie', 'Gutierrez', 'Guy', 'Guzman', 'Hahn', 'Hale', 'Haley', 'Hall', 'Hamilton', 'Hammond', 'Hampton', 'Hancock', 'Haney', 'Hansen', 'Hanson', 'Hardin', 'Harding', 'Hardy', 'Harmon', 'Harper', 'Harrell', 'Harrington', 'Harris', 'Harrison', 'Hart', 'Hartman', 'Harvey', 'Hatfield', 'Hawkins', 'Hayden', 'Hayes', 'Haynes', 'Hays', 'Head', 'Heath', 'Hebert', 'Henderson', 'Hendricks', 'Hendrix', 'Henry', 'Hensley', 'Henson', 'Herman', 'Hernandez', 'Herrera', 'Herring', 'Hess', 'Hester', 'Hewitt', 'Hickman', 'Hicks', 'Higgins', 'Hill', 'Hines', 'Hinton', 'Hobbs', 'Hodge', 'Hodges', 'Hoffman', 'Hogan', 'Holcomb', 'Holden', 'Holder', 'Holland', 'Holloway', 'Holman', 'Holmes', 'Holt', 'Hood', 'Hooper', 'Hoover', 'Hopkins', 'Hopper', 'Horn', 'Horne', 'Horton', 'House', 'Houston', 'Howard', 'Howe', 'Howell', 'Hubbard', 'Huber', 'Hudson', 'Huff', 'Huffman', 'Hughes', 'Hull', 'Humphrey', 'Hunt', 'Hunter', 'Hurley', 'Hurst', 'Hutchinson', 'Hyde', 'Ingram', 'Irwin', 'Jackson', 'Jacobs', 'Jacobson', 'James', 'Jarvis', 'Jefferson', 'Jenkins', 'Jennings', 'Jensen', 'Jimenez', 'Johns', 'Johnson', 'Johnston', 'Jones', 'Jordan', 'Joseph', 'Joyce', 'Joyner', 'Juarez', 'Justice', 'Kane', 'Kaufman', 'Keith', 'Keller', 'Kelley', 'Kelly', 'Kemp', 'Kennedy', 'Kent', 'Kerr', 'Key', 'Kidd', 'Kim', 'King', 'Kinney', 'Kirby', 'Kirk', 'Kirkland', 'Klein', 'Kline', 'Knapp', 'Knight', 'Knowles', 'Knox', 'Koch', 'Kramer', 'Lamb', 'Lambert', 'Lancaster', 'Landry', 'Lane', 'Lang', 'Langley', 'Lara', 'Larsen', 'Larson', 'Lawrence', 'Lawson', 'Le', 'Leach', 'Leblanc', 'Lee', 'Leon', 'Leonard', 'Lester', 'Levine', 'Levy', 'Lewis', 'Lindsay', 'Lindsey', 'Little', 'Livingston', 'Lloyd', 'Logan', 'Long', 'Lopez', 'Lott', 'Love', 'Lowe', 'Lowery', 'Lucas', 'Luna', 'Lynch', 'Lynn', 'Lyons', 'Macdonald', 'Macias', 'Mack', 'Madden', 'Maddox', 'Maldonado', 'Malone', 'Mann', 'Manning', 'Marks', 'Marquez', 'Marsh', 'Marshall', 'Martin', 'Martinez', 'Mason', 'Massey', 'Mathews', 'Mathis', 'Matthews', 'Maxwell', 'May', 'Mayer', 'Maynard', 'Mayo', 'Mays', 'Mcbride', 'Mccall', 'Mccarthy', 'Mccarty', 'Mcclain', 'Mcclure', 'Mcconnell', 'Mccormick', 'Mccoy', 'Mccray', 'Mccullough', 'Mcdaniel', 'Mcdonald', 'Mcdowell', 'Mcfadden', 'Mcfarland', 'Mcgee', 'Mcgowan', 'Mcguire', 'Mcintosh', 'Mcintyre', 'Mckay', 'Mckee', 'Mckenzie', 'Mckinney', 'Mcknight', 'Mclaughlin', 'Mclean', 'Mcleod', 'Mcmahon', 'Mcmillan', 'Mcneil', 'Mcpherson', 'Meadows', 'Medina', 'Mejia', 'Melendez', 'Melton', 'Mendez', 'Mendoza', 'Mercado', 'Mercer', 'Merrill', 'Merritt', 'Meyer', 'Meyers', 'Michael', 'Middleton', 'Miles', 'Miller', 'Mills', 'Miranda', 'Mitchell', 'Molina', 'Monroe', 'Montgomery', 'Montoya', 'Moody', 'Moon', 'Mooney', 'Moore', 'Morales', 'Moran', 'Moreno', 'Morgan', 'Morin', 'Morris', 'Morrison', 'Morrow', 'Morse', 'Morton', 'Moses', 'Mosley', 'Moss', 'Mueller', 'Mullen', 'Mullins', 'Munoz', 'Murphy', 'Murray', 'Myers', 'Nash', 'Navarro', 'Neal', 'Nelson', 'Newman', 'Newton', 'Nguyen', 'Nichols', 'Nicholson', 'Nielsen', 'Nieves', 'Nixon', 'Noble', 'Noel', 'Nolan', 'Norman', 'Norris', 'Norton', 'Nunez', 'Obrien', 'Ochoa', 'Oconnor', 'Odom', 'Odonnell', 'Oliver', 'Olsen', 'Olson', 'Oneal', 'Oneil', 'Oneill', 'Orr', 'Ortega', 'Ortiz', 'Osborn', 'Osborne', 'Owen', 'Owens', 'Pace', 'Pacheco', 'Padilla', 'Page', 'Palmer', 'Park', 'Parker', 'Parks', 'Parrish', 'Parsons', 'Pate', 'Patel', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne', 'Pearson', 'Peck', 'Pena', 'Pennington', 'Perez', 'Perkins', 'Perry', 'Peters', 'Petersen', 'Peterson', 'Petty', 'Phelps', 'Phillips', 'Pickett', 'Pierce', 'Pittman', 'Pitts', 'Pollard', 'Poole', 'Pope', 'Porter', 'Potter', 'Potts', 'Powell', 'Powers', 'Pratt', 'Preston', 'Price', 'Prince', 'Pruitt', 'Puckett', 'Pugh', 'Quinn', 'Ramirez', 'Ramos', 'Ramsey', 'Randall', 'Randolph', 'Rasmussen', 'Ratliff', 'Ray', 'Raymond', 'Reed', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Reyes', 'Reynolds', 'Rhodes', 'Rice', 'Rich', 'Richard', 'Richards', 'Richardson', 'Richmond', 'Riddle', 'Riggs', 'Riley', 'Rios', 'Rivas', 'Rivera', 'Rivers', 'Roach', 'Robbins', 'Roberson', 'Roberts', 'Robertson', 'Robinson', 'Robles', 'Rocha', 'Rodgers', 'Rodriguez', 'Rodriquez', 'Rogers', 'Rojas', 'Rollins', 'Roman', 'Romero', 'Rosa', 'Rosales', 'Rosario', 'Rose', 'Ross', 'Roth', 'Rowe', 'Rowland', 'Roy', 'Ruiz', 'Rush', 'Russell', 'Russo', 'Rutledge', 'Ryan', 'Salas', 'Salazar', 'Salinas', 'Sampson', 'Sanchez', 'Sanders', 'Sandoval', 'Sanford', 'Santana', 'Santiago', 'Santos', 'Sargent', 'Saunders', 'Savage', 'Sawyer', 'Schmidt', 'Schneider', 'Schroeder', 'Schultz', 'Schwartz', 'Scott', 'Sears', 'Sellers', 'Serrano', 'Sexton', 'Shaffer', 'Shannon', 'Sharp', 'Sharpe', 'Shaw', 'Shelton', 'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Shields', 'Short', 'Silva', 'Simmons', 'Simon', 'Simpson', 'Sims', 'Singleton', 'Skinner', 'Slater', 'Sloan', 'Small', 'Smith', 'Snider', 'Snow', 'Snyder', 'Solis', 'Solomon', 'Sosa', 'Soto', 'Sparks', 'Spears', 'Spence', 'Spencer', 'Stafford', 'Stanley', 'Stanton', 'Stark', 'Steele', 'Stein', 'Stephens', 'Stephenson', 'Stevens', 'Stevenson', 'Stewart', 'Stokes', 'Stone', 'Stout', 'Strickland', 'Strong', 'Stuart', 'Suarez', 'Sullivan', 'Summers', 'Sutton', 'Swanson', 'Sweeney', 'Sweet', 'Sykes', 'Talley', 'Tanner', 'Tate', 'Taylor', 'Terrell', 'Terry', 'Thomas', 'Thompson', 'Thornton', 'Tillman', 'Todd', 'Torres', 'Townsend', 'Tran', 'Travis', 'Trevino', 'Trujillo', 'Tucker', 'Turner', 'Tyler', 'Tyson', 'Underwood', 'Valdez', 'Valencia', 'Valentine', 'Valenzuela', 'Vance', 'Vang', 'Vargas', 'Vasquez', 'Vaughan', 'Vaughn', 'Vazquez', 'Vega', 'Velasquez', 'Velazquez', 'Velez', 'Villarreal', 'Vincent', 'Vinson', 'Wade', 'Wagner', 'Walker', 'Wall', 'Wallace', 'Waller', 'Walls', 'Walsh', 'Walter', 'Walters', 'Walton', 'Ward', 'Ware', 'Warner', 'Warren', 'Washington', 'Waters', 'Watkins', 'Watson', 'Watts', 'Weaver', 'Webb', 'Weber', 'Webster', 'Weeks', 'Weiss', 'Welch', 'Wells', 'West', 'Wheeler', 'Whitaker', 'White', 'Whitehead', 'Whitfield', 'Whitley', 'Whitney', 'Wiggins', 'Wilcox', 'Wilder', 'Wiley', 'Wilkerson', 'Wilkins', 'Wilkinson', 'William', 'Williams', 'Williamson', 'Willis', 'Wilson', 'Winters', 'Wise', 'Witt', 'Wolf', 'Wolfe', 'Wong', 'Wood', 'Woodard', 'Woods', 'Woodward', 'Wooten', 'Workman', 'Wright', 'Wyatt', 'Wynn', 'Yang', 'Yates', 'York', 'Young', 'Zamora', 'Zimmerman'],
		organizationSuffix = ['Inc', 'Plc', 'LLC', 'Traders'],
		consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'],
		vowels = ['a', 'e', 'i', 'o', 'u', 'y'],
		previousValue = '',

		isAnyMatch = function (haystack, needles) {
			for (var i = 0, count = needles.length; i < count; i++) {
				if (haystack.indexOf(needles[i]) >= 0) {
					return true;
				}
			}
			return false;
		},

		generateScrambledWord = function (minLength, maxLength, firstLetterLower) {
			if (!minLength)
				minLength = Math.floor(Math.random() * 10) + 3;

			var resultWord = '';
			var odd = true;

			while (resultWord.length < minLength) {
				var newSymbol = odd ? consonants[Math.floor(Math.random() * consonants.length)] : vowels[Math.floor(Math.random() * vowels.length)];
				odd = !odd;
				resultWord += newSymbol;
			}

			if (!firstLetterLower) {
				resultWord = resultWord[0].toUpperCase() + resultWord.substring(1);
			}

			if (maxLength && maxLength > 0) {
				resultWord = resultWord.substring(0, maxLength);
			}

			return resultWord;
		},

		generateWords = function (wordCount, maxLength) {
			var i = 0,
				resultPhrase = '',
				word = '';

			for (; i < wordCount; i++) {
				word = wordBank[Math.floor(Math.random() * (wordBank.length - 1))];
				var phraseLength = resultPhrase.length;

				if (phraseLength == 0 || resultPhrase.substring(phraseLength - 1, phraseLength) == '.' || resultPhrase.substring(phraseLength - 1, phraseLength) == '?') {
					word = word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
				}

				resultPhrase += phraseLength > 0 ? ' ' + word : word;
			}

			if (maxLength && maxLength > 0) {
				resultPhrase = resultPhrase.substring(0, maxLength - 1);
			}

			return resultPhrase;
		},

		generateParagraph = function (maxLength) {
			var resultPhrase = '',
				length = Math.floor(Math.random() * 50) + 20;

			resultPhrase = generateWords(length, maxLength);
			
			return resultPhrase.replace(/[?.!,;]?$/, '.');
		},

		generatePhrase = function (maxLength) {
			var resultPhrase = '',
				length = Math.floor(Math.random()) + 5;

			resultPhrase = generateWords(length, maxLength);

			return resultPhrase.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
		},

		generatePassword = function () {
			if (options.password.random) {
				var password = generateScrambledWord(8).toLowerCase();
				console.log('Generated Password: ' + password);
				return password;
			}
			else {
				return options.password.constant;
			}
		},

		generateEmail = function () {
			var username = (options.email.username_random)
				? generateScrambledWord().toLowerCase()
				: options.email.username_constants[Math.floor(Math.random() * (options.email.username_constants.length))];

			var domain = (options.email.hostname_random)
				? generateScrambledWord().toLowerCase() + '.com'
				: options.email.hostname_constants[Math.floor(Math.random() * (options.email.hostname_constants.length))];

			return username + '@' + domain;
		},

		generateWebsite = function () {
			return ('http://www.' + generateScrambledWord().toLowerCase() + '.com');
		},

		generateNumber = function (start, end) {
			return Math.floor(Math.random() * (end - start + 1) + start);
		},

		generatePhoneNumber = function () {
			return Math.floor((Math.random() * 49)) + ' (' + Math.floor((Math.random() * 999)) + ') ' + Math.floor((Math.random() * 899) + 100) + '-' + Math.floor((Math.random() * 89) + 10) + '-' + Math.floor((Math.random() * 89) + 10);
		},

		generateDate = function () {
			return ('0' + generateNumber(1, 12)).slice(-2) + '/' + ('0' + generateNumber(1, 12)).slice(-2) + '/' + generateNumber(1970, new Date().getFullYear());
		},

		generateDay = function () {
			return ('0' + generateNumber(1, 28)).slice(-2);
		},

		generateMonth = function () {
			return ('0' + generateNumber(1, 12)).slice(-2);
		},

		generateYear = function () {
			return generateNumber(1970, new Date().getFullYear());
		},

		generateFirstName = function () {
			return firstNames[generateNumber(0, firstNames.length - 1)];
		},

		generateLastName = function () {
			return lastNames[generateNumber(0, lastNames.length - 1)];
		},

		generateOrganizationName = function () {
			return generateLastName() + ' ' + generateLastName() + ' ' + organizationSuffix[generateNumber(0, organizationSuffix.length - 1)]
		},

		generateValueByType = function (element) {
			var elementName = element.name + element.id + ((options.field_detect_using_class == true) ? element.className : '');
			elementName = elementName.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

			if (isAnyMatch(elementName, options.field_types.confirm)) {
				return previousValue;
			}
			if (isAnyMatch(elementName, options.field_types.email)) {
				return generateEmail();
			}
			if (isAnyMatch(elementName, options.field_types.number)) {
				return generateNumber(1, 1000);
			}
			if (isAnyMatch(elementName, options.field_types.telephone)) {
				return generatePhoneNumber();
			}
			if (isAnyMatch(elementName, options.field_types.website)) {
				return generateWebsite();
			}
			if (isAnyMatch(elementName, options.field_types.date)) {
				return generateDate();
			}
			if (isAnyMatch(elementName, options.field_types.day)) {
				return generateDay();
			}
			if (isAnyMatch(elementName, options.field_types.month)) {
				return generateMonth();
			}
			if (isAnyMatch(elementName, options.field_types.year)) {
				return generateYear();
			}
			if (isAnyMatch(elementName, options.field_types.organization)) {
				return generateOrganizationName();
			}
			if (isAnyMatch(elementName, options.field_types.username)) {
				return generateScrambledWord(5, 10, true);
			}
			if (isAnyMatch(elementName, options.field_types.firstname)) {
				return generateFirstName();
			}
			if (isAnyMatch(elementName, options.field_types.lastname)) {
				return generateLastName();
			}
			if (isAnyMatch(elementName, options.field_types.fullname)) {
				return generateFirstName() + ' ' + generateLastName();
			}

			return generatePhrase(element.maxLength);
		},

		selectRandomRadio = function (name) {
			var i = 0,
				list = [],
				elements = document.getElementsByName(name),
				count = elements.length;

			for (; i < count; i++) {
				if (elements[i].type == 'radio') {
					list.push(elements[i]);
				}
			}

			list[Math.floor(Math.random() * list.length)].checked = true;
		};

	return {
		fillAllInputs: function () {
			$('input:enabled:not([readonly])').each(function () {
				var elementName = (this.name + this.id + this.className).toLowerCase();
				if (isAnyMatch(elementName, options.ignore_fields)) {
					return true;
				}

				if (this.type == 'checkbox') {
					this.checked = (Math.random() > 0.5) ? 'checked' : '';
				}
				else if (this.type == 'date') {
					this.value = generateYear() + '-' + generateMonth() + '-' + generateDay();
				}
				else if (this.type == 'email') {
					this.value = generateEmail();
				}
				else if (this.type == 'month') {
					this.value = generateYear() + '-' + generateMonth();
				}
				else if (this.type == 'number' || this.type == 'range') {
					var min = 1,
						max = 100;
						
					if (this.min) { min = parseInt(this.min); }
					if (this.max) { max = parseInt(this.max); }
					this.value = generateNumber(min, max);
				}
				else if (this.type == 'password') {
					if (isAnyMatch(this.name.toLowerCase(), options.field_types.confirm)) {
						this.value = previousValue;
					}
					else {
						previousValue = generatePassword();
						this.value = previousValue;
					}
				}
				else if (this.type == 'radio') {
					selectRandomRadio(this.name);
				}
				else if (this.type == 'tel') {
					this.value = generatePhoneNumber();
				}
				else if (this.type == 'text') {
					previousValue = generateValueByType(this);
					this.value = previousValue;
				}
				else if (this.type == 'url') {
					this.value = generateWebsite();
				}
			});
			$('textarea:enabled:not([readonly])').each(function () {
				this.value = generateParagraph(this.maxLength);
			});
			$('select:enabled:not([readonly])').each(function () {
				if (this.options && this.options.length > 1) {
					var i = 0,
						optionsCount = this.options.length;

					if (this.multiple) {
						var count = generateNumber(1, optionsCount);

						for (; i < optionsCount; i++) {
							if (!this.options[i].disabled) {
								this.options[i].selected = false;
							}
						}

						for (i = 0; i < count; i++) {
							if (!this.options[i].disabled) {
								this.options[generateNumber(1, optionsCount - 1)].selected = true;
							}
						}
					}
					else {
						var iteration = 0;
						
						while (iteration < optionsCount) {
							var randomOption = Math.floor(Math.random() * (optionsCount - 1)) + 1;

							if (!this.options[randomOption].disabled) {
								this.options[randomOption].selected = true;
								break;
							}
							else {
								iteration++;
							}
						}
					}
				}
			});
		}
	};
};

chrome.extension.sendRequest(null, 'getOptions', function (response) {
	if (!window.formFiller) {
		window.formFiller = new FormFiller(jQuery, response.options);
		if (response.options.hotkey.enabled && response.options.hotkey.combination.length > 0) {
			key(response.options.hotkey.combination, function () {
				chrome.extension.sendRequest(null, 'trackHotkeyClick', function (response) {});
				window.formFiller.fillAllInputs();
			});
		}
	}
});
