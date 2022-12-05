<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" import="java.util.Date" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Demo JSP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous">
    <link rel="stylesheet" href="/css/style.css"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>


</head>
<body style="margin: 0 auto; width: 80%; font-family: monospace">
<br>
<p style="font-weight: bold; font-size: 30px">${team.teamname}</p>
<br>
<br>
<c:choose>
    <c:when test="${user_id == team.user.id}">
        <p> Team Name <c:out value="${team.teamname}"/></p>
        <p> Skill Level</p>
        <p>${team.skill}</p>
    </c:when>
    <c:otherwise>
        <p><c:out value="${team.user.userName}"/> Show <c:out value="${team.teamname}"/></p>
        <p> Here are <c:out value="${team.user.userName}"/> Team Name</p>
        <p>${team.skill}</p>
    </c:otherwise>
</c:choose>

<hr>
<td>
    <c:if test="${user_id == team.user.id}">
        <div style="display: flex;">
            <form action="/books/${team.id}" method="post">
                <input type="hidden" name="_method" value="delete">
                <input class="btn btn-danger" type="submit" value="Delete">
            </form>
            <div style="margin-left: 20px; color: wheat;"><a class="btn btn-success" href="/teams/${team.id}/edit">Edit</a>
            </div>
        </div>
    </c:if>
</td>

</body>
</html>