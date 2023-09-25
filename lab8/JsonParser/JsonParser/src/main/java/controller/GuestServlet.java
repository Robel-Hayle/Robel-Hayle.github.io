import app.Guest;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "guestServlet", urlPatterns = {"/guest.ajax"})
public class GuestServlet extends HttpServlet {

    private List<Guest> guestList = new ArrayList<>();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        String JSONguests = new Gson().toJson(guestList);
        response.getWriter().write(JSONguests);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String firstInput = request.getParameter("first");
        String lastInput = request.getParameter("last");
        guestList.add(new Guest(firstInput, lastInput));

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        String JSONguests = new Gson().toJson(guestList);
        response.getWriter().write(JSONguests);
    }
}
