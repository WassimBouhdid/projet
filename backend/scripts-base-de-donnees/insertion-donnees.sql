----- Insertion données -----

insert into scouts
(scoutPrenom, scoutNom)
values 
('Bastien', 'Sabeau'),
('Martin', 'Malfroid'),
('Aleandro', 'Gerardin'),
('Alexandre', 'Delory'),
('Mael', 'Albertuccio'),
('Adrien', 'Florins'),
('Theodore', 'Desmanet');

--

insert into roles
(roleLib)
values 
('Chef de patrouille'),
('Second de patrouille'),
('Scout');

--

insert into patrouilles
(patrNom)
values
('Patrouille de Coryi'),
('Patrouille de Basindo'),
('Patrouille d''Alcyon');

--

insert into donnees
(scout, totem, patrouille, role, pays)
values
(1, 'Basindo', 2, 1, 'Belgique'),
(2, 'Coryi', 1, 1, 'Belgique'),
(3, 'Manati', 2, 2, 'Belgique'),
(4, 'Miriki', 3, 2, 'Belgique'),
(5, 'Springbok', 2, 3, 'Belgique'),
(6, 'Orignal', 3, 3, 'Belgique'),
(7, 'Boomslang', 3, 3, 'Belgique');