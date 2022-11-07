import java.util.Set;
import java.util.HashMap;

public class MapoftheHashmatique {
    public static void main(String[] args) {
        HashMap<String, String> songList = new HashMap<String, String>();
        songList.put("Used 2", "Rolling the city girl we can catch a nice vibe");
        songList.put("Night Time", "She go let me in when it's night time");
        songList.put("Handcuffs", "She tryna sweat like a sauna, i'm tryna hit til manana");
        songList.put("Money On Me", "Baby you see this money on me");

        String name = songList.get("Night Time");
        System.out.println(name);

        Set<String> keys = songList.keySet();
        for (String key : keys) {
            System.out.println(key);
            System.out.println(songList.get(key));
        }
    }
}
