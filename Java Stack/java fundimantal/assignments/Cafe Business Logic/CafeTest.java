import java.util.ArrayList;
import java.util.Arrays;

public class CafeTest {
    public static void main(String[] args) {

        CafeBusinessLogic Cafe = new CafeBusinessLogic();

        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", Cafe.getStreakGoal(10));

        System.out.println("----- Order Total Test-----");
        double[] lineItems = { 3.5, 1.5, 4.0, 4.5 };
        System.out.printf("Order total: %s \n\n", Cafe.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test-----");

        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        Cafe.displayMenu(menu);

        System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();

        for (int i = 0; i < 4; i++) {
            Cafe.addCustomer(customers);
            System.out.println("\n");
        }
    }
}