## <span style="color:green">Escribe las consultas XQuery que permitan obtener la siguiente información sobre el ejercicio de biblioteca:</span>

## <span style="color:blue">1. Título y editorial de todos los libros.</span>
○ Los datos de cada libro deben estar dentro de un elemento `<libro>`.
○ El título y la editorial de cada libro deben estar separados por un guión medio (-).

<libros>
{
    for $libro in doc("biblioteca.xml")//libro
    return <libro>{concat($libro/titulo/text(), ' - ', $libro/editorial/text())}</libro>
}
</libros>

## <span style="color:blue">2. El título de todos los libros de menos de 400 páginas.</span>
○ Se debe obtener únicamente los datos, sin etiquetas.

for $titulo in doc("biblioteca.xml")//libro[paginas < 400]/titulo/text()
return $titulo

## <span style="color:blue">3. La cantidad de libros de más de 400 páginas.</span>

## <span style="color:blue">4. Una lista HTML con el título de los libros de la editorial O'Reilly Media ordenados por título.</span>

## <span style="color:blue">5. Título y editorial de los libros de 2018 y 2019.</span>
○ Los datos de cada libro deben estar dentro de un elemento `<libro>`.
○ El título y la editorial deben ir dentro de los elementos `<titulo>` y `<editorial>` respectivamente.

## <span style="color:blue">6. Título y editorial de los libros con más de un autor.</span>
○ Los datos de cada libro deben estar dentro de un elemento `<libro>`.
○ El título y la editorial deben ir dentro de los elementos `<titulo>` y `<editorial>` respectivamente.

## <span style="color:blue">7. Título y año de publicación de los libros que tienen versión electrónica.</span>
○ Los datos de cada libro deben estar dentro de un elemento `<libro>`.
○ El título y el año de publicación deben ir dentro de los elementos `<titulo>` y `<fecha-publicacion>` respectivamente.

## <span style="color:blue">8. Título de los libros que no tienen versión electrónica.</span>
○ Se debe obtener únicamente los datos, sin etiquetas.
