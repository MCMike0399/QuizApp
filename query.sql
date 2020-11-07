use preguntasexamen;
create table preguntas (
	numPreg int primary key,
    oracion varchar(2000),
    incisoA varchar(2000),
    incisoB varchar(2000),
    incisoC varchar(2000),
    incisoD varchar(2000),
    incisoE varchar(2000),
    resp char)
create table usuarios(
	correo varchar(200) primary key,
    nombre varchar(200),
    apellido varchar(200),
    pass varchar(200),
    flag bit)
create table examen(
	correo varchar(200) not null,
	cExamen int primary key,
    calif int,
    foreign key (correo) references usuarios(correo))
insert into preguntas 
	values(
    1,
    'Es la operación, actividad, conducta o comportamiento de un Cliente que no concuerde con los antecedentes o actividad conocida por la Casa de Bolsa o declarada a esta, o con el perfil transaccional inicial o habitual de dicho Cliente, en función al origen o destino de los recursos, así como al monto, frecuencia, tipo o naturaleza de la Operación de que se trate, sin que exista una justificación razonable',
    'Inusual ',
    'Relevante',
    'Interna Preocupante',
    'Fuera de Perfil',
    'Paraíso Fiscal',
    'A')
insert into preguntas 
	values(
    2,
    '¿Cuántas veces, por lo menos, se debe capacitar al personal en Prevención de Lavado de Dinero, al año?',
    'Tres veces año',
    'Una vez al año',
    'Cinco veces al año',
    'Cada 6 meses',
    'Ninguna de las anteriores',
    'B')
insert into preguntas 
	values(
    3,
    'Es la persona que desempeña un cargo público destacado en el gobierno',
    'Persona Políticamente Expuesta ',
    'PEP asimilado',
    'Asimilado',
    'Empleado Público',
    'Persona Puesta en la Política',
    'A')
insert into preguntas 
	values(
    4,
    '¿Cuáles son los grados de riesgo, que al menos debe contemplar la Casa de Bolsa?',
    'Bajo y Medio',
    'Medio y Alto',
    'Bajo Medio y Alto',
    'Bajo y Alto',
    'Ninguna de las Anteriores',
    'D')
insert into preguntas 
	values(
    5,
    'Es la operación que se realiza con los billetes y las monedas metálicas de curso legal en los Estados Unidos Mexicanos o en cualquier otro país, así como con cheques de viajero y monedas acuñadas en platino, oro y plata, por un monto igual o superior al equivalente en moneda nacional a siete mil quinientos dólares en efectivo de los Estados Unidos de América',
    'Inusual',
    'Relevante',
    'Interna Preocuapante',
    'Amonedados',
    'Cheques de Viajero',
    'D')
insert into preguntas 
	values(
    6,
    '¿Qué es la Reserva y Confidencialidad?',
    'No divulgar información relacionada a los reportes de las operaciones, así  como alertarlos',
    'Tener reserva de las operaciones que se vayan a realizar con los clientes',
    'Conservar la información de reportes por varios años, sólo si lo pide la CNBV proporcionarlos',
    'No proporcionar información de lo que pasa en la Casa de Bolsa',
    'No proporcionar información sensible de los clientes',
    'A')