import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        String hello = "Hello, ";
        return hello + name;
    }
    
    public String dateAnnouncement() {
        String today = "Today's date is, ";
        Date date = new Date();
        return today + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        if(conversation.indexOf("Alexis")>= 0){
            String snarkyString = "Right away, sir. She certainly isn't sophisticated enough for that.";
            return snarkyString;
        }
        else if(conversation.indexOf("Alfred")>= 0){
            String proudString = "At your service. As you wish, naturally.";
            return proudString;
        }
        else{
            String retire = "Right. And with that I shall retire." ;
            return retire;
        }
    }
}

