import java.util.Random;

public class TestPuzzling {
    public static void main(String[] args) {
        Puzzling appTest = new Puzzling();
        System.out.println("random numbers: " + appTest.getTenRolls(10));
        System.out.println("random letter:" + appTest.getLetter(""));
    }
}
