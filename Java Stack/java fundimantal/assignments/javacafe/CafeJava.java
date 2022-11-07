import java.util.Arrays;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES

        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        double mochaPrice = 6.5;
        double dripCoffeePrice = 7.0;
        double lattePrice = 12.5;
        double cappucinoPrice = 4.5;
        

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Jimmy";
        String customer3 = "Noah";
        String customer4 = "sam";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

    
        System.out.println(generalGreeting + customer1); 

        System.out.println(customer1 + pendingMessage);

        if (isReadyOrder4) {
            System.out.println(generalGreeting + customer4);
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappucinoPrice);
            System.out.println(displayTotalMessage + lattePrice * 2);
        } else {
            System.out.println(customer4 + pendingMessage);
            
        }

        
        if (isReadyOrder2) {
            System.out.println(generalGreeting + customer1);
            System.out.println(customer2 + readyMessage);
        } else {
            System.out.println(customer2 + pendingMessage);
        }
        System.out.println(displayTotalMessage + (dripCoffeePrice - lattePrice));


        if (isReadyOrder3) {
            System.out.println(customer3 + readyMessage);
        } else {
            System.out.println(customer3 + pendingMessage);
        }
        System.out.println(displayTotalMessage + (cappucinoPrice + mochaPrice));

    }
}
