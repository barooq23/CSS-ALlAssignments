import java.util.ArrayList;

public class TestOrder {
    public static void main(String[] args) {

        Item item1 = new Item("mocha", 4.5);
        Item item2 = new Item("latte", 3.5);
        Item item3 = new Item("cappucino", 4.0);
        Item item4 = new Item("drip coffee", 3.0);

        // Create 2 orders for unspecified guests (without specifying a name);

        Order order1 = new Order();
        Order order2 = new Order();

        // Create 3 orders using the overloaded constructor to give each a name for the
        // order.

        Order order3 = new Order("Roshi");
        Order order4 = new Order("Rayleigh");
        Order order5 = new Order("Dohko");

        /*
         * Add at least 2 items to each of the orders using the addItem method you
         * wrote,
         * for example, to add item1 to order3 you would need to call the addItem method
         * from
         * the order3 instance like so: order3.addItem(item1);
         */
        order1.addItem(item3);
        order1.addItem(item1);
        order1.addItem(item2);

        order3.addItem(item1);
        order3.addItem(item2);

        order4.addItem(item4);
        order4.addItem(item3);

        order5.addItem(item2);
        order5.addItem(item4);

        // Implement getStatusMessage method
        System.out.println(order1.getStatusMessage());
        System.out.println(order3.getStatusMessage());
        System.out.println(order4.getStatusMessage());
        System.out.println(order5.getStatusMessage());

        // Print getStatuMessage to see if ready (order2.setReady(true);
        // System.out.println(order2.getStatusMessage());)
        order1.setReady(true);
        System.out.println(order1.getStatusMessage());
        order3.setReady(true);
        System.out.println(order3.getStatusMessage());

        order4.setReady(false);
        System.out.println(order4.getStatusMessage());

        order5.setReady(true);
        System.out.println(order5.getStatusMessage());

        // Test the total by printing the return value like so:
        System.out.println(order1.getOrderTotal());
        System.out.println(order3.getOrderTotal());
        System.out.println(order4.getOrderTotal());
        System.out.println(order5.getOrderTotal());

        // Call the display method on all of your orders, like so: order3.display();

        order3.addItem(item2);
        order3.addItem(item1);
        order3.addItem(item4);
        order3.display();

        order1.addItem(item2);
        order1.addItem(item3);
        order1.addItem(item1);
        order1.display();

        order4.addItem(item3);
        order4.addItem(item2);
        order4.display();

        order5.addItem(item3);
        order5.addItem(item4);
        order5.addItem(item2);
        order5.display();

    }
}
