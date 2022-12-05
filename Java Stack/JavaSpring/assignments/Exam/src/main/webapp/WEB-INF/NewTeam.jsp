<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" import="java.util.Date" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Demo JSP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/style.css"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


</head>
<body style="font-family: monospace; margin: 0 auto; width: 80%">
<p><a href="/bookmarket">Back to Shelves</a></p>
<h1>Add a book to your shelf!</h1>
<%--@elvariable id="team" type=""--%>
<form:form action="/teams/create" method="post" modelAttribute="team">
    <p>
        <form:label path="Tname">TeamName: </form:label>
        <form:errors path="Tname"/>
        <form:input path="Tname"/>
    </p>
    <p>
        <form:label path="skill">Skill Level: </form:label>
        <form:errors path="skill"/>
        <form:input path="skill"/>
    </p>
    <p>
        <form:label path="gameDay">Game Day: </form:label>
        <form:errors path="gameDay"/>
        <form:input path="gameDay"/>
    </p>
    <input class="btn btn-success" type="submit" value="Submit"/>
</form:form>
</body>
</html>