import java.util.ArrayList;

public class CafeBusinessLogic {


    public int getStreakGoal(int sum) {
        sum = 0;
        for (int i = 0; i < 11; i++) {
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (double price : prices) {
            sum += price;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItem) {
        int i = 1;
        for (String menu : menuItem) {
            System.out.println(i + "." + menu);
            i++;
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello " + userName);
        System.out.println("There are " + customers.size() + " ahead of you");
        customers.add(userName); // to add an item to an ArrayList

        System.out.println(customers.toString());

    }

}