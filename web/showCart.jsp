<%@ page import="models.Cart" %><%--
  Created by IntelliJ IDEA.
  User: marus
  Date: 21.09.2020
  Time: 1:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Show Cart</title>
</head>
<body>
    <% Cart cart = (Cart) session.getAttribute("cart"); %>

    <p>Вот <%= cart.getName()%> </p>
    <p>Так <%=cart.getCount()%> </p>
</body>
</html>
