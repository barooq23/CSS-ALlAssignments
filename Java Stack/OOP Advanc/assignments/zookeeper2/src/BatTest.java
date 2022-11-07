public class BatTest {

	public static void main(String[] args) {
		Bat bat = new Bat();
		System.out.println();
		
		
		bat.energyLevel=300;
		bat.displayEnergy();

        System.out.println("****");

        // Attack three towns, 
        bat.attackTown();
        bat.attackTown();
        bat.attackTown();
        // , eat two humans
        bat.eatHumans();
        bat.eatHumans();
        //and fly twice.
        bat.fly();
        bat.fly();

        System.out.println("****");

        // display
        bat.displayEnergy();
		
		
		

	}

}
