-- 1.Imagina que estás diseñando una base de datos para gestionar una librería. Cree una tabla llamada "Libros" con atributos para book_id, título, autor, género, año_publicado, isbn, precio, calificación y stock_count.
CREATE TABLE Libros (
book_id INTEGER NOT NULL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  genero TEXT NOT NULL,
  año_publicado INT NOT NULL,
  isbn VARCHAR(20),
  precio INT NOT NULL,
  calificacion DECIMAL(2,1) CHECK(calificacion >= 0 AND calificacion <= 10),
  stock_count INT NOT NULL
);
--2. Quieres agregar más detalles sobre cada libro. Modifique la tabla "Libros" para incluir columnas para el editor y el número de páginas.
ALTER TABLE Libros 
ADD COLUMN editor TEXT NOT NULL;
ALTER TABLE Libros 
ADD COLUMN paginas TEXT NOT NULL;

SELECT * FROM Libros;

-- 3.Has recibido stock nuevo para la librería. Inserte detalles de los siguientes libros:

-- "Un viaje al centro" de Julio Verne

-- Género: Aventura
-- Año de publicación: 1864
-- ISBN: 1234567890123
-- Precio: $12.99
-- Calificación: 4.5
-- Número de existencias: 10
-- Editorial: Editorial Verne
-- Páginas: 350
-- "Guerra y paz" de León Tolstoi

-- Género: Histórico
-- Año de publicación: 1869
-- ISBN: 1234567890124
-- Precio: $14.99
-- Calificación: 4.8
-- Número de existencias: 5
-- Editorial: Impresiones de Tolstoi
-- Páginas: 1200
-- "Susurros del viento" de Amelia Blackburn

-- Género: Romance
-- Año de publicación: 1982
-- ISBN: 1234567890125
-- Precio: $9.99
-- Calificación: 4.2
-- Número de existencias: 20
-- Editorial: Casa Blackburn
-- Páginas: 275
-- "La Odisea Galáctica" de Orion Starfield

-- Género: Ciencia ficción
-- Año de publicación: 2005
-- ISBN: 1234567890126
-- Precio: $19.99
-- Calificación: 4.9
-- Número de existencias: 15
-- Editorial: Prensa Nebulosa
-- Páginas: 450
-- Según estos detalles, inserte la información en la tabla Libros.

INSERT INTO Libros (titulo,autor,genero,año_publicado,isbn,calificacion,stock_count,editor,paginas,precio)
values ('Un viaje al centro','Julio Verne', 'Aventura',1864,'1234567890123',12,4.5,10,'Editorial Verne', 350 );
INSERT INTO Libros (titulo, autor, genero, año_publicado, isbn, calificacion, stock_count, editor, paginas, precio)
VALUES ('Guerra y paz', 'León Tolstoi', 'Histórico', 1869, '1234567890124', 4.8, 5, 'Impresiones de Tolstoi', 1200, 14.99);

INSERT INTO Libros (titulo, autor, genero, año_publicado, isbn, calificacion, stock_count, editor, paginas, precio)
VALUES ('Susurros del viento', 'Amelia Blackburn', 'Romance', 1982, '1234567890125', 4.2, 20, 'Casa Blackburn', 275, 9.99);

INSERT INTO Libros (titulo, autor, genero, año_publicado, isbn, calificacion, stock_count, editor, paginas, precio)
VALUES ('La Odisea Galáctica', 'Orion Starfield', 'Ciencia ficción', 2005, '1234567890126', 4.9, 15, 'Prensa Nebulosa', 450, 19.99);

-- 4.Ha habido una reducción de precio para "Guerra y paz" y se vendió una copia. Actualice el precio y el recuento de existencias de este libro.

UPDATE Libros
SET precio = precio - 1
WHERE titulo = 'Guerra y paz';

UPDATE Libros
SET stock_count = stock_count - 1
WHERE titulo = 'Guerra y paz';

--5. Has contratado a un asistente para la librería llamado Martin. Concédale permiso para ver y actualizar la tabla Libros, pero no debería poder eliminar ningún registro. Dirección IP de Martinis martin@localhost.
CREATE ROLE asistente
GRANT asistente TO 'martin@localhost';
GRANT SELECT, UPDATE ON Libros TO asistente;
REVOKE DELETE ON Libros FROM  asistente;
--6. Decide eliminar un libro con BookID = 101 de la tabla Libros. Asegúrese de que este cambio se guarde permanentemente.
BEGIN TRANSACTION;
DELETE FROM Libros WHERE book_id=101;
COMMIT; 

-- 7.Estás probando la base de datos eliminando un libro con BookID = 103 pero deseas revertir el cambio inmediatamente después.
BEGIN TRANSACTION;
DELETE FROM Libros WHERE book_id=101;
ROLLBACK; 


-- 8.
Muestre a las pasajeras que sobrevivieron y que tienen más de 30 años.
SELECT Name FROM tested WHERE Sex= 'female' AND Survived=1 AND Age >30 
--
Encuentre la edad promedio de los hombres que no sobrevivieron.
SELECT AVG(Age) FROM tested WHERE Sex='male' AND Survived= 0;
-- 
Muestra información para los pasajeros que gastaron entre $20 y $50 en sus boletos y subieron al barco en el puerto 'C'.

SELECT PassengerId FROM tested WHERE Fare BETWEEN 20 AND 50
AND Embarked ='C'
--
Calcula el número total de supervivientes de la primera clase.
SELECT COUNT(*) FROM tested WHERE Pclass=1 AND Survived= 1;


--
 Mostrar la información de los pasajeros que embarcaron desde Cherburgo (puerto 'C') y gastaron más de $75 en sus billetes.

 SELECT * FROM tested WHERE Embarked='C' AND Fare > 75;

