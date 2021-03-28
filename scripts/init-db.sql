create database tasks;
create user 'tasks'@'%' identified by '321654';
grant all privileges on *.* to 'tasks'@'%' with grant option;
flush privileges;
