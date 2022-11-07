<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script type="text/javascript" src="js/time.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    <!-- <%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %> -->
    <title>Index Page</title>
</head>
<body>
    <div class="container">
        <div class="row bg-dark text-warning d-flex justify-content-center jumbotron">
            <h1>Ninja Gold!</h1>
        </div>
        <div class="row score mb-2">
            <h4>Your Gold: <span> <c:out value="${total_gold}"></c:out></span></h4>
        </div>

        <div class="row">
            <div class="place border border-dark rounded col-md-3 pt-2 pb-4">
                <h3 class="d-flex justify-content-center">Farm</h3>
                <p class="d-flex justify-content-center">earn 10-20 gold</p>
                <form action="/process_money" method="post" class="d-flex justify-content-center">
                    <input type="hidden" name="building" value="farm" />
                    <input type="submit" value="Find Gold!" class="btn btn-warning" />
                </form>
            </div>
            <div class="place border border-dark rounded col-md-3 pt-2 pb-4">
                <h3 class="d-flex justify-content-center">Cave</h3>
                <p class="d-flex justify-content-center">earn 5-10 gold</p>
                <form action="/process_money" method="post" class="d-flex justify-content-center">
                    <input type="hidden" name="building" value="cave" />
                    <input type="submit" value="Find Gold!" class="btn btn-warning" />
                </form>
            </div>
            <div class="place border border-dark rounded col-md-3 pt-2 pb-4">
                <h3 class="d-flex justify-content-center">House</h3>
                <p class="d-flex justify-content-center">earn 2-5 gold</p>
                <form action="/process_money" method="post" class="d-flex justify-content-center">
                    <input type="hidden" name="building" value="house" />
                    <input type="submit" value="Find Gold!" class="btn btn-warning" />
                </form>
            </div>
            <div class="place border border-dark rounded col-md-3 pt-2 pb-4">
                <h3 class="d-flex justify-content-center">Casino</h3>
                <p class="d-flex justify-content-center">earn/lose 0-50 gold</p>
                <form action="/process_money" method="post" class="d-flex justify-content-center">
                    <input type="hidden" name="building" value="casino" />
                    <input type="submit" value="Find Gold!" class="btn btn-warning" />
                </form>
            </div>
        </div>

        <div class="row mt-2">
            <h5><u>Activities</u>:</h5>
            <div class="activities border border-dark pl-3 mb-2">
                <!-- <p><c:out value="${message}"></c:out></p> -->
                <c:forEach var="activity" items="${activities}">
                    <p style="margin: 0px;"><c:out value="${activity}" /></p>
                </c:forEach>
            </div>

        </div>

        <div class="footer">
            <a href="/reset" class="btn btn-dark text-warning" role="button" name="reset">Start New Game</a>
        </div>
    </div>
</body>
</html>