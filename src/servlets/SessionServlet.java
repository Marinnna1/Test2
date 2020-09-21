package servlets;

import models.Cart;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class SessionServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Cart cart = (Cart)session.getAttribute("cart");

        String name = req.getParameter("name");
        int count = Integer.parseInt(req.getParameter("count"));

        if(cart == null){
            cart = new Cart();
            cart.setName(name);
            cart.setCount(count);
        }
        PrintWriter writer = resp.getWriter();
        writer.write(name);
        writer.write(count);
        writer.close();
        session.setAttribute("cart", cart);

        getServletContext().getRequestDispatcher("/showCart.jsp").forward(req, resp);
    }
}
