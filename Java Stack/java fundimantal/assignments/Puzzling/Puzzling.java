import java.util.Random;
public class Puzzling {
    int[] getTenRolls(int rolls){
        Random randMachine = new Random();
        int[] arr = new int[rolls];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = randMachine.nextInt(20);
            System.out.println(arr[i]);
            }
            return arr;
    }
    String getLetter(String letters){
        Random randMachine = new Random();
        String[] myArr = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        int num = randMachine.nextInt(26);
        String letter = myArr[num];
        System.out.println(myArr[num]);
        return letter;
    }


}