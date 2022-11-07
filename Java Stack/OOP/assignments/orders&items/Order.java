
import java.util.ArrayList;

public class Order<Item> {

    public String name;
    public double total;
    public boolean ready;
    public ArrayList<Item> items = new ArrayList<Item>();
}