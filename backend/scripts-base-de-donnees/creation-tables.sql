----- Tables -----

create table scouts (
scoutId integer not null default autoincrement,
scoutPrenom char(255) not null,
scoutNom char(255) not null,
constraint pk_scouts primary key (scoutId)
)

--

create table roles (
roleId integer not null default autoincrement,
roleLib char(255) not null,
constraint pk_roles primary key (roleId)
)

--

create table patrouilles (
patrId integer not null default autoincrement,
patrNom char(255) not null,
constraint pk_patrouilles primary key (patrId)
)

--

create table donnees (
scout integer not null,
totem char(255) null,
patrouille integer not null,
role integer not null,
telephone char(255) null,
mail char(255) null,
rue char(255) null,
numero char(255) null,
code char(4) null,
ville char(255) null,
pays char(255) null,
constraint fk_donnees_scouts foreign key (scout) references scouts(scoutId),
constraint fk_donnees_patrouilles foreign key (patrouille) references patrouilles(patrId),
constraint fk_donnees_roles foreign key (role) references roles(roleId),
constraint pk_donnees primary key (scout)
)