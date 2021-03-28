DELIMITER $$
	CREATE FUNCTION new_id() RETURNS CHAR(8)
	DETERMINISTIC
	BEGIN
		return (select LEFT(UUID(), 8));
	end$$

insert into users(id, email, password) values (new_id(), 'admin@email.com', '$2b$15$/kIa8vd4Vw5cE6CwR.iu3ezh/PpkFH38B5lTaIb9.GfeA5EGX94A6');
