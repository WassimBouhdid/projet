----- Insertion données -----

insert into scouts
(scoutPrenom, scoutNom, patrouille, role)
values 
('Bastien', 'Sabeau', 2, 1),
('Martin', 'Malfroid', 3, 1),
('Aléandro', 'Gerardin', 2, 2),
('Alexandre', 'Delory', 1, 2),
('Mael', 'Albertuccio', 1, 3),
('Adrien', 'Florins', 1, 3),
('Theodore', 'Desmanet', 3, 3),
('Mathias', 'Alesi', 2, 3),
('Aubrien', 'Allart',1 ,1),
('Nathan', 'Bernardi', 2, 3),
('Robin', 'Dery', 2, 3),
('Flaba', 'Esteban', 2, 3),
('Gabriel', 'Lefevre', 3, 3),
('Logan', 'Lorent', 2, 3),
('Florian', 'Maes', 3, 3),
('Rénathan', 'Nonnveiler', 3, 2),
('Roelands', 'Félix', 1, 3);

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
('Patrouille d''Alcyon'),
('Patrouille de Basindo'),
('Patrouille de Coryi');

--